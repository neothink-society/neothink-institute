import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Award, Target, Users, Lightbulb, History } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Neothink Institute's 50+ year history of advancing human potential through integrated thinking, self-leadership, and value creation across three generations.",
  openGraph: {
    title: "About Neothink Institute",
    description:
      "Discover our mission, philosophy, and the three generations of leadership that have shaped Neothink Institute since 1968.",
  },
};

// Timeline milestones
const timeline = [
  {
    year: "1968",
    title: "Foundation",
    description:
      "Dr. Frank R. Wallace, a senior research chemist at DuPont, begins developing the foundational concepts of Neo-Tech—integrated thinking applied to human potential.",
  },
  {
    year: "1976",
    title: "First Publications",
    description:
      "Initial research findings are compiled and shared with a small network of colleagues, marking the first formal documentation of Neo-Tech principles.",
  },
  {
    year: "1986",
    title: "New Leadership",
    description:
      "Mark Hamilton joins the work, bringing fresh perspectives and beginning the process of expanding Neo-Tech concepts into broader applications.",
  },
  {
    year: "1994",
    title: "Global Expansion",
    description:
      "Neothink materials are translated into multiple languages, reaching audiences across Europe, Asia, and Latin America for the first time.",
  },
  {
    year: "2006",
    title: "Legacy Continues",
    description:
      "Following Dr. Wallace's passing, Mark Hamilton assumes full leadership, ensuring the continuation and evolution of the Neothink philosophy.",
  },
  {
    year: "2015",
    title: "Third Generation",
    description:
      "Wallace Hamilton joins the leadership team, bringing digital expertise and a vision for reaching new audiences through modern platforms.",
  },
  {
    year: "2024",
    title: "Digital Transformation",
    description:
      "Neothink Institute launches comprehensive digital initiatives to make its insights more accessible to a global audience.",
  },
];

// Core values
const values = [
  {
    icon: Lightbulb,
    title: "Integrated Honesty",
    description:
      "We believe that alignment between perception and reality is the foundation of all meaningful progress. Honesty isn't just a moral principle—it's a practical tool for clear thinking.",
  },
  {
    icon: Target,
    title: "Value Creation",
    description:
      "True success comes from creating value for others. We teach principles that enable individuals to contribute meaningfully while achieving personal prosperity.",
  },
  {
    icon: Users,
    title: "Self-Leadership",
    description:
      "Each person has the capacity to direct their own life. We provide frameworks for developing the self-governance skills needed for genuine independence.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "Growth requires ongoing intellectual development. We encourage lifelong learning and the continuous refinement of one's understanding.",
  },
];

