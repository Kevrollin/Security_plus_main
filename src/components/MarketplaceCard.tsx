
import { MessageCircle } from "lucide-react";

interface MarketplaceCardProps {
  id: string;
  title: string;
  description: string;
  wordCount: number;
  price: {
    usd: number;
    kes: number;
  };
  category: string;
}

export function MarketplaceCard({
  id,
  title,
  description,
  wordCount,
  price,
  category
}: MarketplaceCardProps) {
  const whatsappText = `I'm interested in ordering the article: "${title}" (ID: ${id})`;
  const whatsappUrl = `https://wa.me/254757086742?text=${encodeURIComponent(whatsappText)}`;

  return (
    <div className="bg-card border rounded-lg overflow-hidden transition-all hover:shadow-lg">
      <div className="p-5">
        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
          {category}
        </span>
        
        <h3 className="text-lg font-semibold mt-3 mb-2">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4">
          {description}
        </p>
        
        <div className="flex justify-between items-center text-sm text-muted-foreground mb-5">
          <span>{wordCount} words</span>
          <div className="font-medium text-foreground">
            ${price.usd} <span className="text-xs text-muted-foreground">/ KES {price.kes}</span>
          </div>
        </div>
        
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-medium rounded-md py-2 px-4 inline-flex items-center justify-center transition-colors"
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          Order via WhatsApp
        </a>
      </div>
    </div>
  );
}
