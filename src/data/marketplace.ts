
interface MarketplaceItem {
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

export const marketplaceItems: MarketplaceItem[] = [
  {
    id: "1",
    title: "Comprehensive GDPR Compliance Guide for Small Businesses",
    description: "A detailed guide on implementing GDPR compliance measures tailored specifically for small businesses with limited resources.",
    wordCount: 1500,
    price: {
      usd: 95,
      kes: 12350
    },
    category: "Compliance"
  },
  {
    id: "2",
    title: "Implementing Zero Trust Architecture on a Budget",
    description: "Practical steps to transition from traditional security models to zero trust, focusing on affordable solutions for SMBs.",
    wordCount: 2000,
    price: {
      usd: 120,
      kes: 15600
    },
    category: "Security Architecture"
  },
  {
    id: "3",
    title: "Cloud Security Checklist for AWS, Azure, and Google Cloud",
    description: "A comparison of security features across major cloud providers with actionable configuration guidance for each platform.",
    wordCount: 1800,
    price: {
      usd: 110,
      kes: 14300
    },
    category: "Cloud Security"
  },
  {
    id: "4",
    title: "Social Engineering Training Program for Employees",
    description: "A complete curriculum for teaching staff to recognize and respond to social engineering attacks, including exercises and assessments.",
    wordCount: 2500,
    price: {
      usd: 145,
      kes: 18850
    },
    category: "Training"
  },
  {
    id: "5",
    title: "Incident Response Plan Template with Customization Guide",
    description: "Ready-to-use templates for security incident response, with guidance on customizing for your organization's specific needs.",
    wordCount: 1200,
    price: {
      usd: 85,
      kes: 11050
    },
    category: "Incident Response"
  },
  {
    id: "6",
    title: "Mobile Device Security Policy for Remote Workforces",
    description: "Comprehensive policy framework for securing employee mobile devices in BYOD and remote work environments.",
    wordCount: 1000,
    price: {
      usd: 75,
      kes: 9750
    },
    category: "Policy"
  },
  {
    id: "7",
    title: "Penetration Testing Methodology for Web Applications",
    description: "Step-by-step guide to conducting thorough penetration tests on web applications, including tool recommendations and reporting templates.",
    wordCount: 2200,
    price: {
      usd: 130,
      kes: 16900
    },
    category: "Testing"
  },
  {
    id: "8",
    title: "Cybersecurity for E-commerce: Protecting Customer Data and Transactions",
    description: "Specialized security measures for online stores, focusing on customer data protection, payment security, and regulatory compliance.",
    wordCount: 1600,
    price: {
      usd: 100,
      kes: 13000
    },
    category: "E-commerce"
  }
];

export function getAllMarketplaceCategories(): string[] {
  const categories = new Set<string>();
  marketplaceItems.forEach(item => categories.add(item.category));
  return Array.from(categories);
}

export function getMarketplaceItemsByCategory(category: string): MarketplaceItem[] {
  if (category === "All") return marketplaceItems;
  return marketplaceItems.filter(item => item.category === category);
}

export function getMarketplaceItemById(id: string): MarketplaceItem | undefined {
  return marketplaceItems.find(item => item.id === id);
}
