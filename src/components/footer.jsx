import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">Matrimony</h3>
            <p className="text-gray-300">
              Find your perfect life partner with our modern matrimony platform.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-secondary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-300 hover:text-primary transition-colors">Privacy & Policy</Link></li>
              <li><Link href="/terms" className="text-gray-300 hover:text-primary transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/refund-policy" className="text-gray-300 hover:text-primary transition-colors">Refund Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-secondary mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Email: www.marry10care@gmail.com</li>
              <li>Phone: +91 8891332500</li>
              <li>Address: Trivandrum, Kerala</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-300">
            &copy; {currentYear} Matrimony Website. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;