import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

// Blog post data - will be replaced with CMS or MDX content
const posts: Record<
  string,
  {
    title: string;
    description: string;
    date: string;
    readTime: string;
    content: string;
  }
> = {
  "introduction-to-integrated-thinking": {
    title: "Introduction to Integrated Thinking",
    description:
      "Discover the foundational principles of integrated thinking and how it can transform your approach to problem-solving.",
    date: "2025-01-15",
    readTime: "5 min read",
    content: `
      <p>Integrated thinking is a holistic approach to understanding and solving problems that draws connections across different domains of knowledge. Unlike siloed thinking, which focuses narrowly on a single area, integrated thinking seeks to understand how different elements interact and influence each other.</p>

      <h2>The Core Principles</h2>

      <p>At its foundation, integrated thinking rests on several key principles:</p>

      <ul>
        <li><strong>Systems awareness:</strong> Understanding that everything exists within larger systems and is connected to other elements.</li>
        <li><strong>Pattern recognition:</strong> Developing the ability to see patterns that repeat across different contexts.</li>
        <li><strong>Synthesis:</strong> Combining insights from multiple sources to create new understanding.</li>
        <li><strong>Long-term perspective:</strong> Considering the extended implications and consequences of actions.</li>
      </ul>

      <h2>Practical Application</h2>

      <p>To begin practicing integrated thinking, start by expanding your information sources. Read widely across different subjects. When you encounter a new idea, ask yourself how it relates to what you already know. Look for underlying principles that might apply in other areas of your life.</p>

      <p>The goal is not to become an expert in everything, but to develop the mental flexibility to draw meaningful connections between different domains of knowledge.</p>
    `,
  },
  "self-leadership-fundamentals": {
    title: "Self-Leadership Fundamentals",
    description:
      "Learn the core practices of self-leadership that form the foundation of personal excellence.",
    date: "2025-01-10",
    readTime: "7 min read",
    content: `
      <p>Self-leadership is the practice of intentionally influencing your own thinking, feeling, and actions toward your objectives. It's the foundation upon which all other forms of leadership are built.</p>

      <h2>Why Self-Leadership Matters</h2>

      <p>Before you can effectively lead others, you must first master the art of leading yourself. This involves developing self-awareness, emotional regulation, and the discipline to follow through on your commitments.</p>

      <h2>Key Practices</h2>

      <ul>
        <li><strong>Self-awareness:</strong> Regular reflection on your thoughts, emotions, and behaviors.</li>
        <li><strong>Goal setting:</strong> Clear, meaningful objectives that align with your values.</li>
        <li><strong>Self-discipline:</strong> The ability to do what needs to be done, whether you feel like it or not.</li>
        <li><strong>Continuous learning:</strong> A commitment to ongoing growth and development.</li>
      </ul>

      <h2>Getting Started</h2>

      <p>Begin by establishing a daily practice of self-reflection. Take time each morning to set intentions for the day, and each evening to review how you did. This simple practice creates a feedback loop that accelerates your development as a self-leader.</p>
    `,
  },
  "unlocking-your-potential": {
    title: "Unlocking Your Potential",
    description:
      "Practical strategies for identifying and breaking through the barriers that hold you back.",
    date: "2025-01-05",
    readTime: "6 min read",
    content: `
      <p>Every person has untapped potential waiting to be realized. The barriers that prevent us from reaching our full capabilities are often internal rather than external.</p>

      <h2>Identifying Your Barriers</h2>

      <p>The first step to unlocking your potential is identifying what's holding you back. Common barriers include:</p>

      <ul>
        <li><strong>Limiting beliefs:</strong> Assumptions about what you can or cannot do.</li>
        <li><strong>Fear of failure:</strong> Avoiding risk to protect yourself from potential disappointment.</li>
        <li><strong>Comfort zone attachment:</strong> Preferring the familiar over the growth that comes from new challenges.</li>
        <li><strong>Lack of clarity:</strong> Not knowing what you truly want or what success looks like for you.</li>
      </ul>

      <h2>Breaking Through</h2>

      <p>Once you've identified your barriers, you can begin the work of breaking through them. This requires courage, persistence, and a willingness to be uncomfortable.</p>

      <p>Start small. Choose one area where you feel limited and take a small action that challenges that limitation. Success builds on success, and small wins create momentum for larger breakthroughs.</p>

      <h2>Sustaining Growth</h2>

      <p>Unlocking your potential is not a one-time event but an ongoing process. Create systems and habits that support continuous growth. Surround yourself with people who challenge and inspire you. Never stop asking what more you're capable of.</p>
    `,
  },
};

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    notFound();
  }

  return (
    <article className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <header className="mb-12">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
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
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground">{post.description}</p>
          </header>

          <div
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </article>
  );
}
