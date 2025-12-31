"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, MapPin, Clock, ChevronDown, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

// FAQ data
const faqs = [
  {
    question: "What is Neothink Institute?",
    answer:
      "Neothink Institute is a research and educational organization dedicated to advancing human potential through integrated thinking, self-leadership, and value creation. Founded in 1968, we've spent over 50 years developing transformative insights that help individuals achieve personal and professional excellence.",
  },
  {
    question: "How can I learn more about Neothink philosophy?",
    answer:
      "The best way to start is by exploring our blog, which features articles on core Neothink concepts. For deeper study, we offer various educational resources and published works that provide comprehensive coverage of our philosophy and practical applications.",
  },
  {
    question: "Is Neothink Institute affiliated with any political or religious organization?",
    answer:
      "No. Neothink Institute is an independent educational and research organization. Our focus is on developing and sharing knowledge about human potential, integrated thinking, and value creation. We welcome individuals of all backgrounds who are interested in personal growth and excellence.",
  },
  {
    question: "How can I get involved with Neothink Institute?",
    answer:
      "There are several ways to get involved: subscribe to our newsletter for regular insights, engage with our blog content, follow us on social media, or reach out directly through this contact form. We welcome inquiries from those interested in learning more about our work.",
  },
  {
    question: "Do you offer in-person events or workshops?",
    answer:
      "We periodically host events and workshops. The best way to stay informed about upcoming opportunities is to subscribe to our newsletter or follow us on social media. You can also contact us directly to inquire about future events.",
  },
  {
    question: "How long does it typically take to receive a response?",
    answer:
      "We strive to respond to all inquiries within 2-3 business days. For urgent matters, please indicate this in your message, and we'll do our best to prioritize your request.",
  },
];

// Contact methods
const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "Our primary communication channel",
    value: "contact@neothinkinstitute.com",
    href: "mailto:contact@neothinkinstitute.com",
  },
  {
    icon: MapPin,
    title: "Location",
    description: "Serving a global community",
    value: "Worldwide",
    href: null,
  },
  {
    icon: Clock,
    title: "Response Time",
    description: "We aim to reply within",
    value: "2-3 Business Days",
    href: null,
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formState);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-charcoal to-background">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-gold/30 rounded-full bg-gold/5">
              <MessageSquare className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium tracking-wide text-gold">
                Get in Touch
              </span>
            </div>

            <h1 className="text-ivory mb-4">Contact Us</h1>
            <p className="text-lg text-pearl/80 leading-relaxed">
              Have questions about Neothink philosophy or our work? We&apos;d love to
              hear from you. Reach out and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-container -mt-8 mb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="premium-card text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                <method.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-1">
                {method.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                {method.description}
              </p>
              {method.href ? (
                <a
                  href={method.href}
                  className="text-gold hover:text-gold-light transition-colors font-medium"
                >
                  {method.value}
                </a>
              ) : (
                <span className="text-foreground font-medium">{method.value}</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form & FAQ */}
      <section className="section-container pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="mb-6">Send a Message</h2>
            <p className="text-muted-foreground mb-8">
              Fill out the form below and we&apos;ll get back to you as soon as
              possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-input"
                    placeholder="Your name"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-input"
                    placeholder="your@email.com"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="form-input"
                  placeholder="How can we help?"
                  value={formState.subject}
                  onChange={(e) =>
                    setFormState({ ...formState, subject: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="form-input resize-none"
                  placeholder="Your message..."
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  required
                />
              </div>

              <Button type="submit" className="btn-premium-gold w-full sm:w-auto">
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* FAQ Section */}
          <div>
            <h2 className="mb-6">Frequently Asked Questions</h2>
            <p className="text-muted-foreground mb-8">
              Find answers to common questions about Neothink Institute.
            </p>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-border rounded-lg overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="font-display font-semibold pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gold shrink-0 transition-transform duration-200 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-charcoal border-t border-border/20">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-display font-semibold text-ivory mb-4">
              Prefer to Explore First?
            </h3>
            <p className="text-pearl/70 mb-8">
              Browse our blog to learn more about Neothink philosophy and our
              approach to human potential.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-gold text-gold hover:bg-gold hover:text-white"
            >
              <Link href="/blog">Explore Our Blog</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
