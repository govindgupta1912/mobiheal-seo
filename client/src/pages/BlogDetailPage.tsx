import { blogs } from "../../src/components/data/blogs";
import BlogHero from "../components/blog/BlogHero";
import BlogBody from "../components/blog/BlogBody";
import BlogSocialMeta from "../components/blog/BlogSocialMeta";
import LatestBlogCarousel from "../components/blog/LatestBlogCarousel";
import NewsletterCTA from "../components/blog/NewsletterCTA";

const BlogDetailPage = () => {
  const blog = blogs[1]; // dynamic via slug later
  // For now, we are using the second blog as an example
  // In a real application, you would fetch the blog data based on the slug from the URL
  if (!blog) {
    return <div className="text-center p-8">Blog not found</div>;
  }
  // Assuming blogs is an array of blog objects
  // and we are displaying the second blog as an example
  // In a real application, you would fetch the blog data based on the slug from the URL
  if (!blogs || blogs.length === 0) {
    return <div className="text-center p-8">No blogs available</div>;
  }

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
