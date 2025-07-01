import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { formatDistanceToNow } from 'date-fns';

const featuredArticles = [
  {
    id: 1,
    title: "The Future of Artificial Intelligence: Transforming Industries and Society",
    excerpt: "Exploring how AI is revolutionizing everything from healthcare to transportation, and what it means for the future of work.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: {
      name: "Sarah Chen",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
      initials: "SC"
    },
    category: "Technology",
    readTime: "8 min read",
    publishedAt: new Date('2024-01-15'),
    featured: true
  },
  {
    id: 2,
    title: "Sustainable Living: Small Changes, Big Impact",
    excerpt: "Practical tips for reducing your environmental footprint without compromising your lifestyle.",
    image: "https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=800",
    author: {
      name: "Michael Torres",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100",
      initials: "MT"
    },
    category: "Lifestyle",
    readTime: "6 min read",
    publishedAt: new Date('2024-01-12'),
    featured: false
  },
  {
    id: 3,
    title: "The Art of Remote Work: Building Culture in a Digital World",
    excerpt: "How successful companies are maintaining team cohesion and productivity in the remote work era.",
    image: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: {
      name: "Emily Rodriguez",
      avatar: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=100",
      initials: "ER"
    },
    category: "Business",
    readTime: "12 min read",
    publishedAt: new Date('2024-01-10'),
    featured: false
  }
];

export function FeaturedArticles() {
  const featured = featuredArticles.find(article => article.featured);
  const otherArticles = featuredArticles.filter(article => !article.featured);

  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">Featured Stories</h2>
        <Link href="/stories" className="text-primary hover:text-primary/80 font-medium">
          See all
        </Link>
      </div>

      {featured && (
        <div className="mb-12">
          <Link href={`/story/${featured.id}`}>
            <div className="group cursor-pointer">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge variant="secondary" className="mb-3">
                    {featured.category}
                  </Badge>
                  <h3 className="font-serif text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {featured.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={featured.author.avatar} alt={featured.author.name} />
                        <AvatarFallback>{featured.author.initials}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">{featured.author.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {formatDistanceToNow(featured.publishedAt, { addSuffix: true })}
                    </span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{featured.readTime}</span>
                  </div>
                </div>
                <div className="relative h-72 md:h-80 rounded-lg overflow-hidden">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-8">
        {otherArticles.map((article) => (
          <Link key={article.id} href={`/story/${article.id}`}>
            <div className="group cursor-pointer">
              <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <Badge variant="secondary" className="mb-2">
                {article.category}
              </Badge>
              <h3 className="font-serif text-xl font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {article.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {article.excerpt}
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={article.author.avatar} alt={article.author.name} />
                    <AvatarFallback className="text-xs">{article.author.initials}</AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{article.author.name}</span>
                </div>
                <span className="text-gray-500">
                  {formatDistanceToNow(article.publishedAt, { addSuffix: true })}
                </span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-500">{article.readTime}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}