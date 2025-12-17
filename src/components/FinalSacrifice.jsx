import { motion } from 'framer-motion';
import rizalMonument from '../assets/rizal_monument.png';

const FinalSacrifice = () => {
  // SVG Laurel Wreath
  const LaurelWreath = ({ className = '' }) => (
    <svg
      className={className}
      viewBox="0 0 200 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 50 Q30 30, 50 30 Q70 30, 80 40 Q90 30, 110 30 Q130 30, 140 40 Q150 30, 170 30 Q180 30, 180 50 Q180 70, 170 70 Q150 70, 140 60 Q130 70, 110 70 Q90 70, 80 60 Q70 70, 50 70 Q30 70, 20 50 Z"
        stroke="#d4af37"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
      />
      <circle cx="60" cy="50" r="3" fill="#d4af37" opacity="0.8" />
      <circle cx="140" cy="50" r="3" fill="#d4af37" opacity="0.8" />
      <path
        d="M40 45 Q50 35, 60 45 M140 45 Q150 35, 160 45"
        stroke="#d4af37"
        strokeWidth="1.5"
        opacity="0.5"
      />
    </svg>
  );

  return (
    <section
      id="final-sacrifice"
      className="relative py-20 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-charcoal via-navy-dark to-charcoal scroll-mt-20"
    >
      {/* Background - Monument image with dramatic overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${rizalMonument})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto">
        {/* Laurel Wreaths - Decorative */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex justify-center mb-10 sm:mb-12"
        >
          <LaurelWreath className="w-48 h-24 sm:w-64 sm:h-32 text-gold" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-10 sm:mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 sm:mb-6 text-shadow-lg">
            The Final Sacrifice
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8" />
          <p className="text-lg md:text-2xl text-white/90 leading-relaxed mb-6 sm:mb-8">
            December 30, 1896
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto mb-12 sm:mb-16"
        >
          <div className="bg-charcoal/60 backdrop-blur-sm border border-gold/20 rounded-xl p-6 sm:p-8">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-gold mb-3 sm:mb-4">
              Execution
            </h3>
            <p className="text-white/80 leading-relaxed text-sm sm:text-base">
              On the morning of December 30, 1896, Dr. José Rizal was executed
              by firing squad at Bagumbayan (now Rizal Park) in Manila. His
              death marked the culmination of his lifelong struggle for Filipino
              rights and independence.
            </p>
          </div>

          <div className="bg-charcoal/60 backdrop-blur-sm border border-gold/20 rounded-xl p-6 sm:p-8">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-gold mb-3 sm:mb-4">
              Legacy
            </h3>
            <p className="text-white/80 leading-relaxed text-sm sm:text-base">
              Rizal's execution ignited the Philippine Revolution. His writings
              and sacrifice inspired Filipinos to fight for freedom, and his
              ideals of education, reform, and national identity continue to
              shape the nation today.
            </p>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="bg-navy-dark/80 backdrop-blur-sm border border-gold/30 rounded-xl p-6 sm:p-8 md:p-12">
            <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl text-gold italic leading-relaxed mb-6">
              "I die without seeing the dawn brighten over my native land. You
              who have it to see, welcome it and forget not those who have
              fallen during the night!"
            </blockquote>
            <p className="text-white/70 text-base sm:text-lg">— Dr. José Rizal</p>
            <p className="text-white/50 text-xs sm:text-sm mt-2">From his final poem, Mi Último Adiós</p>
          </div>
        </motion.div>

        {/* Bottom Laurel Wreath */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 1 }}
          className="flex justify-center mt-10 sm:mt-12"
        >
          <LaurelWreath className="w-48 h-24 sm:w-64 sm:h-32 text-gold rotate-180" />
        </motion.div>
      </div>
    </section>
  );
};

export default FinalSacrifice;
