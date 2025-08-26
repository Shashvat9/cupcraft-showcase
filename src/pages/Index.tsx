import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { CheckCircle, Leaf, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/paper-cups-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-hero-gradient py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Premium Paper Cups for Your Business
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Trusted manufacturer of high-quality disposable paper cups. 
                Serving businesses worldwide with eco-friendly solutions and reliable supply.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary-gradient shadow-primary">
                  <Link to="/products">View Our Products</Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Link to="/about">Learn About Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Premium paper cups manufactured by Eco Edge"
                className="rounded-lg shadow-soft w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose Eco Edge?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We deliver quality, reliability, and sustainability in every paper cup we manufacture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center shadow-soft hover:shadow-primary hover:-translate-y-1 hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Quality Assured</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Rigorous quality control ensures every cup meets the highest standards
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft hover:shadow-primary hover:-translate-y-1 hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Eco-Friendly</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Sustainable materials and processes for environmentally conscious businesses
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft hover:shadow-primary hover:-translate-y-1 hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Reliable Supply</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Consistent delivery schedules and bulk ordering capabilities for your business
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft hover:shadow-primary hover:-translate-y-1 hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Expert Team</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Experienced professionals dedicated to meeting your specific requirements
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Join hundreds of satisfied businesses who trust us for their paper cup needs.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="shadow-soft"
          >
            <Link to="/about">Get in Touch Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
