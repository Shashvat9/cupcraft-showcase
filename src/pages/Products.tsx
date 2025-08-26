import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import cupsVariety from "@/assets/cups-variety.jpg";
import smallCups from "@/assets/small-cups.jpg";
import largeCups from "@/assets/large-cups.jpg";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Small Paper Cups",
      description: "Perfect for espresso, small coffee servings, and sampling",
      image: smallCups,
      sizes: ["40ml"],
      features: ["Heat resistant", "Food grade", "Leak-proof"],
      applications: ["Coffee shops", "Restaurants", "Catering"]
    },
    {
      id: 2,
      name: "Medium Paper Cups", 
      description: "Ideal for regular coffee, tea, and cold beverages",
      image: cupsVariety,
      sizes: ["55ml","65ml"],
      features: ["Double wall option", "Custom printing available", "Biodegradable"],
      applications: ["Offices", "Cafes", "Events"]
    },
    {
      id: 3,
      name: "Large Paper Cups",
      description: "Great for large beverages, smoothies, and take-away drinks",
      image: largeCups,
      sizes: ["200ml"],
      features: ["Extra strong", "Insulated options", "Wide rim design"],
      applications: ["Fast food", "Smoothie bars", "Convenience stores"]
    },
    // {
    //   id: 4,
    //   name: "Large Paper Cups",
    //   description: "Great for large beverages, smoothies, and take-away drinks",
    //   image: largeCups,
    //   sizes: ["200ml"],
    //   features: [""],
    //   applications: ["Fast food", "Smoothie bars", "Convenience stores"]
    // }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Products
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our complete range of high-quality paper cups designed to meet 
            the diverse needs of your business. From small espresso cups to large beverage containers.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <Card key={product.id} className="shadow-soft hover:shadow-primary hover:-translate-y-1 hover:scale-105 transition-all duration-300">
              <div className="aspect-square overflow-hidden rounded-t-lg">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{product.name}</CardTitle>
                <CardDescription className="text-base">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Available Sizes:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <Badge key={size} variant="secondary">{size}</Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-muted-foreground flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Perfect For:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app) => (
                      <Badge key={app} variant="outline">{app}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Custom Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                We offer custom printing, special sizes, and branded solutions to meet your specific business needs.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Logo printing and branding
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Custom colors and designs
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Special size requirements
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Bulk Ordering</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Competitive pricing for bulk orders with flexible delivery schedules to keep your business running smoothly.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Volume discounts available
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Scheduled delivery options
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Flexible payment terms
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Products;