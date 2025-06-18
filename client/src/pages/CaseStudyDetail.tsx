import { useParams } from "wouter";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  TrendingUp,
  Shield,
  Clock,
  MapPin,
  Smartphone,
  Lock,
  Key,
  ClipboardCheck,
  BarChart3,
  CheckCircle2
} from "lucide-react";
import { caseStudyDetails } from "@/lib/caseStudyDetails";

const iconMap = {
  "map-pin": MapPin,
  "shield": Shield,
  "smartphone": Smartphone,
  "lock": Lock,
  "key": Key,
  "clipboard-check": ClipboardCheck,
};
// ... (import statements remain the same)

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
      <section className="bg-gradient-to-r from-primary to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Link href="/case-studies">
              <Button variant="ghost" className="text-white hover:text-white/90 mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Case Studies
              </Button>
            </Link>
            <h1 className="text-4xl font-bold mb-2">{study.title}</h1>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {study.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-white/20 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold mb-6 text-neutral-800">Executive Summary</h2>
          <p className="text-lg text-neutral-600">{study.summary}</p>
        </div>
      </section>
     
     {/* Client Overview + Challenges */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* Client Overview */}
      <div>
        <h2 className="text-3xl font-bold mb-6 text-neutral-800">Client Overview</h2>
        <p className="text-lg text-neutral-700 mb-4">
          <span className="font-semibold">Industry:</span> {study.clientOverview?.industry}
        </p>
        {study.clientOverview?.keyChallenges?.length > 0 && (
          <>
            <h3 className="text-xl font-semibold mb-4 text-neutral-800">Key Challenges</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-700">
              {study.clientOverview.keyChallenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </>
        )}
      </div>

      {/* Challenges */}
      <div>
        <h2 className="text-3xl font-bold mb-6 text-neutral-800">Challenges</h2>
        <ul className="space-y-5">
          {study.challenges.map((challenge, index) => (
            <li key={index} className="flex items-start">
              <div className="flex-shrink-0 h-7 w-7 rounded-full bg-red-100 flex items-center justify-center mr-3">
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
    </div>
  </div>
</section>

{/* Visual Image */}
{study.imageSrc && (
  <section className="bg-white pb-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
      <img
        src={study.imageSrc}
        alt="Case Study Visual"
        className="rounded-xl w-full object-cover shadow-lg"
      />
    </div>
  </section>
)}


      {/* Challenges + Image */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Challenges */}
           
            {/* Image */}
            {/* <div className="flex justify-center lg:justify-end">
              {study.imageSrc && (
                <img
                  src={study.imageSrc}
                  alt="Case Study Visual"
                  className="rounded-xl w-full max-w-md object-cover shadow-lg"
                />
              )}
            </div> */}
          </div>

          {/* MDM Solutions */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-neutral-800">MobiHeal MDM Solution</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {study.solution.map((solution, index) => {
                const Icon = iconMap[solution.icon as keyof typeof iconMap];
                return (
                  <div key={index} className="bg-neutral-50 p-6 rounded-xl shadow">
                    <div className="flex items-center mb-4">
                      {Icon && <Icon className="h-6 w-6 text-primary mr-2" />}
                      <h3 className="text-xl font-semibold text-neutral-800">{solution.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 min-w-[20px] text-primary mr-2 mt-1" />
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
      </section>

      {/* Results Section */}
      <section className="py-4 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-bold mb-10 text-neutral-800 text-center">Key Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {study.results.map((result, index) => (
              <div key={index} className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 shadow-sm">
                <div className="flex items-center mb-3">
                  <BarChart3 className="h-6 w-6 text-primary mr-2" />
                  <h3 className="text-lg font-semibold text-neutral-800">{result.label}</h3>
                </div>
                <p className="text-2xl font-bold text-primary">{result.stat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Table */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-bold mb-6 text-neutral-800 text-center">Before & After Metrics</h2>
          <div className="overflow-auto">
            <table className="min-w-full bg-white border border-neutral-200 rounded-xl overflow-hidden">
              <thead className="bg-primary text-white">
                <tr>
                  {study.metricsTable.headers.map((header, i) => (
                    <th key={i} className="px-6 py-4 text-left text-sm font-medium uppercase tracking-wider">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {study.metricsTable.rows.map((row, i) => (
                  <tr key={i} className="border-t">
                    {row.map((cell, j) => (
                      <td key={j} className="px-6 py-4 text-sm text-neutral-700">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

     {/* Best Practices + Industry Recognition */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Best Practices */}
      <div>
        <h2 className="text-3xl font-bold mb-6 text-neutral-800">Best Practices</h2>
        <ul className="space-y-3 list-disc list-inside text-neutral-700">
          {study.bestPractices.map((practice, index) => (
            <li key={index}>{practice}</li>
          ))}
        </ul>
      </div>

      {/* Industry Recognition */}
      <div>
        <h2 className="text-3xl font-bold mb-6 text-neutral-800">Industry Recognition</h2>
        <ul className="space-y-4 text-neutral-700">
          {study.industryRecognition.map((item, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle2 className="h-5 w-5 min-w-[20px] text-primary mr-2 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</section>


      {/* Conclusion */}
      <section className="py-8 mb-8 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl  border-t border-b border-neutral-200">
          <h2 className="text-3xl font-bold mb-4 text-neutral-800">Conclusion</h2>
          <p className="text-lg text-neutral-700 leading-relaxed">
            {study.conclusion}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Mobile Infrastructure?</h2>
          <p className="text-lg mb-8">Explore how MobiHeal MDM can protect your organization against evolving mobile threats.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">Schedule a Demo</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-primary hover:bg-white/10" asChild>
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudyDetail;
