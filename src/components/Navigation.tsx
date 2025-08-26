import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              ecoage
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive("/") 
                    ? "text-primary bg-accent" 
                    : "text-foreground hover:text-primary hover:bg-accent"
                }`}
              >
                Home
              </Link>
              <Link
                to="/products"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive("/products") 
                    ? "text-primary bg-accent" 
                    : "text-foreground hover:text-primary hover:bg-accent"
                }`}
              >
                Products
              </Link>
              <Link
                to="/about"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive("/about") 
                    ? "text-primary bg-accent" 
                    : "text-foreground hover:text-primary hover:bg-accent"
                }`}
              >
                About Us
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-b border-border">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive("/") 
                  ? "text-primary bg-accent" 
                  : "text-foreground hover:text-primary hover:bg-accent"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive("/products") 
                  ? "text-primary bg-accent" 
                  : "text-foreground hover:text-primary hover:bg-accent"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive("/about") 
                  ? "text-primary bg-accent" 
                  : "text-foreground hover:text-primary hover:bg-accent"
              }`}
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;