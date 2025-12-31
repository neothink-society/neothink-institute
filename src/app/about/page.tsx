import type { Metadata } from "next";
import { Target, Eye, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Neothink Institute's mission to advance human potential through integrated thinking and self-leadership.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              About Neothink Institute
            </h1>
            <p className="text-xl text-muted-foreground">
              We are dedicated to advancing human potential through integrated
              thinking and self-leadership principles.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Target className="h-10 w-10 mb-4 text-primary" />
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To empower individuals with the knowledge and tools needed to
                  unlock their full potential and create meaningful positive
                  change in their lives and communities.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Eye className="h-10 w-10 mb-4 text-primary" />
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A world where integrated thinking and self-leadership are the
                  foundation of personal and collective progress, enabling
                  humanity to thrive.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Heart className="h-10 w-10 mb-4 text-primary" />
                <CardTitle>Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Integrity, continuous growth, honest self-reflection, and the
                  belief that every individual has untapped potential waiting to
                  be realized.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg dark:prose-invert mx-auto">
              <p className="text-muted-foreground mb-6">
                Neothink Institute was founded on the principle that human
                potential is far greater than most people realize. Through
                decades of research and practical application, we have developed
                approaches that help individuals break through limiting beliefs
                and achieve extraordinary results.
              </p>
              <p className="text-muted-foreground mb-6">
                Our methodology combines ancient wisdom with modern insights,
                creating a unique framework for personal and professional
                development. We believe that true transformation comes from
                within, and our role is to provide the catalyst for that
                transformation.
              </p>
              <p className="text-muted-foreground">
                Today, Neothink Institute continues to evolve and expand its
                reach, helping people around the world discover their true
                capabilities and live more fulfilling lives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
