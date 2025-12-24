export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  path: string;
  image: string;
}

export interface Review {
  id: number;
  name: string;
  text: string;
  rating: number;
}

export interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  schema?: Record<string, any>;
}