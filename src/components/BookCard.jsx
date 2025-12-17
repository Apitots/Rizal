const BookCard = ({ title, subtitle, description, className = '' }) => {
  return (
    <div
      className={`group relative bg-gradient-to-br from-charcoal to-navy-dark rounded-xl p-4 sm:p-6 md:p-8 cursor-pointer transition-all duration-500 hover:shadow-glow-lg hover:scale-105 border border-gold/20 hover:border-gold/60 ${className}`}
    >
      {/* Vintage Book Cover Style */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent rounded-xl" />
      </div>

      <div className="relative z-10">
        <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-gold mb-2">
          {title}
        </h3>
        {subtitle && (
          <p className="text-gold-muted text-sm mb-4 italic">{subtitle}</p>
        )}
        {description && (
          <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors">
            {description}
          </p>
        )}
      </div>

      {/* Decorative Corner */}
      <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-gold/30 group-hover:border-gold transition-colors" />
    </div>
  );
};

export default BookCard;
