import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Od čega krećemo?',
      answer: 'Krećemo od vašeg stvarnog procesa. Zajedno prepoznajemo gdje odlazi vrijeme i što se isplati automatizirati ili povezati.',
    },
    {
      question: 'Radite li samo AI recepcionare?',
      answer: 'Ne. AI recepcionar je samo jedno moguće rješenje. Radimo i prodajne follow-upove, integracije, interne procese, dashboarde i aplikacije po mjeri.',
    },
    {
      question: 'Možete li povezati postojeće alate?',
      answer: 'Da. Povezujemo e-mail, kalendare, forme, baze, CRM, dokumente i druge alate u jedan smisleni poslovni tijek.',
    },
    {
      question: 'Trebam li gotov alat ili aplikaciju po mjeri?',
      answer: 'Ovisi o vašem procesu. Kada gotovi alati nisu dovoljni, izrađujemo aplikaciju prilagođenu korisnicima, odjelima, narudžbama, odobrenjima i izvještajima koje trebate.',
    },
    {
      question: 'Koliko je proces složen?',
      answer: 'Možemo krenuti od jedne automatizacije ili izgraditi kompletno interno rješenje. Važno je da svaka promjena ima poslovnog smisla.',
    },
    {
      question: 'Kako mogu saznati što mi se isplati?',
      answer: 'Pošaljite nam kako danas radite. Predložit ćemo što se isplati automatizirati i treba li vam aplikacija po mjeri.',
    },
  ];

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Često postavljana pitanja
          </h2>
          <p className="text-xl text-slate-400">
            Odgovori o automatizacijama, integracijama i aplikacijama po mjeri.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="glass rounded-xl border border-slate-700/50 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-800/30 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-white text-left">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown size={20} className="text-indigo-400" />
                </motion.div>
              </button>

              {/* Answer */}
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === idx ? 'auto' : 0,
                  opacity: openIndex === idx ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4 text-slate-400 leading-relaxed border-t border-slate-700/50">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-slate-400 mb-4">Imate proces koji vam troši vrijeme ili novac?</p>
          <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300">
            Zatraži besplatnu procjenu procesa
          </button>
        </motion.div>
      </div>
    </section>
  );
}
