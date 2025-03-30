import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import TestimonialCard from "@/components/common/TestimonialCard";

const PartnersSection = () => {
  const clients = [
    { id: 1, name: "Client 1" },
    { id: 2, name: "Client 2" },
    { id: 3, name: "Client 3" },
    { id: 4, name: "Client 4" },
    { id: 5, name: "Client 5" },
    { id: 6, name: "Client 6" },
    { id: 7, name: "Client 7" },
    { id: 8, name: "Client 8" }
  ];

  const testimonials = [
    {
      quote: "SecureMDM has revolutionized how we manage our corporate devices. The implementation was seamless, and the security features have given us peace of mind.",
      author: "Sarah Johnson",
      position: "CIO, Global Financial Services",
      rating: 5
    },
    {
      quote: "The kiosk mode functionality has been a game-changer for our retail locations. We've been able to deploy hundreds of customer-facing tablets with minimal IT overhead.",
      author: "Mark Thompson",
      position: "IT Director, National Retail Chain",
      rating: 5
    },
    {
      quote: "Our BYOD program has seen increased adoption thanks to SecureMDM's work profile container. Employees appreciate the privacy protection, and we maintain strong security controls.",
      author: "Jennifer Lee",
      position: "CISO, Healthcare Provider",
      rating: 4.5
    }
  ];

  return (
    <section id="partners" className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-800">Our Partners & Clients</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Trusted by leading organizations across industries.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
          {clients.map((client) => (
            <div key={client.id} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="160"
                height="80"
                viewBox="0 0 160 80"
                fill="none"
                className="max-h-12"
              >
                <rect width="160" height="80" rx="4" fill="#E5E7EB" />
                <text
                  x="80"
                  y="44"
                  fontFamily="Arial"
                  fontSize="14"
                  fill="#6B7280"
                  textAnchor="middle"
                >
                  {client.name}
                </text>
              </svg>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <h3 className="text-2xl font-bold mb-8 text-neutral-800">What Our Clients Say</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              rating={testimonial.rating}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/5" asChild>
            <Link href="/testimonials">View all Testimonials</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
