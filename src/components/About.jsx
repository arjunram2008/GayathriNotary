import { useInView } from 'react-intersection-observer';

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section id="about" className="py-20 bg-bg-beige">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary-green font-playfair mb-16">
          About Gayathri
        </h2>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-lg bg-white">
              <img
                src="src/gavel.jpg"
                alt="Gayathri Ramaswamy"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-text-charcoal leading-relaxed">
              Gayathri Ramaswamy is a trusted notary professional providing reliable, accurate, and efficient notarization services. With a focus on convenience and professionalism, she helps clients with legal, financial, and immigration documents.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-start space-x-4">
                <span className="text-2xl text-accent-gold">✓</span>
                <div>
                  <h3 className="font-semibold text-text-charcoal">Licensed & Certified</h3>
                  <p className="text-sm text-gray-600">Professional notary licensed in California</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-2xl text-accent-gold">✓</span>
                <div>
                  <h3 className="font-semibold text-text-charcoal">Expert in Immigration Documents</h3>
                  <p className="text-sm text-gray-600">OCI, Passport, and Indian visa documentation</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-2xl text-accent-gold">✓</span>
                <div>
                  <h3 className="font-semibold text-text-charcoal">Client Focused</h3>
                  <p className="text-sm text-gray-600">Flexible scheduling and convenient service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
