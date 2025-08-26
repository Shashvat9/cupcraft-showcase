import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import doublewallcups from "@/assets/doublewallcups.png";
import singlewalledcup from "@/assets/singlewalledcup.png";
import ripplewallcups from "@/assets/ripplewallcups.png";
import vendingcups from "@/assets/vendingcups.png";
import accessorieslid from "@/assets/accessorieslid.png";
import compostablecups from "@/assets/compostablecups.png";
import platesbowls from "@/assets/platesbowls.png";
import cutlery from "@/assets/cutlery.png";
import privateprints from "@/assets/privateprints.png";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Single Wall Paper Cups",
      description: "Perfect for Hot and cold beverages ",
      image: singlewalledcup,
      sizes: ["1 oz","3 oz","4 oz","6 oz","8 oz","10 oz","12 oz","16 oz"], // 1,3,4,6,8,10,12,16  oz
      features: ["Heat resistant", "Food grade", "Leak-proof"],
      applications: ["Coffee shops","Restaurants","Catering" ]
    },
    {
      id: 2,
      name: "Double Wall Paper Cups", 
      description: "Ideal for regular coffee, tea, and cold beverages",
      image: doublewallcups,
      sizes: ["6 oz","8 oz","10 oz","12 oz","16 oz"], // 6,8,10,12,16  oz
      features: ["Double wall option", "Custom printing available", "Biodegradable"],
      applications: ["Offices", "Cafes", "Events"]
    },
    {
      id: 3,
      name: "Ripple Paper Cups", // change photo of ripple cups
      description: "Great for large beverages, smoothies, and take-away drinks",
      image: ripplewallcups,
      sizes: ["4 oz","6 oz","8 oz","10 oz","12 oz"], //4,6,8,10,12  oz
      features: ["Extra strong", "Insulated options", "Wide rim design"],
      applications: ["Fast food", "Smoothie bars", "Convenience stores"]
    },
    // {
    //   id: 4,
    //   name: "Vending Cups",
    //   description: "Specifically designed for vending machines and high-traffic areas",
    //   image: vendingcups,
    //   sizes: ["test"], // ask for sizes
    //   features: [
    //     "Consistent dispensing",
    //     "Food safe material",
    //     "Leak-proof"
    //   ],
    //   applications: ["Vending machines", "Office pantries", "Public spaces"]
    // },
    {
      id: 5,
      name: "Lid",
      description: "Wide range of lids to complement our paper cups",
      image: accessorieslid,
      sizes: ["4oz to 16oz"], //ask for sizes
      features: [
        "Variety of lid options",
        "Eco-friendly materials",
        "Secure fit"
      ],
      applications: ["All cup types", "Outdoor events", "Catering services"]
    },
    // {
    //   id: 6,
    //   name: "Compostable Cups",
    //   description: "Eco-friendly cups made from compostable materials",
    //   image: compostablecups,
    //   sizes: ["test"], //ask for sizes
    //   features: [
    //     "Made from renewable resources",
    //     "Breaks down in composting conditions",
    //     "Certified compostable"
    //   ],
    //   applications: ["Eco-conscious businesses", "Events", "Cafes"]
    // },
    {
      id: 7,
      name: "Plates and Bowls",
      description: "Sturdy and versatile, perfect for serving a wide range of foods at events, parties, and for take-away services.",
      image: platesbowls,
      sizes: ["6\"","9\"","12\"","up to 12oz"], //ask for sizes
      features: [
        "Durable and sturdy",
        "Variety of sizes and shapes",
        "Eco-friendly materials"
      ],
      applications: ["Parties", "Catering", "Take-away services"]
    },
    {
      id: 8,
      name: "Cutlery",
      description: "Eco-friendly cutlery options including forks, knives, and spoons made from sustainable materials.",
      image: cutlery,
      sizes: ["All Regular Sizes","Customised Sizes Available"], //ask for sizes
      features: [
        "Biodegradable and compostable",
        "Durable for various food types",
        "Food safe materials"
      ],
      applications: ["Restaurants", "Catering", "Outdoor events"]
    },
    {
      id: 9,
      name: "Private Prints",
      description: "Showcase your brand with our custom printed cups, turning every cup into a marketing opportunity.",
      image: privateprints,
      sizes: ["All Sizes"], //ask for sizes
      features: [
        "Custom logo and design printing",
        "High-quality print finish",
        "Available on all cup types"
      ],
      applications: ["Brand promotion", "Events", "Cafes and restaurants"]
    }
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