export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  author: string;
  sections: { heading?: string; content: string }[];
}
