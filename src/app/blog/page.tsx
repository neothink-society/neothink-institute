import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Explore insights on integrated thinking, self-leadership, value creation, and human potential from Neothink Institute's 50+ years of research.",
  openGraph: {
    title: "Blog | Neothink Institute",
    description:
      "Articles on integrated thinking, self-leadership, and value creation from over 50 years of pioneering research.",
  },
};

// Blog posts data
const posts = [
  {
    slug: "what-is-integrated-thinking",
    title: "What Is Integrated Thinking?",
    excerpt:
      "Discover the cognitive framework that has guided over 50 years of breakthrough discoveries in human potential. Integrated thinking connects disparate ideas into coherent understanding.",
    category: "Philosophy",
    author: "Mark Hamilton",
    date: "December 28, 2024",
    readTime: "8 min read",
    featured: true,
  },
  {
    slug: "self-leadership-in-modern-world",
    title: "Self-Leadership in the Modern World",
    excerpt:
      "How ancient wisdom and modern insights combine to create a practical framework for personal excellence in today's complex environment.",
    category: "Self-Development",
    author: "Wallace Hamilton",
    date: "December 20, 2024",
    readTime: "6 min read",
    featured: false,
  },
  {
    slug: "value-creation-principles",
    title: "The Principles of Value Creation",
    excerpt:
      "Understanding the fundamental dynamics that drive meaningful achievement and lasting prosperity. Learn how value creation benefits everyone involved.",
    category: "Business",
    author: "Mark Hamilton",
    date: "December 15, 2024",
    readTime: "7 min read",
    featured: false,
  },
  {
    slug: "breaking-through-mental-barriers",
    title: "Breaking Through Mental Barriers",
    excerpt:
      "Identifying and overcoming the psychological obstacles that prevent us from reaching our full potential. A practical guide to mental clarity.",
    category: "Psychology",
    author: "Mark Hamilton",
    date: "December 10, 2024",
    readTime: "9 min read",
    featured: false,
  },
  {
    slug: "the-power-of-honest-thinking",
    title: "The Power of Honest Thinking",
    excerpt:
      "Why intellectual honesty is the foundation of all meaningful progress, and how to cultivate this essential quality in your own life.",
    category: "Philosophy",
    author: "Wallace Hamilton",
    date: "December 5, 2024",
    readTime: "5 min read",
    featured: false,
  },
  {
    slug: "building-productive-habits",
    title: "Building Productive Habits",
    excerpt:
      "Practical strategies for developing habits that support your goals and align with your values. Transform your daily routines for lasting success.",
    category: "Productivity",
    author: "Mark Hamilton",
    date: "November 30, 2024",
    readTime: "7 min read",
    featured: false,
  },
];

// Get featured post
const featuredPost = posts.find((post) => post.featured);
const regularPosts = posts.filter((post) => !post.featured);

// Categories for filter
const categories = [
  "All",
  "Philosophy",
  "Self-Development",
  "Business",
  "Psychology",
  "Productivity",
];

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-charcoal to-background">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-ivory mb-4">Insights & Articles</h1>
            <p className="text-lg text-pearl/80 leading-relaxed">
              Explore our thinking on integrated honesty, self-leadership, value creation,
              and the principles that unlock human potential.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="section-container -mt-8">
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="block group"
          >
            <div className="bg-charcoal border border-border/20 rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-300">
              <div className="grid lg:grid-cols-2">
                {/* Image */}
                <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-slate to-ink relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-gold/30" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gold text-white text-xs font-medium uppercase tracking-widest rounded-full">
                      Featured
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-medium uppercase tracking-widest text-gold">
                      {featuredPost.category}
                    </span>
                    <span className="text-xs text-silver">•</span>
                    <span className="text-xs text-silver">
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-display font-semibold text-ivory mb-4 group-hover:text-gold transition-colors">
                    {featuredPost.title}
                  </h2>

                  <p className="text-pearl/70 leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-sm text-silver">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-silver">
                      <Clock className="w-4 h-4" />
                      {featuredPost.date}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Category Filter */}
      <section className="section-container py-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                category === "All"
                  ? "bg-gold text-white"
                  : "bg-muted text-muted-foreground hover:bg-gold/10 hover:text-gold"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section-container pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <Link
              key={index}
              href={`/blog/${post.slug}`}
              className="group blog-card p-0 overflow-hidden"
            >
              {/* Image */}
              <div className="aspect-video bg-gradient-to-br from-charcoal to-slate relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <BookOpen className="w-10 h-10 text-gold/30" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium uppercase tracking-widest text-gold">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-display font-semibold mb-3 group-hover:text-gold transition-colors">
                  {post.title}
                </h3>

                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-charcoal border-t border-border/20">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-ivory mb-4">Stay Updated</h2>
            <p className="text-pearl/70 mb-8">
              Subscribe to receive our latest insights on integrated thinking,
              self-leadership, and value creation directly in your inbox.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 form-input bg-ink border-stone/30 text-ivory placeholder:text-silver"
              />
              <Button type="submit" className="btn-premium-gold whitespace-nowrap">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>

            <p className="text-xs text-silver mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
