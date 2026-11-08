import React from 'react';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

export default function Comparison() {
  const items = [
    'Ponavljajući ručni zadaci',
    'Nepovezani alati i podaci',
    'Upiti koji čekaju odgovor',
    'Procesi koji ovise o pamćenju',
    'Slaba vidljivost statusa posla',
  ];

  const improvements = [
    'Automatizirani koraci koji štede vrijeme',
    'Povezani alati i jasniji tijek rada',
    'Brži odgovor klijentima',
    'Podsjetnici i follow-up bez zaborava',
    'Pregled procesa, zadataka i podataka',
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Od ručnog rada do povezanog procesa
          </h2>
          <p className="text-xl text-slate-400">
            Automatizacija uklanja uska grla, dok vaš tim zadržava kontrolu.
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-xl border border-red-500/30 bg-red-500/5"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Bez povezanog sustava</h3>
            <ul className="space-y-4">
              {items.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <X size={20} className="text-red-400 mt-1 flex-shrink-0" />
                  <span className="text-slate-400">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-xl border border-green-500/30 bg-green-500/5"
          >
            <h3 className="text-2xl font-bold text-white mb-6">S rješenjem po mjeri</h3>
            <ul className="space-y-4">
              {improvements.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <Check size={20} className="text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="glass p-6 rounded-xl border border-slate-700/50 text-center">
            <div className="text-4xl font-bold text-indigo-400 mb-2">Manje</div>
            <p className="text-slate-400">Ručnog rada i ponavljanja</p>
          </div>
          <div className="glass p-6 rounded-xl border border-slate-700/50 text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">Brže</div>
            <p className="text-slate-400">Odgovaranje i praćenje upita</p>
          </div>
          <div className="glass p-6 rounded-xl border border-slate-700/50 text-center">
            <div className="text-4xl font-bold text-indigo-400 mb-2">Jasnije</div>
            <p className="text-slate-400">Stanje procesa i odgovornosti</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
