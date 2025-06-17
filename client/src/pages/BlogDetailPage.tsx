import { useParams } from "wouter";
import { blogs } from "../../src/components/data/blogs";
import BlogHero from "../components/blog/BlogHero";
import BlogBody from "../components/blog/BlogBody";
import LatestBlogCarousel from "../components/blog/LatestBlogCarousel";
import NewsletterCTA from "../components/blog/NewsletterCTA";
import SidebarBlogList from "../components/blog/SidebarBlogList"; // 👈 Import the new component

const BlogDetailPage = () => {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.id === slug);

  if (!blogs || blogs.length === 0) {
    return <div className="text-center p-8">No blogs available</div>;
  }

  if (!blog) {
    return <div className="text-center p-8">Blog not found</div>;
  }

  return (
    <div className="bg-white text-gray-800 font-sans">
      <BlogHero blog={blog} />
      <div className="max-w-7xl mx-auto  grid lg:grid-cols-4 gap-8 mt-8">
        {/* Main Blog Body */}
        <div className="lg:col-span-3">
          <BlogBody blog={blog} />
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 hidden lg:block">
          <SidebarBlogList blogs={blogs} activeBlogId={blog.id} />
        </div>
      </div>

      <LatestBlogCarousel blogs={blogs.filter((b) => b.id !== blog.id)} />
      <NewsletterCTA />
    </div>
  );
};

export default BlogDetailPage;
