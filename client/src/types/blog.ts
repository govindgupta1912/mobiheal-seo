export interface BlogSection {
  heading: string;
  content: string[];
  listItems?: string[];
}

export interface Blog {
  id: string;
  title: string;
  publishedAt: string;
  readTime: string;
  coverImage: string;
  featureImage: string;
  author: string;
  introduction: string;
  sections: BlogSection[];
  conclusion?: {
    content: string;
    cta: {
      title: string;
      description: string;
      buttonText: string;
      buttonLink: string;
    };
  };
  seoRecommendations?: {
    internalLinks: {
      text: string;
      url: string;
      description: string;
    }[];
   
  };
}
