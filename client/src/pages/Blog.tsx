import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import BlogPostCard from "@/components/common/BlogPostCard";
import { blogPosts } from "@/lib/data";

const BlogCategories = [
  { name: "All", slug: "all" },
  { name: "Mobile Security", slug: "mobile-security" },
  { name: "MDM Best Practices", slug: "mdm-best-practices" },
  { name: "BYOD", slug: "byod" },
  { name: "Compliance", slug: "compliance" },
  { name: "Industry Trends", slug: "industry-trends" }
];

const Blog = () => {
  return (
    <>
      <section className="bg-gradient text-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Mobile Device Management Blog
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              Insights, trends, and best practices in mobile device management and security.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 overflow-x-auto">
            <div className="flex space-x-2 min-w-max pb-2">
              {BlogCategories.map((category) => (
                <Link key={category.slug} href={`/blog/category/${category.slug}`}>
                  <a className={`px-4 py-2 rounded-full ${
                    category.slug === "all" 
                      ? "bg-primary text-white" 
                      : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                  }`}>
                    {category.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-neutral-800">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(0, 3).map((post, index) => (
                <BlogPostCard
                  key={index}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  imageSrc={post.imageSrc}
                  imageAlt={post.imageAlt}
                  href={post.href}
                />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 text-neutral-800">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(3).map((post, index) => (
                <BlogPostCard
                  key={index}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  imageSrc={post.imageSrc}
                  imageAlt={post.imageAlt}
                  href={post.href}
                />
              ))}
            </div>
          </div>

          {/* <div className="mt-12 text-center">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
              Load More Articles
            </Button>
          </div> */}
        </div>
      </section>

      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-neutral-800">
              Subscribe to Our Blog
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Get the latest MDM insights, security updates, and industry news delivered directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                required
              />
              <Button type="submit">
                Subscribe
              </Button>
            </form>
            <p className="text-sm text-neutral-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
