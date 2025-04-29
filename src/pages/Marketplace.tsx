
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { MarketplaceCard } from "@/components/MarketplaceCard";
import { marketplaceItems, getAllMarketplaceCategories } from "@/data/marketplace";
import { MessageCircle } from "lucide-react";

export default function Marketplace() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", ...getAllMarketplaceCategories()];
  
  const displayedItems = selectedCategory === "All" 
    ? marketplaceItems 
    : marketplaceItems.filter(item => item.category === selectedCategory);
  
  return (
    <Layout>
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeading 
            title="SecurityPlus Marketplace"
            subtitle="Quality cybersecurity articles ready for your blog or business"
            centered
          />
          
          {/* How It Works */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 font-heading text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card border rounded-lg p-6 text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold mb-3">Browse & Select</h3>
                <p className="text-muted-foreground">
                  Browse our collection of professionally written cybersecurity articles and select the ones that match your needs.
                </p>
              </div>
              
              <div className="bg-card border rounded-lg p-6 text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="font-bold text-primary">2</span>
                </div>
                <h3 className="font-semibold mb-3">Order on WhatsApp</h3>
                <p className="text-muted-foreground">
                  Click "Order via WhatsApp" and send us a message with your article selection and any customization requests.
                </p>
              </div>
              
              <div className="bg-card border rounded-lg p-6 text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="font-bold text-primary">3</span>
                </div>
                <h3 className="font-semibold mb-3">Receive & Publish</h3>
                <p className="text-muted-foreground">
                  After payment, you'll receive your article in your preferred format, ready to publish on your blog or platform.
                </p>
              </div>
            </div>
          </div>
          
          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    category === selectedCategory
                      ? "bg-primary text-white"
                      : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Marketplace Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {displayedItems.map(item => (
              <MarketplaceCard
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                wordCount={item.wordCount}
                price={item.price}
                category={item.category}
              />
            ))}
          </div>
          
          {/* Custom Orders */}
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold mb-3 font-heading">Need a Custom Article?</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Don't see what you're looking for? We can create custom cybersecurity content tailored to your specific requirements.
            </p>
            <a
              href="https://wa.me/254757086742?text=I'm%20interested%20in%20ordering%20a%20custom%20cybersecurity%20article"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-medium rounded-md py-3 px-6 inline-flex items-center transition-colors"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Request Custom Article
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
