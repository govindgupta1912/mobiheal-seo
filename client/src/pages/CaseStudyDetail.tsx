import { useParams } from "wouter";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, TrendingUp, Shield, Clock, MapPin, Smartphone, Lock, Key, ClipboardCheck } from "lucide-react";
import { caseStudyDetails } from "@/lib/caseStudyDetails";
import RelatedCaseStudies from "@/components/RelatedCaseStudies";

const iconMap = {
  "map-pin": MapPin,
  "shield": Shield,
  "smartphone": Smartphone,
  "lock": Lock,
  "key": Key,
  "clipboard-check": ClipboardCheck
};

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const study = caseStudyDetails[slug || ""];

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
          <Button asChild>
            <Link href="/case-studies">Back to Case Studies</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/case-studies">
              <Button variant="ghost" className="text-white hover:text-white/90 mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Case Studies
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {study.title}
            </h1>
            <div className="flex flex-wrap gap-4 mb-8">
              {study.tags.map((tag, index) => (
                <span key={index} className="px-4 py-2 bg-white/10 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-neutral-800">Executive Summary</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-neutral-600">
                {study.summary}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-neutral-800 text-center">Results & Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {study.results.map((result, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-4">
                    {index === 0 && <TrendingUp className="h-6 w-6 text-primary mr-2" />}
                    {index === 1 && <Shield className="h-6 w-6 text-primary mr-2" />}
                    {index === 2 && <Clock className="h-6 w-6 text-primary mr-2" />}
                    <h3 className="text-lg font-semibold">Key Metric</h3>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{result.stat}</div>
                  <p className="text-neutral-600">{result.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solution */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-neutral-800">Challenges</h2>
                <ul className="space-y-4">
                  {study.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mr-3">
                        <span className="text-red-600 font-semibold">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-neutral-800">{challenge.title}</h3>
                        <p className="text-neutral-600">{challenge.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-neutral-800">MobiHeal MDM Solution</h2>
                <div className="space-y-6">
                  {study.solution.map((solution, index) => {
                    const Icon = iconMap[solution.icon as keyof typeof iconMap];
                    return (
                      <div key={index} className="bg-neutral-50 p-6 rounded-xl">
                        <div className="flex items-center mb-4">
                          {Icon && <Icon className="h-6 w-6 text-primary mr-2" />}
                          <h3 className="text-xl font-semibold text-neutral-800">{solution.title}</h3>
                        </div>
                        <ul className="space-y-2">
                          {solution.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1" />
                              <span className="text-neutral-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {study.testimonials.length > 0 && (
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-neutral-800 text-center">What Our Client Says</h2>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <blockquote className="text-xl text-neutral-600 mb-6">
                  "{study.testimonials[0].quote}"
                </blockquote>
                <div className="flex items-center">
                  <div 
                    className="h-12 w-12 rounded-full bg-cover bg-center mr-4"
                    style={{ backgroundImage: `url('${study.testimonials[0].image}')` }}
                  />
                  <div>
                    <div className="font-semibold text-neutral-800">{study.testimonials[0].author}</div>
                    <div className="text-neutral-600">
                      {study.testimonials[0].position}, {study.testimonials[0].company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Case Studies */}
      <RelatedCaseStudies 
        currentSlug={study.slug}
        relatedSlugs={study.relatedCaseStudies}
      />

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-neutral-800">
              Ready to enhance your mobile security?
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Join leading organizations in protecting their mobile infrastructure with MobiHeal MDM.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Schedule a Demo</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudyDetail; 