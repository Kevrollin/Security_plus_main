
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ArticleCard } from "@/components/ArticleCard";
import { SectionHeading } from "@/components/SectionHeading";
import { SearchBar } from "@/components/SearchBar";
import { articles, getAllCategories, getArticlesByCategory, searchArticles } from "@/data/articles";

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";
  const initialQuery = searchParams.get("q") || "";
  
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [displayedArticles, setDisplayedArticles] = useState(articles);
  const [isLoading, setIsLoading] = useState(false);
  
  const categories = ["All", ...getAllCategories()];
  
  useEffect(() => {
    setIsLoading(true);
    
    let filtered = [...articles];
    
    // Filter by category if selected
    if (selectedCategory !== "All") {
      filtered = getArticlesByCategory(selectedCategory);
    }
    
    // Filter by search query if provided
    if (searchQuery) {
      filtered = searchArticles(searchQuery).filter(article => 
        selectedCategory === "All" || article.category === selectedCategory
      );
    }
    
    // Update URL params
    const params: { [key: string]: string } = {};
    if (selectedCategory !== "All") params.category = selectedCategory;
    if (searchQuery) params.q = searchQuery;
    setSearchParams(params);
    
    // Simulate loading for smoother transitions
    setTimeout(() => {
      setDisplayedArticles(filtered);
      setIsLoading(false);
    }, 300);
  }, [selectedCategory, searchQuery, setSearchParams]);
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };
  
  return (
    <Layout>
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeading 
            title="SecurityPlus Blog"
            subtitle="Insights, guides, and resources to enhance your cybersecurity knowledge"
          />
          
          <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <SearchBar 
              onSearch={handleSearch} 
              placeholder="Search articles..."
              className="md:max-w-md"
            />
            
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
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
          
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="article-card animate-pulse">
                  <div className="h-48 bg-muted"></div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="h-6 w-24 bg-muted rounded-full"></div>
                      <div className="h-4 w-32 bg-muted rounded-full"></div>
                    </div>
                    <div className="h-6 w-full bg-muted rounded mb-2"></div>
                    <div className="h-4 w-full bg-muted rounded mb-1"></div>
                    <div className="h-4 w-3/4 bg-muted rounded mb-1"></div>
                    <div className="h-4 w-1/2 bg-muted rounded"></div>
                    <div className="mt-4 h-5 w-24 bg-muted rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : displayedArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {displayedArticles.map(article => (
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
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium mb-2">No articles found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
