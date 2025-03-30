import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { partners, clients } from "@/lib/data";

const Partners = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Our Partners & Clients
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              Trusted by leading organizations across industries.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-neutral-800 text-center">
              Strategic Partners
            </h2>
            <div className="mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white border border-neutral-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-center h-20 mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="160"
                      height="60"
                      viewBox="0 0 160 60"
                      fill="none"
                      className="max-h-16"
                    >
                      <rect width="160" height="60" rx="4" fill="#E5E7EB" />
                      <text
                        x="80"
                        y="34"
                        fontFamily="Arial"
                        fontSize="16"
                        fill="#6B7280"
                        textAnchor="middle"
                      >
                        {partner.name}
                      </text>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-neutral-800">{partner.name}</h3>
                  <p className="text-neutral-600 mb-4">{partner.description}</p>
                  <div className="flex items-center text-sm text-neutral-500">
                    <span className="mr-2 px-2 py-1 bg-neutral-100 rounded-full">{partner.partnerType}</span>
                    <span>{partner.since}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-neutral-800 text-center">
                Featured Clients
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
                {clients.map((client, index) => (
                  <div key={index} className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm border border-neutral-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="120"
                      height="60"
                      viewBox="0 0 120 60"
                      fill="none"
                      className="max-h-12"
                    >
                      <rect width="120" height="60" rx="4" fill="#F3F4F6" />
                      <text
                        x="60"
                        y="34"
                        fontFamily="Arial"
                        fontSize="12"
                        fill="#6B7280"
                        textAnchor="middle"
                      >
                        {client.name}
                      </text>
                    </svg>
                  </div>
                ))}
              </div>

              <div className="text-center mb-12">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/5" asChild>
                  <Link href="/testimonials">
                    View Client Testimonials
                  </Link>
                </Button>
              </div>

              <div className="bg-neutral-50 rounded-lg p-8 border border-neutral-200 text-center">
                <h3 className="text-xl font-bold mb-4 text-neutral-800">Industry Certifications & Compliance</h3>
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                  <div className="bg-white px-4 py-2 rounded border border-neutral-200 text-neutral-700">ISO 27001</div>
                  <div className="bg-white px-4 py-2 rounded border border-neutral-200 text-neutral-700">SOC 2 Type II</div>
                  <div className="bg-white px-4 py-2 rounded border border-neutral-200 text-neutral-700">GDPR Compliant</div>
                  <div className="bg-white px-4 py-2 rounded border border-neutral-200 text-neutral-700">HIPAA Compliant</div>
                  <div className="bg-white px-4 py-2 rounded border border-neutral-200 text-neutral-700">CCPA Compliant</div>
                </div>
                <p className="text-neutral-600">
                  Our MDM solution meets the highest industry standards for security and compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-200">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-800">
                  Become a Partner
                </h2>
                <p className="text-neutral-600 max-w-2xl mx-auto">
                  Join our partner ecosystem and grow your business with SecureMDM. We offer competitive benefits, comprehensive training, and dedicated support for all our partners.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-neutral-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-neutral-800">Reseller Partners</h3>
                  <p className="text-neutral-600 mb-4">
                    Sell SecureMDM solutions to your customers and earn competitive margins.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/contact">Learn More</Link>
                  </Button>
                </div>
                
                <div className="bg-neutral-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-neutral-800">Implementation Partners</h3>
                  <p className="text-neutral-600 mb-4">
                    Provide implementation and integration services for SecureMDM.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/contact">Learn More</Link>
                  </Button>
                </div>
                
                <div className="bg-neutral-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-neutral-800">Technology Partners</h3>
                  <p className="text-neutral-600 mb-4">
                    Integrate your solutions with our MDM platform to extend functionality.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/contact">Learn More</Link>
                  </Button>
                </div>
              </div>
              
              <div className="text-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Apply to Become a Partner</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;
