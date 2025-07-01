import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { formatDistanceToNow } from 'date-fns';
import { Heart, MessageCircle, Bookmark, Share, MoreHorizontal, User } from 'lucide-react';

// Mock data - in a real app, this would come from a database
const mockArticles = [
  {
    id: 1,
    title: "The Future of Artificial Intelligence: Transforming Industries and Society",
    content: `
      <p>Artificial Intelligence has moved from the realm of science fiction to become one of the most transformative technologies of our time. As we stand at the threshold of a new era, it's crucial to understand how AI is reshaping industries and what this means for society as a whole.</p>

      <h2>The Current State of AI</h2>
      <p>Today's AI systems are more sophisticated than ever before. Machine learning algorithms can now process vast amounts of data, recognize patterns, and make decisions with remarkable accuracy. From recommendation systems on streaming platforms to autonomous vehicles navigating city streets, AI has become an integral part of our daily lives.</p>

      <h2>Industry Transformation</h2>
      <p>Healthcare is perhaps seeing the most dramatic transformation. AI-powered diagnostic tools can detect diseases earlier and more accurately than traditional methods. In radiology, AI systems can identify tumors in medical images with precision that often exceeds human capabilities.</p>

      <p>The financial sector has embraced AI for fraud detection, algorithmic trading, and personalized banking services. Investment firms use machine learning to analyze market trends and make split-second trading decisions that would be impossible for human traders.</p>

      <h2>Challenges and Considerations</h2>
      <p>However, this rapid advancement comes with significant challenges. Job displacement is a real concern as AI systems become capable of performing tasks traditionally done by humans. We must also grapple with issues of bias in AI systems, privacy concerns, and the need for transparency in algorithmic decision-making.</p>

      <blockquote>
        "The development of full artificial intelligence could spell the end of the human race. It would take off on its own, and re-design itself at an ever-increasing rate." - Stephen Hawking
      </blockquote>

      <h2>Looking Forward</h2>
      <p>As we move forward, it's essential to approach AI development with both optimism and caution. We need robust ethical frameworks, transparent development processes, and inclusive policies that ensure the benefits of AI are shared broadly across society.</p>

      <p>The future of AI is not predetermined. It will be shaped by the choices we make today about how we develop, deploy, and govern these powerful technologies. By fostering collaboration between technologists, policymakers, and society at large, we can work toward an AI-powered future that enhances human potential rather than replacing it.</p>
    `,
    excerpt: "Exploring how AI is revolutionizing everything from healthcare to transportation, and what it means for the future of work.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200",
    author: {
      name: "Sarah Chen",
      bio: "AI researcher and technology writer with over 10 years of experience in machine learning and data science.",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
      initials: "SC",
      followers: "12.4K",
      following: "324"
    },
    category: "Technology",
    tags: ["AI", "Machine Learning", "Technology", "Future"],
    readTime: "8 min read",
    publishedAt: new Date('2024-01-15'),
    likes: 847,
    comments: 123,
    bookmarked: false
  },
  {
    id: 2,
    title: "Sustainable Living: Small Changes, Big Impact",
    content: `
      <p>In an era of climate change and environmental degradation, the concept of sustainable living has never been more relevant. While the challenges facing our planet can seem overwhelming, the power of individual action should not be underestimated.</p>

      <h2>Understanding Sustainable Living</h2>
      <p>Sustainable living means adopting a lifestyle that attempts to reduce an individual's or society's use of Earth's natural resources. It's about making conscious choices that minimize our environmental footprint while maintaining a good quality of life.</p>

      <h2>Simple Changes, Significant Impact</h2>
      <p>The beauty of sustainable living lies in its accessibility. You don't need to completely overhaul your life overnight. Small, consistent changes can lead to significant environmental benefits over time.</p>

      <h3>Energy Conservation</h3>
      <p>Start with simple energy-saving measures: switch to LED bulbs, unplug electronics when not in use, and adjust your thermostat by just a few degrees. These small changes can reduce your energy consumption by 10-15%.</p>

      <h3>Mindful Consumption</h3>
      <p>Before making any purchase, ask yourself: "Do I really need this?" Choose quality over quantity, buy local when possible, and consider the lifecycle of products you bring into your home.</p>

      <blockquote>
        "We do not inherit the earth from our ancestors; we borrow it from our children." - Native American Proverb
      </blockquote>

      <h2>The Ripple Effect</h2>
      <p>When you adopt sustainable practices, you inspire others to do the same. Your choices influence your family, friends, and community, creating a ripple effect that extends far beyond your individual impact.</p>

      <p>Remember, sustainable living is a journey, not a destination. Every small step counts, and perfection isn't the goal – progress is.</p>
    `,
    excerpt: "Practical tips for reducing your environmental footprint without compromising your lifestyle.",
    image: "https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1200",
    author: {
      name: "Michael Torres",
      bio: "Environmental scientist and sustainability advocate with a passion for making eco-friendly living accessible to everyone.",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100",
      initials: "MT",
      followers: "8.7K",
      following: "156"
    },
    category: "Lifestyle",
    tags: ["Sustainability", "Environment", "Lifestyle", "Climate"],
    readTime: "6 min read",
    publishedAt: new Date('2024-01-12'),
    likes: 234,
    comments: 45,
    bookmarked: false
  },
  {
    id: 3,
    title: "The Art of Remote Work: Building Culture in a Digital World",
    content: `
      <p>The shift to remote work has fundamentally changed how we think about workplace culture, collaboration, and productivity. As organizations worldwide adapt to this new reality, the challenge isn't just maintaining productivity – it's building meaningful connections and a strong company culture in a distributed environment.</p>

      <h2>Redefining Workplace Culture</h2>
      <p>Traditional workplace culture was built around physical proximity – water cooler conversations, impromptu meetings, and shared experiences in a common space. Remote work requires us to be more intentional about creating these moments of connection.</p>

      <h2>The Pillars of Remote Culture</h2>
      
      <h3>Communication Excellence</h3>
      <p>In a remote environment, over-communication is better than under-communication. Successful remote teams establish clear communication protocols, use the right tools for different types of conversations, and create space for both formal and informal interactions.</p>

      <h3>Trust and Autonomy</h3>
      <p>Remote work is built on trust. Managers must shift from monitoring activity to measuring outcomes. This requires clear goal-setting, regular check-ins, and giving team members the autonomy to manage their own schedules and work styles.</p>

      <h3>Intentional Connection</h3>
      <p>Without the natural interactions of an office environment, remote teams must be deliberate about building relationships. This might include virtual coffee chats, online team-building activities, or dedicated time for non-work conversations during meetings.</p>

      <blockquote>
        "The future of work is not about where you work, but how you work together." - Brian Chesky, CEO of Airbnb
      </blockquote>

      <h2>Challenges and Solutions</h2>
      <p>Remote work isn't without its challenges. Isolation, communication barriers, and work-life balance issues are common. However, organizations that proactively address these challenges often find that remote work can lead to higher employee satisfaction and productivity.</p>

      <h2>The Future is Hybrid</h2>
      <p>As we look to the future, many organizations are adopting hybrid models that combine the best of remote and in-person work. This approach offers flexibility while maintaining opportunities for face-to-face collaboration and relationship building.</p>

      <p>The key to success in this new world of work is intentionality – being deliberate about how we communicate, collaborate, and connect with our colleagues, regardless of where we're physically located.</p>
    `,
    excerpt: "How successful companies are maintaining team cohesion and productivity in the remote work era.",
    image: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1200",
    author: {
      name: "Emily Rodriguez",
      bio: "Business strategist and remote work consultant helping organizations build thriving distributed teams.",
      avatar: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=100",
      initials: "ER",
      followers: "15.2K",
      following: "289"
    },
    category: "Business",
    tags: ["Remote Work", "Business", "Culture", "Productivity"],
    readTime: "12 min read",
    publishedAt: new Date('2024-01-10'),
    likes: 456,
    comments: 78,
    bookmarked: false
  },
  {
    id: 4,
    title: "Building Scalable Web Applications with Next.js",
    content: `
      <p>Next.js has revolutionized the way we build React applications, offering a powerful framework that combines the best of server-side rendering, static site generation, and client-side rendering. As applications grow in complexity and scale, choosing the right architecture and following best practices becomes crucial.</p>

      <h2>Why Next.js for Scale?</h2>
      <p>Next.js provides several features that make it ideal for building scalable applications: automatic code splitting, optimized performance, built-in SEO support, and flexible rendering options. These features help ensure your application can handle growth without sacrificing performance.</p>

      <h2>Architecture Patterns for Scale</h2>
      
      <h3>Component Organization</h3>
      <p>Organize your components in a logical hierarchy. Use a feature-based folder structure where related components, hooks, and utilities are grouped together. This makes your codebase more maintainable as it grows.</p>

      <h3>State Management</h3>
      <p>Choose your state management solution carefully. For smaller applications, React's built-in state might suffice. For larger applications, consider solutions like Zustand, Redux Toolkit, or React Query for server state management.</p>

      <h3>API Design</h3>
      <p>Design your API routes with scalability in mind. Use proper HTTP methods, implement pagination for large datasets, and consider implementing caching strategies to reduce server load.</p>

      <h2>Performance Optimization</h2>
      <p>Next.js provides many performance optimizations out of the box, but there are additional steps you can take:</p>

      <ul>
        <li>Implement proper image optimization using Next.js Image component</li>
        <li>Use dynamic imports for code splitting</li>
        <li>Implement proper caching strategies</li>
        <li>Optimize your bundle size by analyzing and removing unused code</li>
      </ul>

      <blockquote>
        "Premature optimization is the root of all evil, but when you do optimize, measure everything." - Donald Knuth (paraphrased)
      </blockquote>

      <h2>Deployment and Monitoring</h2>
      <p>Choose a deployment platform that can scale with your needs. Vercel (created by the Next.js team) offers seamless deployment and scaling, but other platforms like Netlify, AWS, or Google Cloud Platform are also excellent choices.</p>

      <p>Implement proper monitoring and analytics to understand how your application performs in production. Tools like Vercel Analytics, Google Analytics, or custom monitoring solutions can provide valuable insights.</p>

      <h2>Best Practices Summary</h2>
      <p>Building scalable applications is about making thoughtful decisions early and being prepared to refactor as you learn more about your users' needs. Focus on performance, maintainability, and user experience, and your Next.js application will be well-positioned to scale successfully.</p>
    `,
    excerpt: "A comprehensive guide to creating performant and scalable web applications using Next.js, covering best practices and optimization techniques.",
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1200",
    author: {
      name: "Alex Thompson",
      bio: "Full-stack developer and technical writer specializing in React, Next.js, and modern web development practices.",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100",
      initials: "AT",
      followers: "9.3K",
      following: "234"
    },
    category: "Development",
    tags: ["Next.js", "React", "Web Development", "Performance"],
    readTime: "10 min read",
    publishedAt: new Date('2024-01-14'),
    likes: 124,
    comments: 23,
    bookmarked: false
  },
  {
    id: 5,
    title: "The Psychology of User Experience Design",
    content: `
      <p>Great user experience design goes beyond aesthetics and functionality – it taps into fundamental principles of human psychology to create interfaces that feel intuitive, engaging, and satisfying to use. Understanding how users think, perceive, and behave is crucial for designing digital experiences that truly resonate.</p>

      <h2>Cognitive Load Theory</h2>
      <p>One of the most important concepts in UX psychology is cognitive load – the amount of mental effort required to use your interface. Users have limited cognitive resources, and interfaces that demand too much mental processing will frustrate and drive users away.</p>

      <h3>Reducing Cognitive Load</h3>
      <p>Simplify navigation, use familiar patterns, provide clear visual hierarchy, and minimize the number of choices users need to make at any given time. The goal is to make using your interface feel effortless.</p>

      <h2>The Psychology of Visual Perception</h2>
      <p>How users perceive and process visual information is rooted in psychology. Principles like the Gestalt laws of perception help us understand how users group and interpret visual elements.</p>

      <h3>Key Principles:</h3>
      <ul>
        <li><strong>Proximity:</strong> Elements close together are perceived as related</li>
        <li><strong>Similarity:</strong> Similar elements are grouped together mentally</li>
        <li><strong>Closure:</strong> Users fill in gaps to create complete shapes</li>
        <li><strong>Continuity:</strong> Eyes follow smooth paths and lines</li>
      </ul>

      <h2>Emotional Design</h2>
      <p>Emotions play a crucial role in user experience. Users don't just interact with interfaces rationally – they form emotional connections that influence their behavior and decision-making.</p>

      <blockquote>
        "Design is not just what it looks like and feels like. Design is how it works." - Steve Jobs
      </blockquote>

      <h2>The Power of Feedback</h2>
      <p>Immediate feedback is essential for good user experience. Users need to understand the result of their actions quickly and clearly. This includes visual feedback for interactions, progress indicators for loading states, and clear error messages when things go wrong.</p>

      <h2>Building Trust Through Design</h2>
      <p>Trust is a psychological factor that significantly impacts user behavior. Design elements that build trust include:</p>

      <ul>
        <li>Consistent and professional visual design</li>
        <li>Clear and honest communication</li>
        <li>Transparent pricing and policies</li>
        <li>Social proof and testimonials</li>
        <li>Secure and reliable functionality</li>
      </ul>

      <h2>The Future of Psychological Design</h2>
      <p>As our understanding of psychology and neuroscience advances, UX design will continue to evolve. The key is to use these insights ethically – to create experiences that genuinely serve users' needs rather than manipulate them.</p>

      <p>Remember, the best user experiences feel magical not because they're complex, but because they're so well-designed that the complexity is invisible to the user.</p>
    `,
    excerpt: "Understanding human behavior and cognitive patterns to create more intuitive and engaging digital experiences.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200",
    author: {
      name: "Lisa Wang",
      bio: "UX researcher and design psychologist with expertise in human-computer interaction and behavioral design.",
      avatar: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=100",
      initials: "LW",
      followers: "11.8K",
      following: "345"
    },
    category: "Design",
    tags: ["UX Design", "Psychology", "User Research", "Design"],
    readTime: "7 min read",
    publishedAt: new Date('2024-01-13'),
    likes: 89,
    comments: 15,
    bookmarked: true
  }
];

