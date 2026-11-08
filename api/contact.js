// Server-side endpoint for hosts that support /api functions (e.g. Vercel).
// Required env: RESEND_API_KEY, CONTACT_TO_EMAIL. Optional: CONTACT_FROM_EMAIL.
// Never expose RESEND_API_KEY through VITE_ variables or frontend source.
const RATE_WINDOW_MS = 60_000;
const recent = new Map(); // best effort per instance; use durable rate limiting in production.
export default async function handler(req, res) {
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return res.status(405).json({error:'Method not allowed'}); }
  const ip = String(req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown').split(',')[0].trim();
  const now = Date.now();
  if (recent.size > 1000) for (const [key,time] of recent) if (now-time>RATE_WINDOW_MS) recent.delete(key);
  if (now - (recent.get(ip)||0) < RATE_WINDOW_MS) return res.status(429).json({error:'Pokušajte ponovno za minutu.'});
  const {name,email,company='',message='',website=''} = req.body || {};
  if (website) return res.status(200).json({ok:true}); // honeypot
  if (![name,email,message].every(v=>typeof v==='string') || typeof company!=='string' || name.length>120 || email.length>254 || company.length>160 || message.length>5000 || !name.trim() || !message.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({error:'Provjerite unesene podatke.'});
  const apiKey=process.env.RESEND_API_KEY, to=process.env.CONTACT_TO_EMAIL;
  const from=process.env.CONTACT_FROM_EMAIL || 'AutoMind web <web@automindorderly.com>';
  if (!apiKey || !to) return res.status(503).json({error:'Kontaktni servis nije konfiguriran.'});
  recent.set(ip,now);
  const safe=v=>String(v).replace(/[\r\n]/g,' ').trim();
  try {
    const response=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:'Bearer '+apiKey,'Content-Type':'application/json'},body:JSON.stringify({from,to:[to],reply_to:safe(email),subject:'AutoMind web upit — '+safe(name).slice(0,80),text:'Ime: '+safe(name)+'\nE-mail: '+safe(email)+'\nTvrtka: '+safe(company)+'\n\nPoruka:\n'+message.trim()})});
    if(!response.ok){console.error('Resend delivery request failed',response.status);return res.status(502).json({error:'Slanje trenutačno nije dostupno.'});}
    return res.status(200).json({ok:true});
  } catch(err){console.error('Contact service failure',err);return res.status(502).json({error:'Slanje trenutačno nije dostupno.'});}
}
