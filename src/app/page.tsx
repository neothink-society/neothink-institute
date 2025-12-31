import Link from "next/link";
import { ArrowRight, BookOpen, Users, Lightbulb, Target, Award, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

// Authority Statistics
const stats = [
  { value: "50+", label: "Years of Research" },
  { value: "30+", label: "Published Works" },
  { value: "140+", label: "Countries Reached" },
  { value: "3", label: "Generations" },
];

// Core Pillars
const pillars = [
  {
    icon: Lightbulb,
    title: "Integrated Honesty",
    description:
      "The foundation of clear thinking. By aligning perception with reality, you develop the clarity needed to make decisions that create genuine value in your life and work.",
    color: "gold",
  },
  {
    icon: Target,
    title: "Value Creation",
    description:
      "The essence of meaningful achievement. Learn to identify and create value that benefits yourself and others, building prosperity through productive contribution.",
    color: "teal",
  },
  {
    icon: Users,
    title: "Self-Leadership",
    description:
      "The art of directing your own life. Master the principles of self-governance that enable you to achieve your goals while maintaining integrity and independence.",
    color: "gold",
  },
];

// Featured Articles
const featuredArticles = [
  {
    slug: "what-is-integrated-thinking",
    title: "What Is Integrated Thinking?",
    excerpt:
      "Discover the cognitive framework that has guided over 50 years of breakthrough discoveries in human potential.",
    category: "Philosophy",
    readTime: "8 min read",
  },
  {
    slug: "self-leadership-in-modern-world",
    title: "Self-Leadership in the Modern World",
    excerpt:
      "How ancient wisdom and modern insights combine to create a practical framework for personal excellence.",
    category: "Self-Development",
    readTime: "6 min read",
  },
  {
    slug: "value-creation-principles",
    title: "The Principles of Value Creation",
    excerpt:
      "Understanding the fundamental dynamics that drive meaningful achievement and lasting prosperity.",
    category: "Business",
    readTime: "7 min read",
  },
];

// Leadership/Founders
const founders = [
  {
    name: "Dr. Frank R. Wallace",
    role: "Founder (1932-2006)",
    description:
      "Former senior research chemist at DuPont who founded Neo-Tech in 1968. His groundbreaking work on integrated thinking laid the foundation for everything that followed.",
    years: "1968-2006",
  },
  {
    name: "Mark Hamilton",
    role: "Principal Author & Director",
    description:
      "Has expanded the Neothink philosophy across 30+ published works, reaching millions worldwide with practical applications of integrated thinking.",
    years: "1986-Present",
  },
  {
    name: "Wallace Hamilton",
    role: "Director of Digital Strategy",
    description:
      "Third-generation leader focused on bringing Neothink principles to new audiences through modern digital platforms and innovative content.",
    years: "2015-Present",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 pattern-dots" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

        <div className="section-container relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Established Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-gold/30 rounded-full bg-gold/5">
              <Award className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium tracking-wide text-gold">
                Established 1968
              </span>
            </div>

            <h1 className="text-balance mb-6">
              Advancing Human Potential{" "}
              <span className="text-gold">Through Integrated Thinking</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              For over 50 years, Neothink Institute has pioneered transformative insights
              in self-leadership, value creation, and integrated honesty. Discover the
              principles that have guided three generations of breakthrough thinking.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-premium-gold">
                <Link href="/about">
                  Discover Our Philosophy
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-pearl/30 text-foreground hover:border-gold hover:text-gold"
              >
                <Link href="/blog">Explore Our Insights</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Bar */}
      <section className="py-12 md:py-16 bg-charcoal border-y border-border/20">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="authority-stat">
                <div className="authority-stat-number">{stat.value}</div>
                <div className="authority-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Introduction */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-4">The Neothink Philosophy</h2>
            <div className="divider-gold mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Neothink represents a comprehensive approach to human excellence—integrating
              clear thinking, ethical action, and value creation into a unified framework
              for personal and professional achievement.
            </p>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Three Pillars of Excellence</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The foundational principles that guide Neothink philosophy and practice.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="premium-card group"
              >
                <div
                  className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 ${
                    pillar.color === "gold"
                      ? "bg-gold/10 text-gold"
                      : "bg-teal/10 text-teal"
                  }`}
                >
                  <pillar.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl md:text-2xl mb-4 group-hover:text-gold transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="section-padding">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <h2 className="mb-2">Featured Insights</h2>
              <p className="text-muted-foreground">
                Explore our latest thinking on human potential and integrated thinking.
              </p>
            </div>
            <Button asChild variant="ghost" className="mt-4 md:mt-0 text-gold hover:text-gold-light">
              <Link href="/blog">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <Link
                key={index}
                href={`/blog/${article.slug}`}
                className="group blog-card p-0 overflow-hidden"
              >
                {/* Placeholder Image */}
                <div className="aspect-video bg-gradient-to-br from-charcoal to-slate relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-gold/30" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium uppercase tracking-widest text-gold">
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {article.readTime}
                    </span>
                  </div>
                  <h4 className="text-lg font-display font-semibold mb-2 group-hover:text-gold transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="section-padding bg-charcoal">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-ivory mb-4">Three Generations of Leadership</h2>
            <div className="divider-gold mb-6" />
            <p className="text-pearl/70 leading-relaxed">
              Neothink Institute represents over 50 years of continuous research and
              development, spanning three generations of dedicated thinkers and authors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <div
                key={index}
                className="text-center p-8 border border-stone/30 rounded-lg bg-ink/50"
              >
                {/* Avatar Placeholder */}
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center border border-gold/30">
                  <span className="text-3xl font-display font-bold text-gold">
                    {founder.name.charAt(0)}
                  </span>
                </div>
                <h4 className="text-xl font-display font-semibold text-ivory mb-1">
                  {founder.name}
                </h4>
                <p className="text-sm text-gold mb-2">{founder.role}</p>
                <p className="text-xs text-silver mb-4">{founder.years}</p>
                <p className="text-sm text-pearl/70 leading-relaxed">
                  {founder.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 mx-auto mb-8 rounded-full bg-teal/10 flex items-center justify-center">
              <Globe className="w-8 h-8 text-teal" />
            </div>
            <h2 className="mb-4">A Global Community</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Neothink principles have reached millions across 140+ countries, creating a
              worldwide community of individuals committed to personal excellence and
              value creation. Our insights transcend cultural boundaries because they
              address fundamental aspects of human nature and potential.
            </p>
            <Button asChild variant="outline" className="border-teal text-teal hover:bg-teal hover:text-white">
              <Link href="/about">
                Learn Our Story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-charcoal via-ink to-charcoal border-t border-border/20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-ivory mb-4">Begin Your Journey</h2>
            <p className="text-pearl/70 text-lg mb-8 leading-relaxed">
              Whether you&apos;re seeking personal growth, professional excellence, or a
              deeper understanding of human potential, Neothink Institute offers the
              insights and frameworks to guide your transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-premium-gold">
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-pearl/30 text-ivory hover:border-gold hover:text-gold"
              >
                <Link href="/blog">Read Our Blog</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
