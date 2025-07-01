import { Hero } from '@/components/hero';
import { FeaturedArticles } from '@/components/featured-articles';
import { BlogList } from '@/components/blog-list';
import { TrendingTopics } from '@/components/trending-topics';

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <FeaturedArticles />
            <div className="mt-12">
              <BlogList />
            </div>
          </div>
          <div className="lg:col-span-1">
            <TrendingTopics />
          </div>
        </div>
      </div>
    </main>
  );
}