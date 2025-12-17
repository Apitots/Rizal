import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import worldMap from '../assets/world_map.png'; //Malabo rin same sa portrait ni Rizal

const GlobalJourney = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [timelinePosition, setTimelinePosition] = useState(0);

  const locations = [
    {
      id: 'manila',
      name: 'Manila',
      year: '1861',
      description: 'Birthplace - Born on June 19, 1861 in Calamba, Laguna',
      x: 75,
      y: 40,
    },
    {
      id: 'madrid',
      name: 'Madrid',
      year: '1882-1885',
      description: 'Studied medicine and philosophy at Universidad Central de Madrid',
      x: 48,
      y: 25,
    },
    {
      id: 'berlin',
      name: 'Berlin',
      year: '1886',
      description: 'Published Noli Me Tángere, studied ophthalmology',
      x: 52,
      y: 20,
    },
    {
      id: 'hongkong',
      name: 'Hong Kong',
      year: '1891-1892',
      description: 'Practiced medicine, wrote El Filibusterismo',
      x: 80,
      y: 35,
    },
    {
      id: 'dapitan',
      name: 'Dapitan',
      year: '1892-1896',
      description: 'Exile - Final years, teaching, farming, and community work',
      x: 82,
      y: 42,
    },
  ];

  const timelineEvents = [
    { id: 'manila', label: 'Manila', year: '1861', position: 0 },
    { id: 'madrid', label: 'Madrid', year: '1882', position: 30 },
    { id: 'berlin', label: 'Berlin', year: '1886', position: 50 },
    { id: 'hongkong', label: 'Hong Kong', year: '1891', position: 70 },
    { id: 'dapitan', label: 'Dapitan', year: '1892', position: 85 },
  ];

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };

  const handleTimelineClick = (position) => {
    const event = timelineEvents.find((e) => e.position === position);
    const isLast = event && event.id === 'dapitan';
    setTimelinePosition(isLast ? 100 : position);
    if (event) {
      const location = locations.find((l) => l.id === event.id);
      if (location) setSelectedLocation(location);
    }
  };

  // Simple world map SVG with route lines
  const routePath = `M ${locations[0].x} ${locations[0].y} 
                     L ${locations[1].x} ${locations[1].y}
                     L ${locations[2].x} ${locations[2].y}
                     L ${locations[3].x} ${locations[3].y}
                     L ${locations[4].x} ${locations[4].y}`;

  return (
    <section
      id="global-journey"
      className="py-20 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-charcoal to-navy-dark scroll-mt-20"
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
            Global Journey & Exile
          </h2>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Follow Rizal's travels across continents, from his birth in the
            Philippines to his studies in Europe and eventual exile in Dapitan.
          </p>
        </motion.div>

        {/* Interactive Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-12 sm:mb-16 bg-navy-dark/50 rounded-2xl p-5 sm:p-8 border border-gold/20"
        >
          <div className="relative h-64 sm:h-80 md:h-96">
            <svg
              viewBox="0 0 100 60"
              className="w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* World map background image */}
              <image
                href={worldMap}
                width="100"
                height="60"
                preserveAspectRatio="xMidYMid slice"
                opacity="0.4"
              />
              {/* Dark overlay for better contrast */}
              <rect width="100" height="60" fill="#0a1628" rx="2" opacity="0.6" />

            </svg>

            {/* Tooltip */}
            {selectedLocation && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 bg-charcoal/95 backdrop-blur-sm border border-gold/40 rounded-lg p-4 shadow-xl"
              >
                <h3 className="font-serif text-xl font-bold text-gold mb-1">
                  {selectedLocation.name}
                </h3>
                <p className="text-gold-muted text-sm mb-2">
                  {selectedLocation.year}
                </p>
                <p className="text-white/80 text-sm">
                  {selectedLocation.description}
                </p>
                <button
                  onClick={() => setSelectedLocation(null)}
                  className="absolute top-2 right-2 text-white/60 hover:text-white"
                  aria-label="Close tooltip"
                >
                  ×
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Interactive Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="bg-navy-dark/50 rounded-xl p-5 sm:p-8 border border-gold/20">
            <div className="flex items-center justify-between gap-2 mb-6">
              <div className="flex items-center space-x-2 flex-shrink-0">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-gold flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                <span className="text-white font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap">MANILA</span>
              </div>
              <div className="flex items-center space-x-2 flex-shrink-0 ml-auto">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-gold flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                <span className="text-white font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap">DAPITAN</span>
              </div>
            </div>

            {/* Timeline track */}
            <div className="relative h-2 bg-charcoal rounded-full mb-12 sm:mb-8 overflow-visible">
              <div
                className="absolute h-full bg-gradient-to-r from-gold to-gold/60 rounded-full transition-all duration-300"
                style={{ 
                  width: `${timelinePosition}%`
                }}
              />
              {timelineEvents.map((event, index) => {
                const isFirst = index === 0;
                const isLast = index === timelineEvents.length - 1;
              
                // Marker position 
                let markerPosition;
                let transformStyle;
                if (isFirst) {
                  markerPosition = 0;
                  transformStyle = 'translateY(-50%)';
                } else if (isLast) {
                  markerPosition = 100;
                  transformStyle = 'translateY(-50%) translateX(-100%)';
                } else {
                  markerPosition = event.position;
                  transformStyle = 'translateY(-50%) translateX(-50%)';
                }
                
                return (
                  <div
                    key={event.id}
                    className="absolute top-1/2"
                    style={{ left: `${markerPosition}%`, transform: transformStyle }}
                  >
                    <button
                      onClick={() => handleTimelineClick(event.position)}
                      className="w-6 h-6 sm:w-5 sm:h-5 bg-gold rounded-full hover:scale-125 active:scale-110 transition-transform cursor-pointer border-2 border-navy-dark touch-manipulation relative z-10"
                      aria-label={`Navigate to ${event.label}, ${event.year}`}
                    >
                    </button>
                    {/* Hide labels for first and last items since they have header text */}
                    {!isFirst && !isLast && (
                      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap z-20 pointer-events-none hidden sm:block">
                        <div className="bg-charcoal/90 backdrop-blur-sm px-2 py-1 rounded border border-gold/30">
                          <span className="text-xs text-gold font-semibold block">
                            {event.label}
                          </span>
                          <span className="text-xs text-white/60 block">{event.year}</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Timeline navigation buttons */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {timelineEvents.map((event) => (
                <button
                  key={event.id}
                  onClick={() => handleTimelineClick(event.position)}
                  className="px-3 py-2 sm:px-4 bg-charcoal border border-gold/30 rounded-lg text-gold hover:bg-gold/10 hover:border-gold active:bg-gold/20 transition-all text-xs sm:text-sm font-medium touch-manipulation min-h-[44px]"
                  aria-label={`Go to ${event.label}`}
                >
                  {event.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalJourney;
