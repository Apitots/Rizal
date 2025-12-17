import { motion } from 'framer-motion';
import BookCard from './BookCard';
import {
  BookOpenIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';

const LiteraryWorks = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="literary-works"
      className="py-20 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-navy-dark to-charcoal scroll-mt-20"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4">
            Literary Works
          </h2>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto">
            Rizal's novels and writings awakened Filipino consciousness and
            exposed the injustices of Spanish colonial rule.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12"
        >
          <motion.div variants={itemVariants}>
            <BookCard
              title="NOLI ME TÁNGERE"
              subtitle="Touch Me Not"
              description="A social novel exposing the corruption and abuses of Spanish colonial rule in the Philippines, published in 1887. It follows the story of Crisóstomo Ibarra and his quest for reform."
              className="h-full"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <BookCard
              title="EL FILIBUSTERISMO"
              subtitle="The Reign of Greed"
              description="The sequel to Noli Me Tángere, published in 1891. A darker, more revolutionary novel depicting the failure of reform and the necessity of revolution for national liberation."
              className="h-full"
            />
          </motion.div>
        </motion.div>

        {/* Additional Literary Works */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <motion.div variants={itemVariants}>
            <div className="group bg-gradient-to-br from-charcoal to-navy-dark rounded-xl p-4 sm:p-6 border border-gold/20 hover:border-gold/60 transition-all duration-500 hover:shadow-glow cursor-pointer">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0">
                  <DocumentTextIcon className="w-10 h-10 sm:w-12 sm:h-12 text-gold group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-gold mb-2">
                    Mi Último Adiós
                  </h3>
                  <p className="text-white/70 text-sm group-hover:text-white/90 transition-colors">
                    Rizal's final poem, written on the eve of his execution in
                    1896. A masterpiece of patriotic sentiment and farewell.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="group bg-gradient-to-br from-charcoal to-navy-dark rounded-xl p-4 sm:p-6 border border-gold/20 hover:border-gold/60 transition-all duration-500 hover:shadow-glow cursor-pointer">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0">
                  <BookOpenIcon className="w-10 h-10 sm:w-12 sm:h-12 text-gold group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-gold mb-2">
                    The Indolence of the Filipinos
                  </h3>
                  <p className="text-white/70 text-sm group-hover:text-white/90 transition-colors">
                    An essay debunking the myth of Filipino laziness and
                    analyzing the true causes of the nation's problems.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LiteraryWorks;
