import React from 'react';
import { motion } from 'framer-motion';
import { Code2, X, Heart, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Proizvod',
      links: ['Mogućnosti', 'Cijene', 'Sigurnost', 'Status'],
    },
    {
      title: 'Tvrtka',
      links: ['O nama', 'Blog', 'Karijere', 'Kontakt'],
    },
    {
      title: 'Resursi',
      links: ['Dokumentacija', 'API', 'Primjeri', 'Zajednica'],
    },
    {
      title: 'Pravni',
      links: ['Privatnost', 'Uvjeti korištenja', 'Kolačići', 'GDPR'],
    },
  ];

  const socialLinks = [
    { icon: Code2, href: '#', label: 'GitHub' },
    { icon: X, href: '#', label: 'X (Twitter)' },
    { icon: Heart, href: '#', label: 'Community' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <footer className="border-t border-slate-700/50 bg-slate-950/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-white font-bold text-lg">AutoMind AI</span>
            </div>
            <p className="text-slate-400 text-sm mb-6">
              Automatizacije, AI i aplikacije po mjeri za stvarne poslovne procese.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={idx}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-indigo-600 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300"
                    title={social.label}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Links */}
          {footerLinks.map((column, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700/50 mb-8" />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between"
        >
          <p className="text-slate-400 text-sm">
            © {currentYear} AutoMind AI. Sva prava zadržana.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
              Politika privatnosti
            </a>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
              Uvjeti korištenja
            </a>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
              Kolačići
            </a>
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-slate-700/50"
        >
          <div className="max-w-md">
            <h3 className="text-white font-semibold mb-2">Primaj novosti</h3>
            <p className="text-slate-400 text-sm mb-4">
              Budi u toku s najnovijim ažuriranjima i ponudama.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="vas@email.com"
                className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 text-sm"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-pink-600 text-white rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300">
                Prijavi se
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
