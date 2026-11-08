import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to a backend
    alert('Hvala na vašem upitu! Kontaktirat ćemo vas uskoro.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent">
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
            Besplatna procjena procesa
          </h2>
          <p className="text-xl text-slate-400">
            Pošaljite nam kako danas radite — predložit ćemo što se isplati automatizirati.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Ime i prezime *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300"
                placeholder="Vaše ime"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                E-mail *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300"
                placeholder="vas@email.com"
              />
            </div>

            {/* Company */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Tvrtka *
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300"
                placeholder="Naziv tvrtke"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Poruka
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300 resize-none"
                placeholder="Opišite kako danas radite i gdje gubite najviše vremena..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-4 bg-gradient-to-r from-indigo-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300"
            >
              Pošalji upit
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Info Cards */}
            <div className="glass p-6 rounded-xl border border-slate-700/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 p-3 flex-shrink-0">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                  <a href="mailto:info@automind.pro" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                    auto.mind.ai2025@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl border border-slate-700/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 p-3 flex-shrink-0">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Telefon</h3>
                  <a href="tel:+385995085933" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                    099 508 5933
                  </a>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl border border-slate-700/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 p-3 flex-shrink-0">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Lokacija</h3>
                  <p className="text-slate-400">
                    Zagreb, Hrvatska
                  </p>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="glass p-6 rounded-xl border border-green-500/30 bg-green-500/5">
              <p className="text-slate-300">
                <span className="text-green-400 font-semibold">✓ Predlažemo rješenje prema vašem procesu</span>
                <br />
                <span className="text-sm text-slate-400">Od automatizacije jednog koraka do aplikacije po mjeri</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
