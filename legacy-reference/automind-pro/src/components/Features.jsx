import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Phone, FileText, BarChart3, Zap, Mail } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: MessageSquare,
      title: 'AI recepcionar i komunikacija',
      description: 'Odgovori na upite, kvalifikacija leadova, rezervacije i osnovna korisnička podrška 24/7.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Phone,
      title: 'Prodaja i follow-up',
      description: 'Automatski odgovor na lead, podsjetnici, follow-up i prijenos podataka u CRM ili tablicu.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: FileText,
      title: 'Automatizacije i integracije',
      description: 'Povezujemo e-mail, kalendar, forme, baze, CRM, dokumente i interne procese u jedan tijek.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Mail,
      title: 'Aplikacije po mjeri',
      description: 'Gradimo aplikacije prema vašem procesu: korisnici, odjeli, narudžbe, dashboardi, odobrenja, izvještaji i AI funkcije.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: BarChart3,
      title: 'Dashboardi i izvještaji',
      description: 'Pregled procesa, statusa i podataka koji vašem timu olakšavaju donošenje odluka.',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Zap,
      title: 'AI funkcije u vašem procesu',
      description: 'Uvodimo AI tamo gdje stvarno donosi vrijednost — bez generičkih rješenja i nepotrebne složenosti.',
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Što možemo napraviti za vaše poslovanje
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Od jedne automatizacije do kompletne interne aplikacije — bez nepotrebne složenosti.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group glass p-8 rounded-xl border border-slate-700/50 hover:border-slate-600 transition-all duration-300 cursor-pointer"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${feature.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={24} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>

                {/* Hover Effect */}
                <div className="mt-4 flex items-center text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-semibold">Saznaj više</span>
                  <span className="ml-2">→</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
