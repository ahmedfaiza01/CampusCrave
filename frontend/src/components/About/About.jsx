import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaXTwitter, FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa6';
import { features, stats, teamMembers } from '../../assets/dummydata';

const About = () => {
  const [hoveredStat, setHoveredStat] = useState(null);

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-[#1a120b] via-[#3c2a21] to-[#1a120b] text-amber-50
      overflow-hidden relative"
    >
      <div className="absolute inset-0 opacity-10 mix-blend-soft-light" />

      {/* HEADER SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-8 px-4 text-center relative"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 font-serif bg-clip-text text-transparent
            bg-gradient-to-r from-amber-500 to-yellow-600"
          >
            Campus Crave
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-amber-100/80 text-base sm:text-lg md:text-xl font-medium mt-1"
          >
            Turning every meal into a memorable experience — crafted with care, flavor, and freshness
          </motion.p>
        </div>
      </motion.section>

      {/* FEATURES SECTION */}
      <section className="py-6 px-4 md:px-8 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -100px 0px' }}
                transition={{ delay: i * 0.2 }}
                className="relative group"
              >
                <div
                  className="absolute -inset-1 bg-gradient-to-br from-amber-600/30 to-amber-500/30 rounded
                  blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-500"
                />
                <div
                  className="relative bg-[#3c2a21]/90 backdrop-blur-lg rounded-3xl overflow-hidden
                  border border-amber-600/30 hover:border-amber-500 transition-all duration-300 h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={f.img}
                      alt={f.title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-[#1a120b] via-transparent
                      to-transparent"
                    />
                  </div>

                  <div className="p-6">
                    <motion.div
                      className="text-amber-500 mb-3 inline-block"
                      whileHover={{ rotate: 15 }}
                    >
                      <Icon className="w-10 h-10 text-amber-500" />
                    </motion.div>

                    <h3 className="text-xl font-bold mb-1 text-amber-100">{f.title}</h3>
                    <p className="text-amber-100/80 text-sm">{f.text}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-10 px-4 md:px-8 bg-gradient-to-br from-[#1a120b] to-[#3c2a21]/90">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, type: 'spring' }}
                className="relative group h-40"
                onHoverStart={() => setHoveredStat(i)}
                onHoverEnd={() => setHoveredStat(null)}
                animate={{
                  scale: hoveredStat === i ? 1.05 : 1,
                  zIndex: hoveredStat === i ? 10 : 1,
                }}
              >
                <div
                  className="relative h-full bg-[#3c2a21]/40 backdrop-blur-lg
                  rounded-xl border-2 border-amber-600/30 p-6 overflow-hidden transition-all duration-300"
                >
                  <div className="relative z-10 h-full flex flex-col items-center justify-center">
                    <motion.div
                      className="mb-3 p-2 rounded-full bg-amber-900/30 border border-amber-700/30"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      <Icon className="w-7 h-7 text-amber-500/90" />
                    </motion.div>

                    <div
                      className="text-3xl font-bold mb-1 bg-clip-text bg-gradient-to-r
                      from-amber-200 to-amber-400 text-transparent"
                    >
                      {s.number}
                    </div>

                    <div className="text-xs uppercase tracking-widest font-medium text-amber-100/80">
                      {s.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-12 px-4 md:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 text-amber-100"
          >
            Meet Our <span className="text-amber-500">Culinary Artists</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
            {teamMembers.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -100px 0px' }}
                transition={{ delay: m.delay }}
                className="relative group"
              >
                <div className="relative h-full bg-[#3c2a21]/90 backdrop-blur-lg rounded-3xl overflow-hidden border-2 border-amber-600/30 hover:border-amber-500 transition-all duration-500 shadow-2xl hover:shadow-2xl hover:shadow-amber-500/20">
                  <div className="relative h-56 sm:h-64 md:h-80 overflow-hidden">
                    <motion.img
                      src={m.img}
                      alt={m.name}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <div className="p-6 text-center">
                    <div className="mb-3">
                      <h3 className="text-2xl font-bold mb-1 text-amber-100">{m.name}</h3>
                      <p className="text-amber-500 text-base font-medium font-cursive">
                        {m.role}
                      </p>
                    </div>
                    <p className="text-amber-100/80 text-base font-cursive mb-4">
                      {m.bio}
                    </p>

                    <div className="flex justify-center gap-3">
                      {Object.entries(m.social).map(([p, url]) => (
                        <a
                          key={p}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-500 hover:text-amber-400 transition-colors duration-300 hover:scale-110"
                        >
                          {
                            {
                              twitter: <FaXTwitter className="w-5 h-5" />,
                              instagram: <FaInstagram className="w-5 h-5" />,
                              facebook: <FaFacebookF className="w-5 h-5" />,
                              linkedin: <FaLinkedinIn className="w-5 h-5" />,
                            }[p]
                          }
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
