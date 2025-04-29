
import { Link } from "react-router-dom";
import { CategoryTag } from "./CategoryTag";
import { CalendarIcon } from "lucide-react";

interface ArticleCardProps {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: string;
  date: string;
  readTime?: string;
}

export function ArticleCard({ 
  id, 
  title, 
  excerpt, 
  coverImage, 
  category,
  date,
  readTime = "5 min read" 
}: ArticleCardProps) {
  return (
    <article className="article-card">
      <Link to={`/blog/${id}`} className="block">
        <div className="aspect-w-16 aspect-h-9">
          <img 
            src={coverImage} 
            alt={title}
            className="object-cover w-full h-48" 
            loading="lazy"
          />
        </div>
      </Link>
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <CategoryTag name={category} />
          <div className="flex items-center text-muted-foreground text-xs">
            <CalendarIcon className="h-3 w-3 mr-1" />
            <time dateTime={date}>{date}</time>
            <span className="mx-1">•</span>
            <span>{readTime}</span>
          </div>
        </div>
        
        <Link to={`/blog/${id}`} className="block">
          <h3 className="text-lg font-semibold mb-2 line-clamp-2 hover:text-primary transition-colors">
            {title}
          </h3>
        </Link>
        
        <p className="text-muted-foreground text-sm line-clamp-3">
          {excerpt}
        </p>
        
        <Link 
          to={`/blog/${id}`}
          className="inline-flex items-center mt-4 text-primary font-medium text-sm hover:underline"
        >
          Read More
        </Link>
      </div>
    </article>
  );
}
