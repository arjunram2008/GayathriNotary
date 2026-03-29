import { useInView } from 'react-intersection-observer';

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const whatsappLink = 'https://wa.me/19258587528';
  const emailLink = 'mailto:gayram2004@gmail.com?subject=Notary%20Appointment%20Inquiry';

  return (
    <section id="contact" className="py-20 bg-bg-beige">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary-green font-playfair mb-16">
          Contact & Appointment Info
        </h2>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-primary-green font-playfair mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-cta-terracotta text-2xl mt-1">📱</div>
                  <div>
                    <p className="text-sm text-gray-600 font-semibold">Phone</p>
                    <a href="tel:+19258587528" className="text-lg text-primary-green font-semibold hover:text-cta-terracotta transition-colors">
                      925-858-7528
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-cta-terracotta text-2xl mt-1">✉️</div>
                  <div>
                    <p className="text-sm text-gray-600 font-semibold">Email</p>
                    <a href={emailLink} className="text-lg text-primary-green font-semibold hover:text-cta-terracotta transition-colors">
                      gayram2004@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-cta-terracotta text-2xl mt-1">📍</div>
                  <div>
                    <p className="text-sm text-gray-600 font-semibold">Address</p>
                    <p className="text-lg text-primary-green font-semibold">
                      10038 Foxboro Cir<br />
                      San Ramon, CA
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Appointment Info Box */}
            <div className="bg-white border-l-4 border-accent-gold rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-bold text-primary-green font-playfair mb-4">Appointment Info</h3>
              <div className="space-y-3 text-text-charcoal">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="font-semibold">Price per Signature:</span>
                  <span className="text-cta-terracotta font-bold">$5</span>
                </div>
                <div className="flex justify-between items-center pt-3">
                  <span className="font-semibold">Service Area:</span>
                  <span>San Ramon, Dublin, Pleasanton, Danville</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Action Buttons */}
          <div className="space-y-8 flex flex-col justify-center">
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-primary-green font-playfair mb-8">Ready to Schedule?</h3>
              
              <div className="space-y-4">
                {/* WhatsApp Button */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-cta-terracotta text-white px-6 py-4 rounded-lg font-semibold text-center hover:bg-opacity-90 transition-all hover:shadow-lg hover:scale-105"
                >
                  💬 Contact via WhatsApp
                </a>

                {/* Email Button */}
                <a
                  href={emailLink}
                  className="block w-full bg-primary-green text-white px-6 py-4 rounded-lg font-semibold text-center hover:bg-opacity-90 transition-all hover:shadow-lg hover:scale-105"
                >
                  📧 Contact via Email
                </a>
              </div>

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-center text-sm text-gray-600">
                  💡 <strong>Tip:</strong> WhatsApp is fastest for quick inquiries, but email works too!
                </p>
              </div>
            </div>

            {/* Business Hours (Optional) */}
            <div className="bg-accent-gold bg-opacity-10 rounded-2xl p-8 border border-accent-gold border-opacity-20">
              <h3 className="text-lg font-bold text-primary-green font-playfair mb-4">Flexible Scheduling</h3>
              <p className="text-text-charcoal">
                Appointments available on-demand. Contact us to schedule a time that works best for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
