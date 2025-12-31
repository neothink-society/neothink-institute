import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Explore articles and insights on integrated thinking, self-leadership, and personal development from Neothink Institute.",
};

// Placeholder blog posts - will be replaced with actual content
const posts = [
  {
    slug: "introduction-to-integrated-thinking",
    title: "Introduction to Integrated Thinking",
    description:
      "Discover the foundational principles of integrated thinking and how it can transform your approach to problem-solving.",
    date: "2025-01-15",
    readTime: "5 min read",
  },
  {
    slug: "self-leadership-fundamentals",
    title: "Self-Leadership Fundamentals",
    description:
      "Learn the core practices of self-leadership that form the foundation of personal excellence.",
    date: "2025-01-10",
    readTime: "7 min read",
  },
  {
    slug: "unlocking-your-potential",
    title: "Unlocking Your Potential",
    description:
      "Practical strategies for identifying and breaking through the barriers that hold you back.",
    date: "2025-01-05",
    readTime: "6 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Blog
            </h1>
            <p className="text-xl text-muted-foreground">
              Insights and perspectives on personal development, integrated
              thinking, and self-leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                      <span>&middot;</span>
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription>{post.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="text-sm font-medium text-primary">
                      Read more &rarr;
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
