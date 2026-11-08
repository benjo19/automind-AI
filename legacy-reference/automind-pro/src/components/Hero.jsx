import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 mb-8 px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full"
          >
            <Zap size={16} className="text-indigo-400" />
            <span className="text-indigo-300 text-sm font-medium">AUTOMATIZACIJE • AI • APLIKACIJE PO MJERI</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-white">Vaš posao ne treba još jedan alat.</span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              Treba sustav koji radi za vas.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Automatiziramo upite, rezervacije, prodaju, narudžbe i administraciju. Kada gotovi alati nisu dovoljni, izrađujemo aplikacije prema vašem procesu.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 flex items-center gap-2 group">
              Zatraži besplatnu procjenu procesa
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-slate-600 text-white rounded-lg font-semibold hover:bg-slate-800/50 transition-all duration-300">
              Kako radimo
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 md:gap-8 mt-16 pt-16 border-t border-slate-700/50"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-indigo-400 mb-2">24/7</div>
              <p className="text-slate-400 text-sm">Dostupnost komunikacije</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">1</div>
              <p className="text-slate-400 text-sm">Povezan poslovni tijek</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-indigo-400 mb-2">Po mjeri</div>
              <p className="text-slate-400 text-sm">Rješenje prema vašem procesu</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-40 right-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl opacity-50 -z-10"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
          className="absolute bottom-40 left-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl opacity-50 -z-10"
        />
      </div>
    </section>
  );
}
