
import React from 'react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Styling Tips for Modest Fashion",
    excerpt: "Discover how to create versatile looks with your modest wardrobe essentials.",
    image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=1000"
  },
  {
    id: 2,
    title: "The History of Modest Fashion",
    excerpt: "Exploring the cultural significance and evolution of modest clothing traditions.",
    image: "https://images.unsplash.com/photo-1585924799692-b187b36e661e?q=80&w=1000"
  }
];

const BlogPreview: React.FC = () => {
  return (
    <div className="my-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-playfair font-semibold">From Our Blog</h2>
        <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
          View All
        </button>
      </div>
      
      <div className="space-y-4">
        {blogPosts.map(post => (
          <div 
            key={post.id} 
            className="flex space-x-4 bg-white rounded-lg shadow-sm overflow-hidden animate-fade-in"
          >
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-24 h-24 object-cover"
            />
            <div className="py-2 pr-2">
              <h3 className="font-playfair font-medium text-gray-800">{post.title}</h3>
              <p className="text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPreview;
