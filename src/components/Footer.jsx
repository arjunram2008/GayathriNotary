export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-green text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold font-playfair mb-2">Gayathri Ramaswamy Notary</h3>
            <p className="text-accent-gold opacity-80">Professional Notary Services</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 font-playfair">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#hero" className="hover:text-accent-gold transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-accent-gold transition-colors">About</a></li>
              <li><a href="#pricing" className="hover:text-accent-gold transition-colors">Pricing</a></li>
              <li><a href="#contact" className="hover:text-accent-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 font-playfair">Contact</h4>
            <div className="text-sm opacity-90 space-y-1">
              <p className="text-accent-gold">925-858-7528</p>
              <p className="text-accent-gold">San Ramon, CA</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white border-opacity-20 pt-8">
          <p className="text-center text-sm opacity-75">
            © {currentYear} Gayathri Ramaswamy Notary Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
