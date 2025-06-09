import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import ResourceCard from "@/components/common/ResourceCard";
import BlogPostCard from "@/components/common/BlogPostCard";

const ResourcesSection = () => {
  const resourceCategories = [
    {
      title: "Blog",
      description: "Insights, trends, and best practices in mobile device management and security.",
      imageSrc: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=450&q=80",
      imageAlt: "Blog",
      linkText: "Explore articles",
      href: "/blog"
    },
    {
      title: "Case Studies",
      description: "Real-world implementation stories and success metrics from our customers.",
      imageSrc: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=450&q=80",
      imageAlt: "Case Studies",
      linkText: "View success stories",
      href: "/case-studies"
    },
    {
      title: "Whitepapers",
      description: "In-depth technical resources and research on mobile security topics.",
      imageSrc: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=450&q=80",
      imageAlt: "Whitepapers",
      linkText: "Download resources",
      href: "/whitepapers"
    },
    {
      title: "OWASP Mobile Top 10",
      description: "Guidance on addressing the most critical mobile app security risks.",
      imageSrc: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=450&q=80",
      imageAlt: "OWASP Mobile Top 10",
      linkText: "Learn more",
      href: "/owasp-mobile"
    }
  ];

  const blogPosts = [
    {
      title: "Top Mobile Security Threats in 2025",
      excerpt: "Stay ahead of emerging mobile security threats with our expert analysis and prevention strategies.",
      date: "May 15, 2023",
      imageSrc: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=450&q=80",
      imageAlt: "Mobile Security Threats",
      href: "/blog/mobile-security-threats-2025"
    },
    {
      title: "Benefits of Geo-Fencing in Enterprise Security",
      excerpt: "Learn how location-based security measures can protect your corporate data and enhance compliance.",
      date: "April 28, 2023",
      imageSrc: "https://images.unsplash.com/photo-1584771145729-0bd9fda6529b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=450&q=80",
      imageAlt: "Geo-Fencing",
      href: "/blog/geo-fencing-benefits"
    },
    {
      title: "How QR Code Enrolment Simplifies Device Setup",
      excerpt: "Discover how QR code-based enrollment streamlines device provisioning and improves adoption rates.",
      date: "April 10, 2023",
      imageSrc: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=450&q=80",
      imageAlt: "QR Code Enrollment",
      href: "/blog/qr-code-enrollment"
    }
  ];

  return (
    <section id="resources" className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-800">Resources & Insights</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Stay informed with the latest in mobile security and device management.
          </p>
        </div>

        {/* Resource Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {resourceCategories.map((category, index) => (
            <ResourceCard
              key={index}
              title={category.title}
              description={category.description}
              imageSrc={category.imageSrc}
              imageAlt={category.imageAlt}
              linkText={category.linkText}
              href={category.href}
            />
          ))}
        </div>

        {/* Featured Blog Posts */}
        <h3 className="text-2xl font-bold mb-6 text-neutral-800">Latest from our Blog</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
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

        <div className="text-center mt-12">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 hover:scale-95 transition-transform duration-200" asChild>
            <Link href="/resources">View all Resources</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
