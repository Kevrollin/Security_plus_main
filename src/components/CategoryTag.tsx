
import { cn } from "@/lib/utils";

interface CategoryTagProps {
  name: string;
  variant?: "default" | "outline" | "secondary";
  className?: string;
}

export function CategoryTag({ name, variant = "default", className }: CategoryTagProps) {
  const baseStyles = "category-tag";
  
  const variantStyles = {
    default: "bg-primary/10 text-primary hover:bg-primary/20",
    outline: "bg-transparent border border-primary/30 text-primary hover:bg-primary/10",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80"
  };
  
  return (
    <span className={cn(baseStyles, variantStyles[variant], className)}>
      {name}
    </span>
  );
}
