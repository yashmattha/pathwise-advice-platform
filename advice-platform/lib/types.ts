export type Category = {
  slug: string;
  name: string;
  icon: string;
  description: string;
};

export type Advice = {
  id: string;
  category: string;
  categoryName: string;
  title: string;
  description: string;
  readTime: string;
  helpfulPct: number;
  keyPoints: string[];
};

export type Expert = {
  id: string;
  name: string;
  category: string;
  categoryName: string;
  rating: number;
  experienceYears: number;
  consultations: number;
  verified: boolean;
  bio: string;
  availability: 'Available today' | 'Available this week' | 'Booking ahead';
};

export type Article = {
  slug: string;
  category: string;
  categoryName: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
};

export type Question = {
  id: string;
  category: string;
  categoryName: string;
  question: string;
  context?: string;
  outcome?: string;
  urgency: 'Low' | 'Medium' | 'High';
  status: 'Answered' | 'Pending' | 'Draft';
  date: string;
  keyPoints: string[];
};

export type SavedItem = {
  type: 'advice' | 'article';
  id: string;
  label: string;
  category?: string;
  savedAt: string;
};

export type HistoryItem = {
  type: 'advice' | 'article' | 'expert';
  id: string;
  label: string;
  viewedAt: string;
};

export type Booking = {
  id: string;
  expertId: string;
  expertName: string;
  date: string;
  time: string;
  consultationType: 'Video call' | 'Chat';
  status: 'Upcoming' | 'Completed' | 'Cancelled';
};

export type User = {
  name: string;
  email: string;
  bio: string;
  interests: string[];
  joinedAt: string;
};
