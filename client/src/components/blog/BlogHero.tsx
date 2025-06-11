import { Blog } from "../../types/blog";
import { FaCalendarAlt, FaClock, FaUser } from 'react-icons/fa';

const BlogHero = ({ blog }: { blog: Blog }) => (
  <div className="relative w-full min-h-[600px] overflow-hidden">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0">
      <img 
        src={blog.coverImage} 
        alt={blog.title} 
        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" 
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
    </div>

    {/* Content */}
    <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center py-20">
      <div className="max-w-4xl">
        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-4 mb-6 text-white/90">
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-blue-400" />
            <span>{blog.publishedAt}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaClock className="text-blue-400" />
            <span>{blog.readTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaUser className="text-blue-400" />
            <span>{blog.author}</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
          {blog.title}
        </h1>

        {/* Introduction */}
        <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
          {blog.introduction}
        </p>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BlogHero;
