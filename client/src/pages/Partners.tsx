import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { partners, clients } from "@/lib/data";

const Partners = () => {
  return (
    <>
      <section className="bg-gradient text-white py-16 md:py-20">
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
           <div className="mb-16 space-y-8">
  {Array.from({ length: Math.ceil(partners.length / 3) }).map((_, rowIndex) => {
    const rowItems = partners.slice(rowIndex * 3, rowIndex * 3 + 3);
    const isLastRow = rowIndex === Math.floor(partners.length / 3);
    const isIncompleteRow = rowItems.length < 3;

    return (
      <div
        key={rowIndex}
        className={`grid gap-8 ${
          isIncompleteRow
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-' + rowItems.length + ' justify-center'
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}
      >
        {rowItems.map((partner, index) => (
          <div
            key={index}
            className="bg-white border border-neutral-200 rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-center h-20 mb-6">
              <img
                src={partner.imageSrc}
                alt={partner.name}
                className="max-h-16 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-neutral-800">{partner.name}</h3>
            <p className="text-neutral-600 mb-4">{partner.description}</p>
            <div className="flex items-center text-sm text-neutral-500">
              <span className="mr-2 px-2 py-1 bg-neutral-100 rounded-full">
                {partner.partnerType}
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  })}
</div>



            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-neutral-800 text-center">
                Featured Clients
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
                {clients.map((client, index) => (
                  <div key={index} className="flex items-center justify-center p-6 bg-white ">
                    <img
                      src={client.imageSrc}
                      alt={client.name}
                      className="max-h-24 object-contain"
                    />
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
                  <div className="bg-white px-4 py-2 rounded border border-neutral-200 text-neutral-700">ISO 27001: 2022</div>
                  <div className="bg-white px-4 py-2 rounded border border-neutral-200 text-neutral-700">ISO 9001:2015</div>
                  <div className="bg-white px-4 py-2 rounded border border-neutral-200 text-neutral-700">MSME</div>
                  <div className="bg-white px-4 py-2 rounded border border-neutral-200 text-neutral-700">GeM OEM</div>
                
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
                 Join our partner program to empower your customers with next-gen device management, while ensuring competitive benefits, comprehensive training, and dedicated support for you.
For collaboration inquiries, contact your dedicated Channel Manager at
                </p>
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
