
import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { CategoryTag } from "@/components/CategoryTag";
import { ShareButtons } from "@/components/ShareButtons";
import { ArticleCard } from "@/components/ArticleCard";
import { BuyMeCoffeeButton } from "@/components/BuyMeCoffeeButton";
import { CalendarIcon, ChevronLeft, ChevronDown, ChevronUp } from "lucide-react";
import { getArticleById, getRelatedArticles } from "@/data/articles";

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const [showComments, setShowComments] = useState(false);
  
  if (!id) return <Navigate to="/blog" />;
  
  const article = getArticleById(id);
  if (!article) return <Navigate to="/blog" />;
  
  const relatedArticles = getRelatedArticles(id);
  
  return (
    <Layout>
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link 
              to="/blog" 
              className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to all articles
            </Link>
          </div>
          
          {/* Article Header */}
          <div className="mb-8">
            <CategoryTag name={article.category} className="mb-4" />
            
            <h1 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              {article.title}
            </h1>
            
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center">
                <img 
                  src={article.authorImage} 
                  alt={article.author}
                  className="w-10 h-10 rounded-full mr-3 object-cover" 
                />
                <div>
                  <p className="font-medium">{article.author}</p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <CalendarIcon className="h-3 w-3 mr-1" />
                    <time dateTime={article.date}>{article.date}</time>
                    <span className="mx-1">•</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
              
              <ShareButtons 
                url={`/blog/${article.id}`} 
                title={article.title} 
              />
            </div>
          </div>
          
          {/* Featured Image */}
          <div className="mb-8">
            <img 
              src={article.coverImage} 
              alt={article.title}
              className="w-full h-auto rounded-lg" 
            />
          </div>
          
          {/* Article Content */}
          <article className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </article>
          <BuyMeCoffeeButton articleId={id} />
          
          {/* Share & Tags */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-b py-6 mb-12">
            <CategoryTag name={article.category} />
            <ShareButtons 
              url={`/blog/${article.id}`} 
              title={article.title} 
            />
          </div>
          
          {/* Comments Section */}
          <div className="mb-12">
            <button
              onClick={() => setShowComments(!showComments)}
              className="flex items-center justify-between w-full border p-4 rounded-lg hover:bg-muted/30 transition-colors"
            >
              <span className="font-medium">Comments (3)</span>
              {showComments ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </button>
            
            {showComments && (
              <div className="mt-4 space-y-4">
                {/* Sample Comments */}
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-muted"></div>
                    <div>
                      <p className="font-medium">John Doe</p>
                      <p className="text-xs text-muted-foreground">April 29, 2025</p>
                    </div>
                  </div>
                  <p className="text-sm">Great article! I've implemented these practices at my company and seen a significant improvement in our security posture.</p>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-muted"></div>
                    <div>
                      <p className="font-medium">Alice Smith</p>
                      <p className="text-xs text-muted-foreground">April 30, 2025</p>
                    </div>
                  </div>
                  <p className="text-sm">Could you elaborate more on point #7? I'm having trouble implementing access controls in my organization.</p>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-muted"></div>
                    <div>
                      <p className="font-medium">Robert Johnson</p>
                      <p className="text-xs text-muted-foreground">May 1, 2025</p>
                    </div>
                  </div>
                  <p className="text-sm">I'd add that regular security awareness training is probably the most cost-effective measure for small businesses. Most breaches still happen due to human error.</p>
                </div>
                
                {/* Comment Form */}
                <div className="mt-6">
                  <h4 className="font-medium mb-2">Leave a comment</h4>
                  <textarea
                    className="w-full border rounded-md p-3 min-h-[100px]"
                    placeholder="Share your thoughts..."
                  ></textarea>
                  <button className="btn-primary mt-3">
                    Submit Comment
                  </button>
                </div>
              </div>
            )}
          </div>
          
          {/* "Hire Us" Banner */}
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-12">
            <h3 className="text-xl font-semibold mb-3">Need Customized Cybersecurity Services?</h3>
            <p className="mb-4">Our team of experts can help you implement the measures discussed in this article and develop a comprehensive security strategy tailored to your needs.</p>
            <a
              href="https://wa.me/254757086742?text=I'm%20interested%20in%20cybersecurity%20services%20after%20reading%20your%20article"
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              Hire Us for Cybersecurity Services
            </a>
          </div>
          
          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div>
              <SectionHeading 
                title="Related Articles"
                subtitle="Explore more cybersecurity insights"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map(article => (
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
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
