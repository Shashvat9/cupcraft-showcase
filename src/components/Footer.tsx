import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ecoage</h3>
            <p className="text-primary-foreground/80 mb-4">
              Leading manufacturer of high-quality disposable paper cups. 
              Committed to sustainability and excellence in every product.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-foreground/80" />
                <span className="text-primary-foreground/80">ecoedge2025@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary-foreground/80" />
                <span className="text-primary-foreground/80">
                  Plot No 23, Behind Garibshapir Dargha, G.I.D.C Phase 3, Sihor, Gujarat 364240
                </span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="/" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Home
              </a>
              <a href="/products" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Products
              </a>
              <a href="/about" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                About Us
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/80">
            © 2024 ecoage. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;