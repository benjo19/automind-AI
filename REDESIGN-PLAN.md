# AutoMind AI — redizajn web stranice (radna verzija)

Status: priprema; bez objave na myautomind.com.

## Cilj
Skratiti i modernizirati web, sačuvati postojeći logo, boje i vizualni identitet. U prvih 5 sekundi jasno objasniti vrijednost za klijenta. Orderly predstaviti kao konkretan vlastiti proizvod.

## Predloženi redoslijed naslovnice
1. Hero: **Automatiziramo dosadne poslove. Vi se bavite svojim poslovanjem.**
   Podnaslov: **Povezujemo vaše alate, automatiziramo ponavljajuće zadatke i izrađujemo poslovne aplikacije koje štede vrijeme.**
   CTA: **Pogledajte što radimo** / **Upoznajte Orderly**.
2. Tri kartice usluga:
   - **AI automatizacije** — upiti, e-mailovi, rezervacije, administracija.
   - **Prodaja i CRM** — leadovi, praćenje kontakata i automatizirani follow-up.
   - **Poslovne aplikacije** — alati prilagođeni stvarnom procesu.
3. Istaknuta sekcija: **Orderly — Nabava za restorane. Bez kaosa.**
   Objašnjenje: **Narudžbe robe, dobavljači, odobravanja i zaprimanje na jednom mjestu — za jednu ili više lokacija.**
   Prikazati stvarne snimke zaslona aplikacije, bez izmišljenog sučelja.
   CTA: **Upoznajte Orderly** — povezati tek nakon potvrde stvarnog produkcijskog URL-a.
4. Kratko **Kako surađujemo**: razumijemo proces → predlažemo rješenje → uvodimo i podržavamo.
5. Provjerljive reference i jednostavan kontakt.

## UX i tehnički kriteriji
- Sačuvati izvorne boje, fontove i logo nakon čitanja `src/index.css` i komponenti iz arhive.
- Mobile-first, kvalitetan desktop raspored, brza učitavanja, pristupačan kontrast.
- Bez ponavljajućih CTA sekcija i dugačkih generičkih opisa.
- Sačuvati postojeće kontakt funkcije, canonical, metadata, FAQ/schema gdje su relevantni.
- Prije implementacije provjeriti koja je verzija koda stvarno objavljena na myautomind.com.
- Sve izmjene isključivo u grani `redesign/modern-orderly-2026`; ne dirati main niti produkciju bez odobrenja.

## Izvorni kod
GitHub repozitorij sadrži `automind-pro.zip` sa src/App.jsx, src/index.css, komponentama i assetima. ZIP treba raspakirati i usporediti s produkcijskim izvorom prije izmjene.
