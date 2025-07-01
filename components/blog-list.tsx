"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { formatDistanceToNow } from 'date-fns';
import { Heart, Bookmark, MessageCircle } from 'lucide-react';

const blogPosts = [
  {
    id: 4,
    title: "Building Scalable Web Applications with Next.js",
    excerpt: "A comprehensive guide to creating performant and scalable web applications using Next.js, covering best practices and optimization techniques.",
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: {
      name: "Alex Thompson",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100",
      initials: "AT"
    },
    category: "Development",
    readTime: "10 min read",
    publishedAt: new Date('2024-01-14'),
    likes: 124,
    comments: 23,
    bookmarked: false
  },
  {
    id: 5,
    title: "The Psychology of User Experience Design",
    excerpt: "Understanding human behavior and cognitive patterns to create more intuitive and engaging digital experiences.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: {
      name: "Lisa Wang",
      avatar: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=100",
      initials: "LW"
    },
    category: "Design",
    readTime: "7 min read",
    publishedAt: new Date('2024-01-13'),
    likes: 89,
    comments: 15,
    bookmarked: true
  },
  {
    id: 6,
    title: "Exploring the Benefits of Mindfulness in Daily Life",
    excerpt: "How incorporating mindfulness practices can improve mental health, productivity, and overall well-being.",
    image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: {
      name: "David Kumar",
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100",
      initials: "DK"
    },
    category: "Wellness",
    readTime: "5 min read",
    publishedAt: new Date('2024-01-11'),
    likes: 156,
    comments: 34,
    bookmarked: false
  },
  {
    id: 7,
    title: "The Rise of Cryptocurrency: What You Need to Know",
    excerpt: "A beginner's guide to understanding cryptocurrency, blockchain technology, and their potential impact on the financial world.",
    image: "https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: {
      name: "Jennifer Adams",
      avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100",
      initials: "JA"
    },
    category: "Finance",
    readTime: "15 min read",
    publishedAt: new Date('2024-01-09'),
    likes: 203,
    comments: 67,
    bookmarked: false
  },
  {
    id: 8,
    title: "Climate Change and Innovation: Green Technologies Leading the Way",
    excerpt: "Exploring breakthrough technologies and innovations that are helping combat climate change and create a sustainable future.",
    image: "https://images.pexels.com/photos/9875420/pexels-photo-9875420.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: {
      name: "Robert Green",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100",
      initials: "RG"
    },
    category: "Environment",
    readTime: "11 min read",
    publishedAt: new Date('2024-01-08'),
    likes: 178,
    comments: 42,
    bookmarked: true
  }
];

const categories = ["All", "Technology", "Design", "Business", "Lifestyle", "Development", "Wellness", "Finance", "Environment"];

export function BlogList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [bookmarkedPosts, setBookmarkedPosts] = useState<number[]>([5, 8]);

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const toggleBookmark = (postId: number) => {
    setBookmarkedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">Latest Stories</h2>
      </div>

      <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
        <TabsList className="grid w-full grid-cols-3 lg:grid-cols-9 mb-8">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category} className="text-xs lg:text-sm">
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={selectedCategory}>
          <div className="space-y-8">
            {filteredPosts.map((post) => (
              <div key={post.id} className="border-b border-gray-100 pb-8 last:border-b-0">
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="md:col-span-3">
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="flex items-center space-x-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={post.author.avatar} alt={post.author.name} />
                          <AvatarFallback className="text-xs">{post.author.initials}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium">{post.author.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">
                        {formatDistanceToNow(post.publishedAt, { addSuffix: true })}
                      </span>
                    </div>

                    <Link href={`/story/${post.id}`}>
                      <div className="group cursor-pointer">
                        <h3 className="font-serif text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-2 text-sm md:text-base">
                          {post.excerpt}
                        </p>
                      </div>
                    </Link>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Badge variant="secondary" className="text-xs">
                          {post.category}
                        </Badge>
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Heart className="h-4 w-4" />
                          </Button>
                          <span className="text-xs text-gray-500">{post.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <MessageCircle className="h-4 w-4" />
                          </Button>
                          <span className="text-xs text-gray-500">{post.comments}</span>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="h-8 w-8 p-0"
                          onClick={() => toggleBookmark(post.id)}
                        >
                          <Bookmark 
                            className={`h-4 w-4 ${bookmarkedPosts.includes(post.id) ? 'fill-current' : ''}`} 
                          />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-1">
                    <Link href={`/story/${post.id}`}>
                      <div className="relative h-32 md:h-24 rounded-lg overflow-hidden group cursor-pointer">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="text-center">
        <Button variant="outline" size="lg">
          Load More Stories
        </Button>
      </div>
    </section>
  );
}