// Team members
const team = [
  {
    name: "Dr. Frank R. Wallace",
    role: "Founder (1932-2006)",
    bio: "Dr. Frank R. Wallace was a senior research chemist at DuPont before dedicating his life to understanding human potential. His scientific background brought rigor to the development of Neo-Tech principles, creating a framework for integrated thinking that has influenced millions.",
    contributions: [
      "Developed the foundational Neo-Tech framework",
      "Authored seminal works on integrated honesty",
      "Established the research methodology still used today",
    ],
  },
  {
    name: "Mark Hamilton",
    role: "Principal Author & Director",
    bio: "Mark Hamilton has expanded the Neothink philosophy through over 30 published works, translating complex concepts into practical applications. His prolific writing has made Neothink principles accessible to readers across 140+ countries.",
    contributions: [
      "Authored 30+ books on Neothink philosophy",
      "Expanded global reach to 140+ countries",
      "Developed practical application frameworks",
    ],
  },
  {
    name: "Wallace Hamilton",
    role: "Director of Digital Strategy",
    bio: "Wallace Hamilton represents the third generation of Neothink leadership. His focus on digital innovation has modernized how the Institute connects with new audiences, ensuring these timeless principles remain relevant in the digital age.",
    contributions: [
      "Led digital transformation initiatives",
      "Developed modern content strategies",
      "Expanded social media presence",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-charcoal to-background">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-gold/30 rounded-full bg-gold/5">
              <History className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium tracking-wide text-gold">
                Our Story
              </span>
            </div>

            <h1 className="text-ivory mb-6">
              50+ Years of Advancing{" "}
              <span className="text-gold">Human Potential</span>
            </h1>

            <p className="text-xl text-pearl/80 leading-relaxed max-w-3xl mx-auto">
              Since 1968, Neothink Institute has pioneered research and education in
              integrated thinking, self-leadership, and value creation. Our work spans
              three generations and reaches millions worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="philosophy" className="section-padding">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="mb-6">Our Mission</h2>
              <div className="divider-gold mb-8 mx-0" />
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Neothink Institute exists to advance human potential by providing
                transformative insights and practical frameworks for personal excellence.
                We believe every individual has the capacity for greatness when equipped
                with the right principles and understanding.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our approach integrates rigorous intellectual honesty, productive
                value creation, and principled self-leadership into a unified philosophy
                that has guided millions toward more fulfilling and successful lives.
              </p>
              <Button asChild className="btn-premium-gold">
                <Link href="/contact">
                  Connect With Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Stats Card */}
            <div className="bg-charcoal border border-border/20 rounded-2xl p-8 md:p-12">
              <h3 className="text-ivory text-xl mb-8">By the Numbers</h3>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <span className="block text-4xl md:text-5xl font-display font-bold text-gold">
                    50+
                  </span>
                  <span className="text-sm text-silver uppercase tracking-widest">
                    Years of Research
                  </span>
                </div>
                <div>
                  <span className="block text-4xl md:text-5xl font-display font-bold text-gold">
                    30+
                  </span>
                  <span className="text-sm text-silver uppercase tracking-widest">
                    Published Works
                  </span>
                </div>
                <div>
                  <span className="block text-4xl md:text-5xl font-display font-bold text-gold">
                    140+
                  </span>
                  <span className="text-sm text-silver uppercase tracking-widest">
                    Countries Reached
                  </span>
                </div>
                <div>
                  <span className="block text-4xl md:text-5xl font-display font-bold text-gold">
                    3
                  </span>
                  <span className="text-sm text-silver uppercase tracking-widest">
                    Generations
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="section-padding bg-muted/30">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-4">Our Journey</h2>
            <div className="divider-gold mb-6" />
            <p className="text-muted-foreground">
              Key milestones in over five decades of advancing human potential.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item pb-12">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <span className="text-3xl font-display font-bold text-gold shrink-0 md:w-24">
                    {item.year}
                  </span>
                  <div>
                    <h4 className="text-xl font-display font-semibold mb-2">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-4">Our Core Values</h2>
            <div className="divider-gold mb-6" />
            <p className="text-muted-foreground">
              The principles that guide everything we do at Neothink Institute.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="premium-card">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section-padding bg-charcoal">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-ivory mb-4">Three Generations of Leadership</h2>
            <div className="divider-gold mb-6" />
            <p className="text-pearl/70">
              The individuals who have shaped and continue to advance Neothink philosophy.
            </p>
          </div>

          <div className="space-y-12">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-ink/50 border border-stone/30 rounded-xl p-8 md:p-12"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Profile */}
                  <div className="text-center lg:text-left">
                    <div className="w-32 h-32 mx-auto lg:mx-0 mb-6 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center border border-gold/30">
                      <span className="text-4xl font-display font-bold text-gold">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-2xl font-display font-semibold text-ivory mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gold">{member.role}</p>
                  </div>

                  {/* Bio */}
                  <div className="lg:col-span-2">
                    <p className="text-pearl/80 leading-relaxed mb-6">{member.bio}</p>
                    <h5 className="text-sm uppercase tracking-widest text-gold mb-4">
                      Key Contributions
                    </h5>
                    <ul className="space-y-2">
                      {member.contributions.map((contribution, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-pearl/70"
                        >
                          <Award className="w-4 h-4 text-gold mt-1 shrink-0" />
                          {contribution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4">Ready to Learn More?</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Explore our insights, connect with our team, or dive into five decades
              of transformative thinking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-premium-gold">
                <Link href="/blog">
                  Read Our Insights
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-foreground/30 hover:border-gold hover:text-gold"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
