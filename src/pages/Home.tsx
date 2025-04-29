
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ArticleCard } from "@/components/ArticleCard";
import { SectionHeading } from "@/components/SectionHeading";
import { CategoryTag } from "@/components/CategoryTag";
import { MessageCircle } from "lucide-react";
import { articles, getAllCategories } from "@/data/articles";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const featuredArticles = articles.slice(0, 3);
  const categories = getAllCategories();
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 2000); // Appear after loading animation
    
    return () => clearTimeout(timeout);
  }, []);
  
  const animationClass = isVisible ? "animate-fade-in" : "opacity-0";
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className={`pt-24 pb-16 px-4 ${animationClass}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
            Welcome to Security<span className="text-primary">+</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
            Cybersecurity, Simplified and Secured.
          </h2>
          <Link
            to="/blog"
            className="bg-primary text-white px-6 py-3 rounded-md font-medium text-lg hover:bg-primary/90 transition-all hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:shadow-none inline-flex items-center"
          >
            Explore Articles
          </Link>
        </div>
      </section>
      
      {/* About Us Section */}
      <section className={`py-16 px-4 bg-muted/30 ${animationClass}`} style={{ animationDelay: "100ms" }}>
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading 
            title="Our Mission"
            centered
          />
          <p className="text-lg">
            At SecurityPlus, we believe everyone deserves easy access to cybersecurity knowledge. 
            We break down complex security concepts into clear, actionable advice that helps you 
            protect your digital life without needing to become an expert. Our team of security 
            professionals brings years of experience to every article, ensuring our content is not 
            just approachable, but also accurate and up-to-date with the latest threats and protections.
          </p>
        </div>
      </section>
      
      {/* Latest Articles Section */}
      <section className={`py-16 px-4 ${animationClass}`} style={{ animationDelay: "200ms" }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeading 
            title="Latest Articles"
            subtitle="Stay updated with our newest security insights and guides"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {featuredArticles.map(article => (
              <ArticleCard
                key={article.id}
                id={article.id}
                title={article.title}
                excerpt={article.excerpt}
                coverImage={article.coverImage}
                category={article.category}
                date={article.date}
                readTime={article.readTime}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="btn-primary inline-flex"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className={`py-16 px-4 bg-muted/30 ${animationClass}`} style={{ animationDelay: "300ms" }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeading 
            title="Top Categories"
            subtitle="Explore our content by specialized security topics"
            centered
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {categories.map(category => (
              <Link 
                key={category}
                to={`/blog?category=${encodeURIComponent(category)}`}
                className="bg-card border rounded-lg p-6 text-center transition-all hover:shadow-md hover:-translate-y-1"
              >
                <h3 className="font-semibold mb-2">{category}</h3>
                <CategoryTag name="View Articles" variant="outline" className="mt-2" />
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Marketplace Teaser */}
      <section className={`py-16 px-4 ${animationClass}`} style={{ animationDelay: "400ms" }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeading 
            title="Custom Security Articles"
            subtitle="Need specialized cybersecurity content for your blog or business?"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Example Article 1 */}
            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">
                Complete Guide to Password Security
              </h3>
              <p className="text-muted-foreground mb-6">
                A comprehensive guide to creating and managing secure passwords.
              </p>
              <a
                href="https://wa.me/254757086742?text=I'm%20interested%20in%20ordering%20the%20Complete%20Guide%20to%20Password%20Security%20article"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-medium rounded-md py-2 px-4 inline-flex items-center transition-colors"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Order this article
              </a>
            </div>
            
            {/* Example Article 2 */}
            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">
                Securing Remote Work Environments
              </h3>
              <p className="text-muted-foreground mb-6">
                Best practices for maintaining security while working remotely.
              </p>
              <a
                href="https://wa.me/254757086742?text=I'm%20interested%20in%20ordering%20the%20Securing%20Remote%20Work%20Environments%20article"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-medium rounded-md py-2 px-4 inline-flex items-center transition-colors"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Order this article
              </a>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/marketplace"
              className="btn-primary inline-flex"
            >
              Explore Marketplace
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
