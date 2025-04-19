
import React from 'react';
import Header from '../components/Header';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}

const Blog: React.FC = () => {
  const featuredPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Evolution of Modest Fashion: From Traditional to Contemporary",
      excerpt: "Explore how modest fashion has transformed over the decades while maintaining its core principles of dignity and grace.",
      author: "Maryam Haya",
      date: "April 10, 2025",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1596402184320-417e7a2a89c1?q=80&w=1000",
      category: "Fashion History"
    },
    {
      id: 2,
      title: "Styling Tips: Creating Versatile Looks with Your Hijab Collection",
      excerpt: "Discover innovative ways to style your hijabs for different occasions, from casual outings to formal events.",
      author: "Aisha Rahman",
      date: "April 5, 2025",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1611765234332-7069b3e91760?q=80&w=1000",
      category: "Styling Guide"
    }
  ];

  const recentPosts: BlogPost[] = [
    {
      id: 3,
      title: "Sustainable Fashion: Eco-Friendly Choices in Modest Wear",
      excerpt: "Learn about sustainable fabrics and ethical practices in the modest fashion industry.",
      author: "Sara Ahmed",
      date: "March 28, 2025",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1000",
      category: "Sustainability"
    },
    {
      id: 4,
      title: "Color Theory: Choosing the Right Palette for Your Skin Tone",
      excerpt: "Understanding color theory can help you select the most flattering shades for your complexion.",
      author: "Leila Mahmoud",
      date: "March 20, 2025",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1000",
      category: "Beauty & Style"
    },
    {
      id: 5,
      title: "Modest Activewear: Staying Active Without Compromising Values",
      excerpt: "Explore our collection of modest activewear designed for comfort and coverage during physical activities.",
      author: "Fatima Khan",
      date: "March 15, 2025",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=1000",
      category: "Activewear"
    },
    {
      id: 6,
      title: "Cultural Influences: How Global Traditions Shape Modest Fashion",
      excerpt: "A look at how different cultural traditions around the world have influenced modern modest fashion trends.",
      author: "Yasmin Malik",
      date: "March 8, 2025",
      readTime: "9 min",
      image: "https://images.unsplash.com/photo-1529374814760-71f9164ddb7e?q=80&w=1000",
      category: "Cultural Insights"
    }
  ];

  const categories = [
    "All Categories",
    "Styling Guide",
    "Fashion History",
    "Sustainability",
    "Beauty & Style",
    "Activewear",
    "Cultural Insights",
    "Seasonal Collections"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuClick={() => {}} />
      
      <main className="mh-container py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-playfair font-bold">Our Blog</h1>
            
            <div className="hidden md:block">
              <select className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-mh-lavender">
                {categories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Featured Posts */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {featuredPosts.map(post => (
              <div key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-mh-lavender/20 text-mh-lavender text-xs rounded-full mb-3">
                    {post.category}
                  </span>
                  <h2 className="text-xl font-playfair font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <div className="flex items-center mr-4">
                      <User size={14} className="mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center mr-4">
                      <Calendar size={14} className="mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <Link to={`/blog/${post.id}`} className="inline-flex items-center text-mh-lavender hover:text-mh-lavender/80 font-medium">
                    Read More <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Recent Posts */}
          <h2 className="text-2xl font-playfair font-semibold mb-6">Recent Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map(post => (
              <div key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <span className="inline-block px-2 py-1 bg-mh-lavender/20 text-mh-lavender text-xs rounded-full mb-2">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-playfair font-semibold mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center">
                      <Calendar size={12} className="mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <Link to={`/blog/${post.id}`} className="text-mh-lavender hover:text-mh-lavender/80 font-medium">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <button className="px-6 py-2 border border-mh-lavender text-mh-lavender hover:bg-mh-lavender hover:text-white rounded-md transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
