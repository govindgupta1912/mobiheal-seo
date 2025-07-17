
import { Link, useLocation ,useNavigate} from "react-router-dom";

import { Button } from "@/components/ui/button";
import { DownloadIcon, FileTextIcon } from "lucide-react";
import { whitepapers } from "@/lib/data";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories = [
  { label: "All Topics", value: "all" },
  { label: "Security", value: "security" },
  { label: "BYOD", value: "byod" },
  { label: "Compliance", value: "compliance" },
  { label: "Implementation", value: "implementation" },
];

const Whitepapers = () => {
 // import { useLocation, useNavigate } from "react-router-dom";

const location = useLocation();
const navigate = useNavigate();
const [tabValue, setTabValue] = useState("all");

// Sync tabValue from URL
useEffect(() => {
  const fromURL = location.pathname.split("/")[3]?.toLowerCase() || "all";
  setTabValue(fromURL);
}, [location.pathname]);

const handleTabChange = (value: string) => {
  setTabValue(value);
  if (value === "all") {
    navigate("/whitepapers");
  } else {
    navigate(`/whitepapers/category/${value}`);
  }
};


  const getWhitePaper = (category: string) => {
    return category === "all"
      ? whitepapers
      : whitepapers.filter(
          (study) => study.category.toLowerCase() === category
        );
  };
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

      {/* <section className="py-16 md:py-24 bg-white">
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
                  <h2 className="text-xl font-bold mb-3 text-neutral-800 hover:text-primary">
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
      </section> */}

      {/* Tabs */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={tabValue} onValueChange={handleTabChange}>
            <TabsList className="flex flex-wrap gap-2 mb-16 sm:mb-14 md:mb-10">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat.value}
                  value={cat.value}
                  className="px-4 py-2 rounded-full data-[state=active]:bg-primary data-[state=active]:text-white bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {categories.map(({ value }) => (
              <TabsContent key={value} value={value}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {getWhitePaper(value).map((whitepaper, index) => (
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
                        <h2 className="text-xl font-bold mb-3 text-neutral-800 hover:text-primary">
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
                            <Link to={`/whitepapers/${whitepaper.slug}`}>
                              <a>Preview</a>
                            </Link>
                          </Button>
                          <Button asChild>
                            <Link
                              to={`/whitepapers/${whitepaper.slug}?scrollToForm=true`}
                            >
                              <DownloadIcon className="mr-2 h-4 w-4" />
                              Download
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}

           
          </Tabs>
        </div>
      </section>

   
    </>
  );
};

export default Whitepapers;
