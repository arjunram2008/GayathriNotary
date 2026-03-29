import { useInView } from 'react-intersection-observer';

export default function Pricing() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const handleBookClick = () => {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary-green font-playfair mb-16">
          Pricing
        </h2>

        <div
          ref={ref}
          className={`flex justify-center transition-all duration-700 ${
            inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="pricing-card rounded-3xl p-8 md:p-12 max-w-md w-full border-t-4 border-accent-gold relative">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="badge">Most Requested</span>
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold text-primary-green font-playfair text-center mt-8 mb-2">
              Standard Notarization
            </h3>

            {/* Price */}
            <div className="text-center my-6">
              <span className="text-6xl md:text-7xl font-bold text-cta-terracotta font-playfair">$5</span>
              <span className="text-text-charcoal text-lg ml-2">/ per signature</span>
            </div>

            {/* Description */}
            <p className="text-center text-text-charcoal mb-8 text-base leading-relaxed">
              Affordable pricing for all standard notarizations. Discounts available for 20+ signatures — just ask.
            </p>

            {/* Features */}
            <ul className="space-y-4 mb-10">
              <li className="flex items-start space-x-3">
                <span className="text-accent-gold font-bold text-xl mt-0.5">✔</span>
                <span className="text-text-charcoal">California notary services for everyday document needs</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-accent-gold font-bold text-xl mt-0.5">✔</span>
                <span className="text-text-charcoal">Support for OCI and passport-related Indian documentation</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-accent-gold font-bold text-xl mt-0.5">✔</span>
                <span className="text-text-charcoal">Notarization for estate and authorization papers</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-accent-gold font-bold text-xl mt-0.5">✔</span>
                <span className="text-text-charcoal">Coverage for important business, legal, and money-related forms</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-accent-gold font-bold text-xl mt-0.5">✔</span>
                <span className="text-text-charcoal">Help with apostille processing, with state charges billed separately</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-accent-gold font-bold text-xl mt-0.5">✔</span>
                <span className="text-text-charcoal">Services for signatures, declarations, and oath-based documents</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-accent-gold font-bold text-xl mt-0.5">✔</span>
                <span className="text-text-charcoal">Appointments available at times that work for you</span>
              </li>
            </ul>

            {/* Call to Action Button */}
            <button
              onClick={handleBookClick}
              className="w-full bg-cta-terracotta text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all hover:shadow-lg hover:scale-105"
            >
              Book Notary Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
