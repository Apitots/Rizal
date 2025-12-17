import josePortrait from '../assets/Jose_Port.png'; //Portrait of Jose Rizal; Malabo pwede rin baguhin

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-4rem)] sm:min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-0"
    >
      {/* Layered Background - Portrait and Flag */}
      <div className="absolute inset-0">
        {/* Philippine Flag Background - Subtle */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(180deg, #0038a8 0%, #0038a8 50%, #ce1126 50%, #ce1126 100%),
              radial-gradient(circle at 25% 50%, #fcd116 0%, transparent 70%)
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Rizal Portrait - Low Opacity */}
        <div
          className="absolute inset-0 opacity-10 md:opacity-20"
          style={{
            backgroundImage: `url(${josePortrait})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'sepia(20%) grayscale(30%)',
          }}
        />
        {/* Rizal Portrait - Desktop positioning */}
        <div
          className="hidden md:block absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${josePortrait})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center right',
            backgroundRepeat: 'no-repeat',
            filter: 'sepia(20%) grayscale(30%)',
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-navy-dark/90 to-navy-dark" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-28 sm:py-32">
        <div className="max-w-4xl mx-auto flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-5 text-shadow-lg leading-tight">
            Dr. José Rizal
          </h1>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gold mb-6 sm:mb-8 text-shadow">
            Life & Works
          </h2>
          <p className="text-base sm:text-lg md:text-2xl text-white/90 max-w-2xl leading-relaxed mb-8">
            Physician, novelist, poet, artist, and nationalist hero whose writings
            inspired the Philippine Revolution and shaped the nation's identity.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <button
              onClick={() => {
                const element = document.getElementById('literary-works');
                if (element) {
                  const headerHeight = 80;
                  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                  const offsetPosition = elementPosition - headerHeight;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gold text-navy-dark font-semibold rounded-lg hover:bg-gold/90 transition-all duration-300 hover:shadow-glow sm:transform sm:hover:scale-105 text-sm sm:text-base"
              aria-label="Explore Literary Works"
            >
              Explore His Works
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('global-journey');
                if (element) {
                  const headerHeight = 80;
                  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                  const offsetPosition = elementPosition - headerHeight;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-gold text-gold font-semibold rounded-lg hover:bg-gold/10 transition-all duration-300 text-sm sm:text-base"
              aria-label="Follow His Journey"
            >
              Follow His Journey
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gold"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
