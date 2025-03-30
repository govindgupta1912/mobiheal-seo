import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/lib/data";

const CaseStudies = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Customer Success Stories
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              Real-world implementation stories and success metrics from our customers across different industries.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 overflow-x-auto">
            <div className="flex space-x-2 min-w-max pb-2">
              <Link href="/case-studies">
                <a className="px-4 py-2 rounded-full bg-primary text-white">
                  All Industries
                </a>
              </Link>
              <Link href="/case-studies/retail">
                <a className="px-4 py-2 rounded-full bg-neutral-100 text-neutral-700 hover:bg-neutral-200">
                  Retail
                </a>
              </Link>
              <Link href="/case-studies/healthcare">
                <a className="px-4 py-2 rounded-full bg-neutral-100 text-neutral-700 hover:bg-neutral-200">
                  Healthcare
                </a>
              </Link>
              <Link href="/case-studies/finance">
                <a className="px-4 py-2 rounded-full bg-neutral-100 text-neutral-700 hover:bg-neutral-200">
                  Finance
                </a>
              </Link>
              <Link href="/case-studies/education">
                <a className="px-4 py-2 rounded-full bg-neutral-100 text-neutral-700 hover:bg-neutral-200">
                  Education
                </a>
              </Link>
              <Link href="/case-studies/enterprise">
                <a className="px-4 py-2 rounded-full bg-neutral-100 text-neutral-700 hover:bg-neutral-200">
                  Enterprise
                </a>
              </Link>
            </div>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <div 
                      className="h-full min-h-[250px]" 
                      style={{
                        backgroundImage: `url('${study.imageSrc}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                      }}
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="inline-block px-3 py-1 bg-neutral-100 text-neutral-700 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-2xl font-bold mb-4 text-neutral-800">{study.title}</h2>
                    <p className="text-neutral-600 mb-6">{study.summary}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="bg-neutral-50 p-4 rounded-lg">
                          <div className="text-primary font-bold text-2xl">{result.stat}</div>
                          <div className="text-neutral-600 text-sm">{result.label}</div>
                        </div>
                      ))}
                    </div>
                    <Button asChild>
                      <Link href={study.href}>
                        Read Full Case Study
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-neutral-800">
            Ready to become our next success story?
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Our team of MDM experts can help you achieve your mobile device management goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5" asChild>
              <Link href="/pricing">View Pricing Plans</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
