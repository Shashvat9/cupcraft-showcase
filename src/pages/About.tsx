import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, User } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "John Smith",
      position: "Founder & CEO",
      description: "20+ years in manufacturing industry, leading our vision for sustainable paper cup production.",
      email: "john.smith@ecoage.com",
      phone: "+1 (555) 123-4567"
    },
    {
      name: "Sarah Johnson", 
      position: "Operations Partner",
      description: "Expert in supply chain management and quality control, ensuring consistent product excellence.",
      email: "sarah.johnson@ecoage.com",
      phone: "+1 (555) 234-5678"
    },
    {
      name: "Michael Chen",
      position: "Sales Partner", 
      description: "Dedicated to building lasting relationships with our clients and expanding our market reach.",
      email: "michael.chen@ecoage.com",
      phone: "+1 (555) 345-6789"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About ecoage
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Founded with a commitment to quality and sustainability, we have grown to become 
            a trusted partner for businesses worldwide seeking reliable paper cup solutions.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                ecoage was established with a simple yet powerful vision: 
                to provide high-quality, eco-friendly paper cups that businesses can rely on. 
                What started as a small operation has grown into a comprehensive manufacturing 
                facility serving clients across multiple industries.
              </p>
              <p>
                Our commitment to quality begins with careful material selection and extends 
                through every step of our manufacturing process. We understand that our products 
                represent your business, which is why we maintain the highest standards in 
                production and customer service.
              </p>
              <p>
                Today, we are proud to be a trusted partner for cafes, restaurants, offices, 
                and businesses of all sizes, providing reliable supply chains and consistent 
                quality that our clients depend on.
              </p>
            </div>
          </div>
          
          <div className="bg-hero-gradient rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Our Values</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Quality First</h4>
                  <p className="text-muted-foreground">Every cup meets our rigorous quality standards</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Sustainability</h4>
                  <p className="text-muted-foreground">Environmentally responsible manufacturing practices</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Reliability</h4>
                  <p className="text-muted-foreground">Consistent supply and dependable service</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Partnership</h4>
                  <p className="text-muted-foreground">Building long-term relationships with our clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="shadow-soft text-center">
                <CardHeader>
                  <div className="mx-auto w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-4">
                    <User className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">
                    {member.position}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {member.description}
                  </p>
                  <div className="space-y-2 pt-4 border-t border-border">
                    <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                      <Mail className="h-4 w-4" />
                      <span>{member.email}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                      <Phone className="h-4 w-4" />
                      <span>{member.phone}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-primary text-primary-foreground rounded-lg p-8 lg:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-primary-foreground/90">
              Ready to discuss your paper cup needs? We're here to help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-primary-foreground/90">+1 (555) 123-4567</p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-primary-foreground/90">info@ecoage.com</p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="text-primary-foreground/90">
                123 Industrial Ave<br />
                Manufacturing District
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Button 
              variant="secondary" 
              size="lg"
              className="shadow-soft"
            >
              Request a Quote
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;