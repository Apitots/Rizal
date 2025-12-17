import { motion } from 'framer-motion';
import {
  BeakerIcon,
  PaintBrushIcon,
  BookOpenIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';

const Polymath = () => {
  const talents = [
    {
      id: 'doctor',
      icon: AcademicCapIcon,
      title: 'Physician',
      description: 'Ophthalmologist and medical practitioner who treated patients in Dapitan and Hong Kong',
    },
    {
      id: 'writer',
      icon: BookOpenIcon,
      title: 'Writer',
      description: 'Novelist, poet, and essayist whose works awakened Filipino consciousness',
    },
    {
      id: 'artist',
      icon: PaintBrushIcon,
      title: 'Artist',
      description: 'Skilled sculptor, painter, and sketcher with works displayed in museums',
    },
    {
      id: 'scientist',
      icon: BeakerIcon,
      title: 'Scientist',
      description: 'Naturalist, botanist, and inventor who contributed to various scientific fields',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section
      id="polymath"
      className="py-20 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-navy-dark to-charcoal scroll-mt-20"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            The Polymath
          </h2>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            A true Renaissance man, Rizal excelled in multiple fields, leaving
            an indelible mark on medicine, literature, arts, and sciences.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto"
        >
          {talents.map((talent) => {
            const Icon = talent.icon;
            return (
              <motion.div
                key={talent.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative"
              >
                <div className="relative bg-gradient-to-br from-charcoal to-navy-dark rounded-2xl p-6 sm:p-8 border border-gold/20 hover:border-gold/60 transition-all duration-500 hover:shadow-glow-lg h-full flex flex-col items-center text-center">
                  {/* Circular icon background */}
                  <div className="relative mb-5 sm:mb-6">
                    <div className="absolute inset-0 bg-gold/20 rounded-full blur-xl group-hover:bg-gold/30 transition-colors" />
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center border-2 border-gold/30 group-hover:border-gold transition-all duration-300">
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-gold group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-gold mb-3">
                    {talent.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors">
                    {talent.description}
                  </p>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gold/20 group-hover:border-gold/40 transition-colors rounded-tr-lg" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-gold/20 group-hover:border-gold/40 transition-colors rounded-bl-lg" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional decorative element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-gold-muted italic text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            "Genius has no country. It blossoms everywhere. Genius is like light,
            air, the patrimony of everybody, cosmopolitan like space, like life,
            like God."
          </p>
          <p className="text-white/60 text-sm mt-4">— Dr. José Rizal</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Polymath;
