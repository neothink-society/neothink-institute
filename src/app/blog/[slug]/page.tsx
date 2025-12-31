import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, User, BookOpen, Share2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Blog post data structure
interface BlogPost {
  title: string;
  description: string;
  date: string;
  author: string;
  authorRole: string;
  readTime: string;
  category: string;
  content: string;
  relatedSlugs: string[];
}

// Blog posts with SEO-optimized content
const posts: Record<string, BlogPost> = {
  "what-is-integrated-thinking": {
    title: "What Is Integrated Thinking?",
    description:
      "Discover the cognitive framework that has guided over 50 years of breakthrough discoveries in human potential. Integrated thinking connects disparate ideas into coherent understanding.",
    date: "2024-12-28",
    author: "Mark Hamilton",
    authorRole: "Principal Author & Director",
    readTime: "8 min read",
    category: "Philosophy",
    relatedSlugs: ["self-leadership-in-modern-world", "the-power-of-honest-thinking"],
    content: `
      <p class="lead">For over five decades, Neothink Institute has pioneered a distinctive approach to understanding reality and unlocking human potential. At the heart of this work lies integrated thinking—a cognitive framework that transforms how we perceive, analyze, and act upon the world around us.</p>

      <h2>The Origins of Integrated Thinking</h2>

      <p>Integrated thinking emerged from the groundbreaking research of Dr. Frank R. Wallace, who began his explorations in 1968 while working as a senior research chemist at DuPont. His scientific background—with its emphasis on rigorous methodology and empirical verification—provided the foundation for what would become a revolutionary approach to human cognition.</p>

      <p>Unlike traditional philosophical systems that often rely on abstract speculation, integrated thinking demands that every concept connect to observable reality. This creates a self-correcting framework where ideas are constantly tested against real-world outcomes.</p>

      <h2>Core Principles of Integrated Thinking</h2>

      <p>Integrated thinking rests on several foundational principles that distinguish it from conventional approaches to knowledge:</p>

      <h3>Reality-Based Perception</h3>
      <p>The first principle involves perceiving reality as it actually exists, not as we wish it to be or as authorities claim it to be. This requires stripping away the layers of assumption, tradition, and dogma that typically cloud human perception.</p>

      <h3>Contextual Integration</h3>
      <p>Every piece of knowledge exists within a larger context. Integrated thinking demands that we understand how individual facts and concepts relate to broader patterns and principles. This prevents the fragmented, compartmentalized thinking that leads to contradictions and errors.</p>

      <h3>Non-Contradiction</h3>
      <p>A central tenet holds that reality cannot contradict itself. When we encounter apparent contradictions, they signal errors in our thinking that must be identified and corrected. This principle provides a powerful tool for self-correction and continuous improvement.</p>

      <h3>Value-Oriented Action</h3>
      <p>Integrated thinking is not merely theoretical—it orients toward practical action that creates genuine value. Every insight should ultimately connect to improved outcomes in the real world.</p>

      <h2>The Integration Process</h2>

      <p>Practicing integrated thinking involves a specific mental discipline:</p>

      <ol>
        <li><strong>Observation:</strong> Begin with careful observation of reality, setting aside preconceptions and assumptions.</li>
        <li><strong>Identification:</strong> Identify the essential characteristics of what you observe, distinguishing the fundamental from the superficial.</li>
        <li><strong>Connection:</strong> Connect your observations to existing knowledge, looking for patterns and principles.</li>
        <li><strong>Verification:</strong> Test your conclusions against reality, remaining open to correction.</li>
        <li><strong>Application:</strong> Apply your understanding to create tangible value in your life and work.</li>
      </ol>

      <h2>Integrated Thinking in Practice</h2>

      <p>The practical applications of integrated thinking span every domain of human activity. In business, it enables the identification of genuine value-creation opportunities while avoiding the traps of wishful thinking. In personal relationships, it fosters honest communication and authentic connection. In self-development, it provides a reliable compass for growth.</p>

      <p>Those who master integrated thinking often report a distinctive clarity—a sense of seeing through confusion to underlying reality. This clarity translates into more effective decision-making, more productive work, and more fulfilling relationships.</p>

      <h2>Beginning Your Journey</h2>

      <p>Developing integrated thinking is a gradual process that requires sustained effort and practice. Begin by questioning your assumptions, especially those you've never examined. Seek out perspectives that challenge your existing beliefs. Most importantly, commit to aligning your thinking with reality, regardless of where that alignment leads.</p>

      <p>The journey toward integrated thinking is ultimately a journey toward intellectual freedom—the freedom that comes from understanding reality clearly and acting upon that understanding with confidence.</p>
    `,
  },
  "self-leadership-in-modern-world": {
    title: "Self-Leadership in the Modern World",
    description:
      "How ancient wisdom and modern insights combine to create a practical framework for personal excellence in today's complex environment.",
    date: "2024-12-20",
    author: "Wallace Hamilton",
    authorRole: "Director of Digital Strategy",
    readTime: "6 min read",
    category: "Self-Development",
    relatedSlugs: ["what-is-integrated-thinking", "building-productive-habits"],
    content: `
      <p class="lead">In an age of constant distraction, information overload, and external pressures, the ability to lead yourself has become more valuable than ever. Self-leadership—the practice of intentionally directing your own thoughts, emotions, and actions—stands as the foundation of all meaningful achievement.</p>

      <h2>Why Self-Leadership Matters Now</h2>

      <p>Modern life presents unprecedented challenges to personal autonomy. Social media algorithms optimize for engagement over enlightenment. Attention has become a scarce resource fought over by countless interests. In this environment, those who cannot lead themselves inevitably find themselves led by others—often toward ends that don't serve their genuine interests.</p>

      <p>Self-leadership offers an alternative: the ability to maintain your own direction, pursue your own values, and create your own meaning regardless of external pressures.</p>

      <h2>The Three Pillars of Self-Leadership</h2>

      <h3>Self-Awareness</h3>
      <p>Effective self-leadership begins with self-awareness—the ability to observe your own thoughts, emotions, and behaviors with clarity and honesty. This isn't passive introspection but active investigation. What drives your actions? What fears hold you back? What values truly matter to you?</p>

      <p>Developing self-awareness requires regular practice. Daily reflection, journaling, and honest self-assessment all contribute to a clearer picture of who you are and what you want.</p>

      <h3>Self-Direction</h3>
      <p>Once you understand yourself, you can begin directing yourself intentionally. This involves setting meaningful goals that align with your values, making decisions that serve your long-term interests, and maintaining focus on what truly matters.</p>

      <p>Self-direction isn't about rigid control—it's about conscious choice. You choose your priorities, your responses, and your path forward.</p>

      <h3>Self-Discipline</h3>
      <p>The bridge between intention and achievement is discipline. Self-discipline means doing what needs to be done whether you feel like it or not. It means honoring your commitments to yourself with the same seriousness you would honor commitments to others.</p>

      <p>Contrary to popular belief, discipline isn't about willpower or forcing yourself through resistance. Sustainable discipline comes from aligning your actions with your deepest values, making the right choice feel natural rather than difficult.</p>

      <h2>Practical Self-Leadership Strategies</h2>

      <h3>Design Your Environment</h3>
      <p>Your environment shapes your behavior more than you realize. Design it intentionally. Remove distractions. Create systems that make good choices easy and poor choices difficult. Structure your space to support your goals.</p>

      <h3>Establish Rituals</h3>
      <p>Rituals—repeated practices performed at regular intervals—provide structure that supports self-leadership. Morning routines that prepare you for the day. Evening reviews that capture lessons learned. Weekly planning sessions that maintain strategic focus.</p>

      <h3>Guard Your Attention</h3>
      <p>In the attention economy, your attention is your most valuable asset. Guard it fiercely. Be selective about what you allow into your mind. Practice focused work. Limit exposure to content that drains without adding value.</p>

      <h3>Build Accountability</h3>
      <p>While self-leadership emphasizes personal responsibility, external accountability can strengthen it. Find people who share your commitment to excellence. Create structures that make your commitments visible and measurable.</p>

      <h2>The Self-Leadership Mindset</h2>

      <p>Beyond techniques and strategies, self-leadership requires a particular mindset—one that embraces full responsibility for your life while recognizing that control is always partial. This mindset sees challenges as opportunities for growth, failures as feedback for improvement, and success as the natural result of sustained right action.</p>

      <p>Self-leadership doesn't mean you never struggle or fail. It means you maintain your own direction through struggle and failure, learning and adapting as you go.</p>

      <h2>Starting Today</h2>

      <p>You don't need to transform overnight. Self-leadership develops through small, consistent actions. Start with one area of your life where you want to take greater control. Implement one new practice. Build from there.</p>

      <p>The goal isn't perfection but progress—steady movement toward becoming the person you're capable of being.</p>
    `,
  },
  "value-creation-principles": {
    title: "The Principles of Value Creation",
    description:
      "Understanding the fundamental dynamics that drive meaningful achievement and lasting prosperity. Learn how value creation benefits everyone involved.",
    date: "2024-12-15",
    author: "Mark Hamilton",
    authorRole: "Principal Author & Director",
    readTime: "7 min read",
    category: "Business",
    relatedSlugs: ["what-is-integrated-thinking", "building-productive-habits"],
    content: `
      <p class="lead">At the heart of all genuine prosperity lies value creation—the process of producing something that others want and need. Understanding the principles that govern value creation opens the door to both personal achievement and meaningful contribution to others.</p>

      <h2>What Is Value?</h2>

      <p>Value is not an abstract concept but a concrete reality. Something has value when it satisfies a human want or need. The more effectively it satisfies that want—and the more people who share that want—the greater its value.</p>

      <p>This definition has important implications. Value isn't determined by effort or intention alone. A product or service has value only to the extent that others find it useful. This keeps value creation oriented toward genuine benefit rather than mere activity.</p>

      <h2>The Value Creation Process</h2>

      <h3>Identification</h3>
      <p>Value creation begins with identifying opportunities—gaps between what people want and what currently exists. This requires careful observation of the world, empathy for others' needs, and imagination about what might be possible.</p>

      <p>The best opportunities often lie in areas where existing solutions are inadequate, where needs are unmet, or where new possibilities have emerged through technological or social change.</p>

      <h3>Development</h3>
      <p>Once an opportunity is identified, value creation requires development—the hard work of turning possibility into reality. This involves acquiring necessary skills, building systems and processes, and iterating toward solutions that truly serve the identified need.</p>

      <h3>Delivery</h3>
      <p>Value is realized only when it reaches those who need it. Delivery encompasses everything from production to distribution to communication. The most valuable product means nothing if it never reaches those it could benefit.</p>

      <h3>Exchange</h3>
      <p>In a healthy economy, value is exchanged rather than given away. This exchange—typically through money but sometimes through other forms of trade—provides feedback about value and resources for continued creation.</p>

      <h2>The Win-Win Nature of Value Creation</h2>

      <p>Genuine value creation is inherently positive-sum. When you create value for others, you benefit through exchange while they benefit through the value received. Both parties are better off than they were before.</p>

      <p>This distinguishes value creation from zero-sum activities where one party's gain comes at another's expense. The prosperity generated through value creation grows the total pie rather than merely redistributing existing resources.</p>

      <h2>Principles for Effective Value Creation</h2>

      <h3>Focus on Others' Needs</h3>
      <p>The most effective value creators maintain an outward focus. They're constantly asking what others need, what problems remain unsolved, what improvements would make the biggest difference. This orientation ensures their efforts remain genuinely useful.</p>

      <h3>Build Genuine Competence</h3>
      <p>Value creation requires competence—the ability to actually deliver what you promise. This demands ongoing learning, skill development, and honest assessment of your capabilities and limitations.</p>

      <h3>Think Long-Term</h3>
      <p>Sustainable value creation takes a long-term perspective. Short-term gains that damage trust or deplete resources undermine future value creation. The most successful value creators build for durability.</p>

      <h3>Embrace Competition</h3>
      <p>Competition drives improvement. Rather than fearing competitors, effective value creators welcome them as sources of information and motivation to improve. The goal isn't to eliminate competition but to create superior value.</p>

      <h2>Value Creation and Personal Fulfillment</h2>

      <p>Beyond material rewards, value creation provides profound personal satisfaction. There's deep meaning in knowing that your work genuinely helps others, that your contributions make the world better in some way. This meaning sustains effort through difficulties and gives purpose to daily work.</p>

      <p>Many who master value creation report that the process itself becomes rewarding—that the joy of solving problems and serving needs rivals or exceeds the joy of the rewards received.</p>

      <h2>Beginning Your Value Creation Journey</h2>

      <p>Start by asking what value you can create today, in your current circumstances. Look for problems you can solve, needs you can meet, improvements you can make. Don't wait for perfect conditions—begin creating value now and let your capabilities grow through practice.</p>
    `,
  },
  "breaking-through-mental-barriers": {
    title: "Breaking Through Mental Barriers",
    description:
      "Identifying and overcoming the psychological obstacles that prevent us from reaching our full potential. A practical guide to mental clarity.",
    date: "2024-12-10",
    author: "Mark Hamilton",
    authorRole: "Principal Author & Director",
    readTime: "9 min read",
    category: "Psychology",
    relatedSlugs: ["the-power-of-honest-thinking", "self-leadership-in-modern-world"],
    content: `
      <p class="lead">Every person carries mental barriers—invisible walls that limit what we believe possible and constrain our actions. These barriers often form early in life and operate below conscious awareness, silently shaping what we attempt and what we avoid. Breaking through them is essential for accessing our full potential.</p>

      <h2>Understanding Mental Barriers</h2>

      <p>Mental barriers are psychological constructs that limit our perception of what's possible. Unlike external obstacles, which exist in the world, mental barriers exist only in our minds—yet they can be just as constraining as physical walls.</p>

      <p>These barriers typically form through experience. A child criticized for creative ideas may develop a barrier against self-expression. A person who fails publicly may build barriers against taking visible risks. Over time, these barriers become invisible, feeling less like limitations and more like unchangeable facts about reality.</p>

      <h2>Common Types of Mental Barriers</h2>

      <h3>Limiting Beliefs</h3>
      <p>Limiting beliefs are assumptions about ourselves and the world that constrain our actions. "I'm not creative." "People like me don't succeed." "It's too late to change." These beliefs feel true but are often merely familiar—stories we've told ourselves so many times they seem like facts.</p>

      <h3>Fear of Failure</h3>
      <p>The fear of failure prevents many from attempting anything uncertain. Yet failure is essential to growth. Every master was once a disaster. Every success story includes chapters of struggle and setback. Fear of failure is really fear of the process by which success is achieved.</p>

      <h3>Fear of Success</h3>
      <p>Paradoxically, some fear success as much as failure. Success brings visibility, responsibility, and change. For those comfortable with their current identity, success can feel threatening—even as they consciously desire it.</p>

      <h3>Comfort Zone Attachment</h3>
      <p>The familiar feels safe, even when it's unsatisfying. Our comfort zones expand only when we venture beyond them, yet the pull toward the known remains powerful. Many live entire lives within boundaries set by early experience, never discovering what lies beyond.</p>

      <h2>The Breakthrough Process</h2>

      <h3>Awareness</h3>
      <p>Breaking through barriers begins with seeing them clearly. This requires honest self-examination: Where do you hold back? What do you avoid? What have you decided is impossible without actually testing it? The barriers you can name you can address.</p>

      <h3>Understanding</h3>
      <p>Once identified, barriers benefit from understanding. Where did this barrier come from? What purpose did it once serve? Understanding doesn't change the past, but it can loosen the barrier's grip on the present.</p>

      <h3>Challenging</h3>
      <p>Barriers persist because they go unchallenged. Challenge yours by questioning their validity. Is this belief actually true? What evidence exists against it? What would someone without this barrier do in my situation?</p>

      <h3>Action</h3>
      <p>Understanding alone doesn't break barriers—action does. Take concrete steps that contradict your limiting beliefs. Start small if necessary, but start. Each action that defies your barriers weakens them.</p>

      <h3>Reinforcement</h3>
      <p>New patterns require reinforcement. Celebrate breakthroughs, even small ones. Build on successes. Create environments that support your expanded possibilities.</p>

      <h2>The Compound Effect</h2>

      <p>Breaking through one barrier often enables breakthroughs in others. Barriers reinforce each other, and so do freedoms. Someone who overcomes a fear of public speaking may find themselves more confident in all social situations. Someone who challenges one limiting belief becomes better at challenging others.</p>

      <p>This compound effect means that persistent work on mental barriers can transform your entire experience of life, opening possibilities you never knew existed.</p>

      <h2>Living Without Barriers</h2>

      <p>A life free of mental barriers is not a life without challenges or difficulties. It's a life where the obstacles you face are real rather than imagined, external rather than internal. It's a life where you respond to what actually is rather than to fears of what might be.</p>

      <p>This is the freedom integrated thinking points toward: clarity about reality, including the reality of your own mind, and the power that comes from acting on that clarity.</p>
    `,
  },
  "the-power-of-honest-thinking": {
    title: "The Power of Honest Thinking",
    description:
      "Why intellectual honesty is the foundation of all meaningful progress, and how to cultivate this essential quality in your own life.",
    date: "2024-12-05",
    author: "Wallace Hamilton",
    authorRole: "Director of Digital Strategy",
    readTime: "5 min read",
    category: "Philosophy",
    relatedSlugs: ["what-is-integrated-thinking", "breaking-through-mental-barriers"],
    content: `
      <p class="lead">Of all the qualities that contribute to a successful life, intellectual honesty may be the most fundamental. It is the commitment to seeing and acknowledging reality as it actually is—not as we wish it were, not as others tell us it should be, but as it actually is.</p>

      <h2>What Is Honest Thinking?</h2>

      <p>Honest thinking goes beyond simply not lying to others. It means not lying to yourself. It means acknowledging uncomfortable truths rather than ignoring them. It means updating your beliefs when evidence contradicts them. It means admitting when you don't know something rather than pretending certainty.</p>

      <p>This kind of honesty is more difficult than it might seem. Our minds are built with numerous mechanisms for self-deception—ways of protecting our egos, our identities, our comfortable assumptions from the disruption of new information. Honest thinking requires actively working against these tendencies.</p>

      <h2>Why Honest Thinking Matters</h2>

      <h3>Effective Action</h3>
      <p>You can only act effectively on reality as it is, not as you imagine it to be. Every self-deception distorts your map of reality and leads to actions that don't produce intended results. Honest thinking keeps your map accurate.</p>

      <h3>Genuine Learning</h3>
      <p>Learning requires acknowledging what you don't know and where you've been wrong. Self-deception blocks this acknowledgment and therefore blocks learning. The most honest thinkers are often the fastest learners.</p>

      <h3>Authentic Relationships</h3>
      <p>Self-deception corrupts relationships. When you're not honest with yourself, you can't be fully honest with others. Honest thinking enables the authentic connection that meaningful relationships require.</p>

      <h3>Inner Peace</h3>
      <p>Maintaining self-deceptions requires constant mental effort. Every lie to yourself must be defended against contradicting evidence. Honest thinking eliminates this burden, enabling a clarity and peace that self-deception makes impossible.</p>

      <h2>Cultivating Honest Thinking</h2>

      <h3>Question Your Assumptions</h3>
      <p>Make it a practice to identify and examine your assumptions. What do you believe without evidence? What do you assume because everyone around you assumes it? What do you believe because believing otherwise would be uncomfortable?</p>

      <h3>Seek Disconfirming Evidence</h3>
      <p>We naturally seek evidence that confirms what we already believe. Counter this tendency by actively looking for evidence that might prove you wrong. When you find it, take it seriously.</p>

      <h3>Embrace Uncertainty</h3>
      <p>Honest thinking often means acknowledging that you don't know. This feels uncomfortable in a world that rewards confidence, but false certainty is more dangerous than honest uncertainty.</p>

      <h3>Consider the Source of Your Beliefs</h3>
      <p>For every belief you hold, ask where it came from. Did you arrive at it through careful reasoning? Did you absorb it from your environment? Did you accept it to avoid conflict or gain approval? The source of a belief says nothing about its truth.</p>

      <h3>Watch for Emotional Resistance</h3>
      <p>Strong emotional resistance to an idea often signals an opportunity for growth. The ideas that trigger us most are often the ones that challenge our self-deceptions most directly.</p>

      <h2>The Freedom of Honesty</h2>

      <p>Honest thinking might seem constraining—after all, it limits you to reality. But the opposite is true. Self-deception constrains by keeping you trapped in illusions that don't serve you. Honest thinking liberates by enabling you to see clearly and act effectively.</p>

      <p>This is the power at the heart of Neothink philosophy: the power that comes from aligning your mind with reality, from seeing clearly what is rather than being trapped by what isn't.</p>
    `,
  },
  "building-productive-habits": {
    title: "Building Productive Habits",
    description:
      "Practical strategies for developing habits that support your goals and align with your values. Transform your daily routines for lasting success.",
    date: "2024-11-30",
    author: "Mark Hamilton",
    authorRole: "Principal Author & Director",
    readTime: "7 min read",
    category: "Productivity",
    relatedSlugs: ["self-leadership-in-modern-world", "value-creation-principles"],
    content: `
      <p class="lead">Our lives are shaped by our habits. The small actions we repeat daily—often without conscious thought—compound over time into the circumstances we experience. Understanding how to build productive habits gives you power to shape your future deliberately.</p>

      <h2>The Nature of Habits</h2>

      <p>A habit is a behavior that has become automatic through repetition. When you first learned to drive, every action required conscious attention. Now you navigate complex traffic while your conscious mind wanders elsewhere. The actions have become habitual.</p>

      <p>This automaticity is both the power and the danger of habits. Good habits free your mental resources for higher-order thinking. Bad habits run on autopilot, draining your life even as you focus elsewhere.</p>

      <h2>The Habit Loop</h2>

      <p>Every habit follows a simple pattern: cue, routine, reward. A cue triggers the behavior. The routine is the behavior itself. The reward reinforces the pattern, making repetition more likely.</p>

      <p>Understanding this loop gives you leverage over your habits. You can modify cues to trigger desired behaviors. You can substitute healthier routines for destructive ones. You can ensure that positive behaviors are properly rewarded.</p>

      <h2>Building New Habits</h2>

      <h3>Start Small</h3>
      <p>The biggest mistake in habit formation is starting too big. Ambitious habits require willpower, and willpower is finite. Start with habits so small they require almost no effort. Want to exercise daily? Start with one push-up. Want to read more? Start with one page. Success builds on success.</p>

      <h3>Anchor to Existing Routines</h3>
      <p>New habits form more easily when attached to existing ones. After your morning coffee, do your one push-up. Before bed, read your one page. Using existing habits as cues leverages established neural pathways.</p>

      <h3>Design Your Environment</h3>
      <p>Make desired habits easy and undesired habits difficult. Want to eat healthier? Keep healthy food visible and accessible, junk food hidden or absent. Want to read more? Keep a book on your pillow. Environmental design works even when willpower fails.</p>

      <h3>Track Your Progress</h3>
      <p>What gets measured gets improved. Simple tracking—even just marking a calendar—provides feedback and motivation. The visual record of your consistency becomes rewarding in itself.</p>

      <h3>Plan for Obstacles</h3>
      <p>Every habit will face challenges. Plan for them in advance. What will you do when you're tired? When you're traveling? When circumstances disrupt your routine? Having plans ready prevents temporary obstacles from derailing permanent change.</p>

      <h2>Breaking Bad Habits</h2>

      <p>Breaking bad habits requires understanding the same loop: cue, routine, reward. The key insight is that you can't simply eliminate a habit—you must replace it.</p>

      <p>Identify the cue that triggers the unwanted behavior. Identify the reward you're actually seeking. Then find a new routine that responds to the same cue and delivers the same reward without the negative consequences.</p>

      <h2>The Compound Effect</h2>

      <p>Individual habits may seem insignificant. Reading one page, saving one dollar, doing one push-up—these tiny actions don't appear to matter. But their power lies in compounding.</p>

      <p>One page a day is 365 pages a year—several books. One push-up that grows to two, then five, then twenty builds into significant strength over months. Small consistent actions, maintained over time, produce extraordinary results.</p>

      <h2>Habits and Identity</h2>

      <p>The deepest habits connect to identity. When exercise becomes part of who you are—not just something you do—it requires no willpower. When you see yourself as a reader, a creator, a person who honors commitments, the behaviors that express that identity flow naturally.</p>

      <p>As you build habits, pay attention to the identity shifts they enable. Let your habits shape not just what you do but who you are.</p>

      <h2>Getting Started</h2>

      <p>Choose one small habit to build this week. Make it specific, make it tiny, and tie it to an existing routine. Track your progress. When it becomes automatic, add another. This patient, persistent approach to habit building will transform your life more surely than any dramatic resolution.</p>
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
    authors: [{ name: post.author }],
    openGraph: {
      title: `${post.title} | Neothink Institute`,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: [post.category, "Neothink", "Philosophy", "Self-Development"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Get related posts
  const relatedPosts = post.relatedSlugs
    .map((relatedSlug) => ({ slug: relatedSlug, ...posts[relatedSlug] }))
    .filter((p) => p.title);

  // Article schema for SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: post.authorRole,
      worksFor: {
        "@type": "Organization",
        name: "Neothink Institute",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "Neothink Institute",
      url: "https://neothinkinstitute.com",
      foundingDate: "1968",
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://neothinkinstitute.com/blog/${slug}`,
    },
    articleSection: post.category,
    keywords: ["Neothink", post.category, "Philosophy", "Self-Development", "Human Potential"],
  };

  return (
    <>
      {/* Schema.org Article markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-charcoal to-background">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            {/* Back link */}
            <Button
              variant="ghost"
              asChild
              className="mb-8 text-pearl/70 hover:text-gold"
            >
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Insights
              </Link>
            </Button>

            {/* Category & Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-3 py-1 text-xs font-medium uppercase tracking-widest text-gold bg-gold/10 rounded-full">
                {post.category}
              </span>
              <div className="flex items-center gap-2 text-sm text-silver">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-ivory leading-tight mb-6">
              {post.title}
            </h1>

            {/* Description */}
            <p className="text-xl text-pearl/80 leading-relaxed mb-8">
              {post.description}
            </p>

            {/* Author & Date */}
            <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-stone/30">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center border border-gold/30">
                  <span className="text-lg font-display font-bold text-gold">
                    {post.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-ivory">{post.author}</p>
                  <p className="text-sm text-silver">{post.authorRole}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-silver">
                <time dateTime={post.date}>{formattedDate}</time>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="section-container py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <div
            className="prose prose-lg prose-invert max-w-none
              prose-headings:font-display prose-headings:font-semibold prose-headings:text-ivory
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-pearl/80 prose-p:leading-relaxed
              prose-lead:text-xl prose-lead:text-pearl/90 prose-lead:leading-relaxed
              prose-strong:text-ivory prose-strong:font-semibold
              prose-ul:text-pearl/80 prose-ol:text-pearl/80
              prose-li:my-2
              prose-a:text-gold prose-a:no-underline hover:prose-a:text-gold-light"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* Share & Tags Section */}
      <section className="section-container pb-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 py-8 border-t border-b border-stone/30">
            <div className="flex items-center gap-3">
              <span className="text-sm text-silver">Share this article:</span>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="text-silver hover:text-gold">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-silver">Category:</span>
              <Link
                href="/blog"
                className="px-3 py-1 text-xs font-medium uppercase tracking-widest text-gold bg-gold/10 rounded-full hover:bg-gold/20 transition-colors"
              >
                {post.category}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Author Bio Section */}
      <section className="section-container pb-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-charcoal border border-stone/30 rounded-xl p-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-20 h-20 shrink-0 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center border border-gold/30">
                <span className="text-2xl font-display font-bold text-gold">
                  {post.author.charAt(0)}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-ivory mb-1">
                  {post.author}
                </h3>
                <p className="text-gold text-sm mb-4">{post.authorRole}</p>
                <p className="text-pearl/70 leading-relaxed">
                  {post.author === "Mark Hamilton"
                    ? "Mark Hamilton has expanded the Neothink philosophy through over 30 published works, reaching millions worldwide with practical applications of integrated thinking across 140+ countries."
                    : post.author === "Wallace Hamilton"
                    ? "Wallace Hamilton represents the third generation of Neothink leadership, focusing on digital innovation to bring these timeless principles to new audiences through modern platforms."
                    : "Contributing to Neothink Institute's mission of advancing human potential through integrated thinking."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-muted/30 border-t border-border/20">
          <div className="section-container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-display font-semibold text-center mb-12">
                Related Articles
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group blog-card p-0 overflow-hidden"
                  >
                    <div className="aspect-video bg-gradient-to-br from-charcoal to-slate relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <BookOpen className="w-10 h-10 text-gold/30" />
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-medium uppercase tracking-widest text-gold">
                          {relatedPost.category}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {relatedPost.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-display font-semibold mb-3 group-hover:text-gold transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {relatedPost.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-charcoal border-t border-border/20">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-display font-semibold text-ivory mb-4">
              Continue Your Journey
            </h3>
            <p className="text-pearl/70 mb-8">
              Explore more insights on integrated thinking, self-leadership, and value creation from over 50 years of pioneering research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-premium-gold">
                <Link href="/blog">
                  Browse All Articles
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-pearl/30 text-ivory hover:border-gold hover:text-gold"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