export async function generateStaticParams() {
  return mockArticles.map((article) => ({
    id: article.id.toString(),
  }));
}

interface StoryPageProps {
  params: {
    id: string;
  };
}

export default function StoryPage({ params }: StoryPageProps) {
  const articleId = parseInt(params.id);
  const article = mockArticles.find(a => a.id === articleId);

  if (!article) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <Badge variant="secondary" className="mb-4">
          {article.category}
        </Badge>
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
          {article.title}
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          {article.excerpt}
        </p>

        {/* Author Info */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={article.author.avatar} alt={article.author.name} />
              <AvatarFallback>{article.author.initials}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-semibold">{article.author.name}</h3>
                <Button variant="outline" size="sm">
                  <User className="h-3 w-3 mr-1" />
                  Follow
                </Button>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>{formatDistanceToNow(article.publishedAt, { addSuffix: true })}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <Button variant="ghost" size="sm">
                <Heart className="h-4 w-4" />
              </Button>
              <span className="text-sm text-gray-500">{article.likes}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Button variant="ghost" size="sm">
                <MessageCircle className="h-4 w-4" />
              </Button>
              <span className="text-sm text-gray-500">{article.comments}</span>
            </div>
            <Button variant="ghost" size="sm">
              <Bookmark className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Share className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative h-80 md:h-96 rounded-lg overflow-hidden mb-12">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div 
        className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:text-gray-700 prose-p:leading-relaxed prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600 prose-ul:text-gray-700 prose-li:text-gray-700"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      {/* Tags */}
      <div className="mt-12 pt-8 border-t">
        <div className="flex flex-wrap gap-2 mb-8">
          {article.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="hover:bg-primary hover:text-white cursor-pointer transition-colors">
              {tag}
            </Badge>
          ))}
        </div>

        <Separator className="mb-8" />

        {/* Author Bio */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-start space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={article.author.avatar} alt={article.author.name} />
              <AvatarFallback>{article.author.initials}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">{article.author.name}</h3>
                <Button variant="outline" size="sm">
                  <User className="h-3 w-3 mr-1" />
                  Follow
                </Button>
              </div>
              <p className="text-gray-600 mb-3">{article.author.bio}</p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>{article.author.followers} followers</span>
                <span>•</span>
                <span>{article.author.following} following</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}