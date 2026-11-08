import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Marko Horvat',
      company: 'TechSolutions d.o.o.',
      role: 'Direktor',
      quote: 'Treba nam sustav koji preuzima ponavljajuće upite, a timu ostavlja vrijeme za posao koji zahtijeva čovjeka.',
      rating: 5,
      image: '🧑‍💼',
    },
    {
      name: 'Ana Kovačić',
      company: 'BuildPro grupa',
      role: 'Vlasnica',
      quote: 'Želimo povezati leadove, ponude i follow-up u jedan proces kako bismo znali što se događa sa svakim upitom.',
      rating: 5,
      image: '👩‍💼',
    },
    {
      name: 'Ivan Novak',
      company: 'CallCenter+',
      role: 'Operativni direktor',
      quote: 'Gotovi alati ne prate naš način rada. Trebamo aplikaciju koja odgovara našim korisnicima, odjelima i odobrenjima.',
      rating: 5,
      image: '👨‍💼',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-pink-500/5 to-transparent">
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
            Primjeri poslovnih potreba
          </h2>
          <p className="text-xl text-slate-400">
            Od komunikacije s klijentima do internih procesa i aplikacija po mjeri.
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="glass p-8 md:p-12 rounded-xl border border-slate-700/50"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed italic">
                "{testimonials[currentIndex].quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="text-4xl">{testimonials[currentIndex].image}</div>
                <div>
                  <h4 className="text-lg font-bold text-white">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-slate-400">
                    {testimonials[currentIndex].role} • {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'bg-indigo-500 w-8' : 'bg-slate-600'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <div className="flex gap-4">
              <button
                onClick={prevSlide}
                className="p-2 rounded-lg border border-slate-600 text-slate-400 hover:text-white hover:border-slate-500 transition-all duration-300"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-lg border border-slate-600 text-slate-400 hover:text-white hover:border-slate-500 transition-all duration-300"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
