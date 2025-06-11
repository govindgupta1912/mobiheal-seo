import { blogs } from "../../src/components/data/blogs";
import BlogHero from "../components/blog/BlogHero";
import BlogBody from "../components/blog/BlogBody";
import BlogSocialMeta from "../components/blog/BlogSocialMeta";
import LatestBlogCarousel from "../components/blog/LatestBlogCarousel";
import NewsletterCTA from "../components/blog/NewsletterCTA";

const BlogDetailPage = () => {
  const blog = blogs[0]; // dynamic via slug later

  return (
    <div className="bg-white text-gray-800 font-sans">
      <BlogHero blog={blog} />
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-4 gap-8 mt-8">
        <div className="lg:col-span-1 hidden lg:block">
          <BlogSocialMeta blog={blog} />
        </div>
        <div className="lg:col-span-3">
          <BlogBody blog={blog} />
        </div>
      </div>
      <LatestBlogCarousel blogs={blogs.slice(1)} />
      <NewsletterCTA />
    </div>
  );
};

export default BlogDetailPage;
