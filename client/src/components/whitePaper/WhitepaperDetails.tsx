import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

interface Section {
  title: string;
  content: string;
}

interface WhitepaperProps {
  title: string;
  heroSubtitle: string;
  heroImage: string;
  highlights: string[];
  sections: Section[];
  downloadForm?: {
    enabled: boolean;
  };
}

const WhitepaperDetails = ({
  title,
  heroSubtitle,
  heroImage,
  highlights,
  sections,
  downloadForm,
}: WhitepaperProps) => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#060606] text-white py-20 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-6">{title}</h1>
            <p className="text-lg text-gray-300 leading-relaxed">{heroSubtitle}</p>
          </div>
          <div className="text-center">
            <img
              src={heroImage}
              alt="Whitepaper Hero"
              className="rounded-2xl shadow-2xl max-h-[400px] mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Learn Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-neutral-900">
            What You’ll Learn
          </h2>
          <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 bg-neutral-100 p-5 rounded-xl shadow-sm border border-neutral-200"
              >
                <CheckCircle2 className="text-green-600 mt-1" />
                <p className="text-neutral-800 text-base leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* Content Sections & Form */}
<section className="py-20 bg-neutral-50">
  <div className="container max-w-7xl mx-auto px-4">
    <div className="grid lg:grid-cols-3 gap-12 items-start">
      {/* Content in Accordion */}
      <div className="lg:col-span-2 space-y-6">
        <Accordion type="single" collapsible>
          {sections.map((sec, idx) => (
            <AccordionItem key={idx} value={`section-${idx}`}>
              <AccordionTrigger className="text-lg font-semibold text-neutral-800">
                {sec.title}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-neutral-700 leading-relaxed whitespace-pre-line">
                  {sec.content}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Sticky Form */}
      {downloadForm?.enabled && (
        <aside className="bg-white rounded-2xl shadow-xl border border-neutral-200 p-8 sticky top-24">
          <h4 className="text-2xl font-bold mb-4 text-neutral-900">
            Get the Full Whitepaper
          </h4>
          <p className="text-neutral-600 mb-6 text-sm">
            Fill out this form to instantly download the whitepaper.
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name*"
                className="w-full px-4 py-3 border border-neutral-300 rounded-md"
                required
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="w-full px-4 py-3 border border-neutral-300 rounded-md"
                required
              />
            </div>
            <input
              type="email"
              placeholder="Email Address*"
              className="w-full px-4 py-3 border border-neutral-300 rounded-md"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 border border-neutral-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Company Name*"
              className="w-full px-4 py-3 border border-neutral-300 rounded-md"
              required
            />
            <input
              type="text"
              placeholder="No. of Users"
              className="w-full px-4 py-3 border border-neutral-300 rounded-md"
            />
           
            <Button type="submit" className="w-full text-base">
              Download Now
            </Button>
          </form>
        </aside>
      )}
    </div>
  </div>
</section>

    </>
  );
};

export default WhitepaperDetails;
