import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Link2, Zap, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Razumijemo proces',
      description: 'Upoznajemo kako danas radite, gdje gubite vrijeme i što se stvarno isplati automatizirati.',
      icon: Settings,
    },
    {
      number: '02',
      title: 'Predložimo rješenje',
      description: 'Predlažemo automatizaciju, integraciju ili aplikaciju koja odgovara vašem poslovanju.',
      icon: Link2,
    },
    {
      number: '03',
      title: 'Izradimo i povežemo',
      description: 'Izrađujemo rješenje, povezujemo ga s vašim alatima te testiramo i optimiziramo rad.',
      icon: Zap,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent">
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
            Kako radimo
          </h2>
          <p className="text-xl text-slate-400">
            Prvo razumijemo kako radite. Tek onda predlažemo rješenje koje ima poslovnog smisla.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Step Card */}
                <div className="glass p-8 rounded-xl border border-slate-700/50 relative z-10">
                  {/* Number */}
                  <div className="text-6xl font-bold text-slate-700/50 mb-4">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 p-2.5 mb-4">
                    <Icon size={24} className="text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow */}
                {idx < steps.length - 1 && (
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="hidden md:flex absolute -right-6 top-24 text-indigo-400/50"
                  >
                    <ArrowRight size={24} />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300">
            Zatraži besplatnu procjenu procesa
          </button>
        </motion.div>
      </div>
    </section>
  );
}
