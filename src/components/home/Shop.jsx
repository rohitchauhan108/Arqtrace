import { SectionTitle } from "@/components/ui/SectionTitle";
import { ShoppingCart, Star } from "lucide-react";

const products = [
  {
    name: "Classic Ceramic Tile",
    price: "$25.00",
    rating: 5,
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Classic%20ceramic%20tile%20sample%2C%20white%20and%20grey%2C%20high%20resolution&image_size=square",
  },
  {
    name: "Premium Oak Plank",
    price: "$45.00",
    rating: 4,
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Premium%20oak%20wood%20flooring%20plank%2C%20natural%20texture%2C%20high%20resolution&image_size=square",
  },
  {
    name: "Grey Stone Mosaic",
    price: "$35.00",
    rating: 5,
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Grey%20stone%20mosaic%20tiles%2C%20modern%20pattern%2C%20high%20resolution&image_size=square",
  },
  {
    name: "Vinyl Floor Sheet",
    price: "$20.00",
    rating: 4,
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Vinyl%20flooring%20sheet%2C%20durable%20texture%2C%20high%20resolution&image_size=square",
  },
];

const Shop = () => {
  return (
    <section id="shop" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SectionTitle 
            subtitle="Online Shop"
            title="Our Tiling Products"
            className="flex flex-col items-center"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group">
              <div className="relative aspect-square overflow-hidden rounded-sm mb-6 bg-bg-cream flex items-center justify-center p-8">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
                <button className="absolute -bottom-10 group-hover:bottom-4 left-4 right-4 bg-secondary text-white py-3 font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 hover:bg-primary">
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={cn(
                        "w-3 h-3",
                        i < product.rating ? "fill-primary text-primary" : "text-gray-300"
                      )} 
                    />
                  ))}
                </div>
                <h3 className="text-lg font-bold text-secondary mb-1 hover:text-primary cursor-pointer transition-colors">
                  {product.name}
                </h3>
                <p className="text-primary font-black">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper for conditional classes if not already available in this file scope
const cn = (...classes) => classes.filter(Boolean).join(' ');

export default Shop;
