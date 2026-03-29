export default function Hero() {
  const handleBookClick = () => {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen pt-16 flex items-center justify-center bg-gradient-to-br from-bg-beige via-bg-beige to-primary-green relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent-gold opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-green opacity-5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slideUp">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-green font-playfair mb-6">
            Reliable Notary Services in San Ramon
          </h1>
          
          <p className="text-xl md:text-2xl text-text-charcoal mb-8 leading-relaxed">
            Fast, affordable, and trusted notarization services.
          </p>

          <button
            onClick={handleBookClick}
            className="inline-block bg-cta-terracotta text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all hover:shadow-lg hover:scale-105"
          >
            Book Appointment
          </button>

          {/* Additional info */}
          <div className="mt-12 text-sm text-text-charcoal">
            <p>✓ Licensed & Insured • ✓ Fast Service • ✓ Competitive Pricing</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-primary-green" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
