import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { DownloadIcon, FileTextIcon } from "lucide-react";
import { whitepapers } from "@/lib/data";

const Whitepapers = () => {
  return (
    <>
      <section className="bg-gradient text-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Whitepapers & Technical Resources
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              In-depth technical resources and research on mobile security
              topics.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 overflow-x-auto">
            <div className="flex space-x-2 min-w-max pb-2">
              <Link href="/whitepapers">
                <a className="px-4 py-2 rounded-full bg-primary text-white">
                  All Topics
                </a>
              </Link>
              <Link href="/whitepapers/security">
                <a className="px-4 py-2 rounded-full bg-neutral-100 text-neutral-700 hover:bg-neutral-200">
                  Security
                </a>
              </Link>
              <Link href="/whitepapers/byod">
                <a className="px-4 py-2 rounded-full bg-neutral-100 text-neutral-700 hover:bg-neutral-200">
                  BYOD
                </a>
              </Link>
              <Link href="/whitepapers/compliance">
                <a className="px-4 py-2 rounded-full bg-neutral-100 text-neutral-700 hover:bg-neutral-200">
                  Compliance
                </a>
              </Link>
              <Link href="/whitepapers/implementation">
                <a className="px-4 py-2 rounded-full bg-neutral-100 text-neutral-700 hover:bg-neutral-200">
                  Implementation
                </a>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whitepapers.map((whitepaper, index) => (
              <div
                key={index}
                className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary-dark/10 rounded-full p-3">
                      <FileTextIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <span className="text-sm text-neutral-500">
                        {whitepaper.type} • {whitepaper.pages} pages
                      </span>
                    </div>
                  </div>
                  <h2 className="text-xl font-bold mb-3 text-neutral-800">
                    {whitepaper.title}
                  </h2>
                  <p className="text-neutral-600 mb-6">
                    {whitepaper.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {whitepaper.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-block px-3 py-1 bg-neutral-100 text-neutral-700 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary/5"
                      asChild
                    >
                      <Link href={`/whitepapers/${whitepaper.slug}`}>
                        <a>Preview</a>
                      </Link>
                    </Button>
                    <Button asChild>
                      <a href={whitepaper.downloadHref}>
                        <DownloadIcon className="mr-2 h-4 w-4" />
                        Download
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-200">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-800">
                  Request Custom Research
                </h2>
                <p className="text-neutral-600">
                  Need specialized research or technical information for your
                  specific use case? Our team can help.
                </p>
              </div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-neutral-700 mb-1"
                    >
                      Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-neutral-700 mb-1"
                    >
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-neutral-700 mb-1"
                  >
                    Company Name*
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="topic"
                    className="block text-sm font-medium text-neutral-700 mb-1"
                  >
                    Research Topic*
                  </label>
                  <input
                    type="text"
                    id="topic"
                    name="topic"
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="details"
                    className="block text-sm font-medium text-neutral-700 mb-1"
                  >
                    Additional Details
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={4}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                  ></textarea>
                </div>
                <Button type="submit" className="w-full">
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Whitepapers;
