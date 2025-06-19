import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

interface WhitepaperProps {
  title: string;
  heroSubtitle: string;
  heroImage: string;
  highlights: string[];
  downloadForm?: {
    enabled: boolean;
  };
}

const WhitepaperDetails = ({
  title,
  heroSubtitle,
  heroImage,
  highlights,
  downloadForm,
}: WhitepaperProps) => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <svg width="100%" height="100%" className="opacity-30" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="bg-grad" cx="50%" cy="50%" r="80%">
                <stop offset="0%" stopColor="#fff" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#bg-grad)" />
          </svg>
        </div>
        <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg text-white">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-8 max-w-xl">
              {heroSubtitle}
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={heroImage}
              alt="Whitepaper Hero"
              className="rounded-3xl shadow-2xl max-h-[420px] w-full object-cover border-4 border-white/30"
            />
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-14 text-neutral-900 tracking-tight">
            What You'll Learn
          </h2>
          <div className="grid md:grid-cols-2 gap-8 lg:grid-cols-3">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center gap-4 bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:scale-105 transition-transform duration-200"
              >
                <CheckCircle2 className="text-blue-600 w-8 h-8 mb-2" />
                <p className="text-neutral-800 text-lg leading-snug font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Form Section */}
      {downloadForm?.enabled && (
        <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="container max-w-3xl mx-auto px-4">
            <aside className="relative bg-white/60 backdrop-blur-lg border border-blue-200 shadow-2xl rounded-3xl p-10 mx-auto max-w-lg flex flex-col items-center">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-blue-200/40 to-blue-100/10 blur-xl -z-10" />
              <h4 className="text-3xl font-bold mb-4 text-neutral-900 text-center drop-shadow-sm">
                Get the Full Whitepaper
              </h4>
              <p className="text-neutral-700 mb-8 text-base text-center">
                Fill out this form to instantly download the whitepaper.
              </p>
              <form className="space-y-5 w-full">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name*"
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none bg-white/80 placeholder:text-blue-400 text-blue-900 shadow-sm transition-all duration-200"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name*"
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none bg-white/80 placeholder:text-blue-400 text-blue-900 shadow-sm transition-all duration-200"
                    required
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address*"
                  className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none bg-white/80 placeholder:text-blue-400 text-blue-900 shadow-sm transition-all duration-200"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none bg-white/80 placeholder:text-blue-400 text-blue-900 shadow-sm transition-all duration-200"
                />
                <input
                  type="text"
                  placeholder="Company Name*"
                  className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none bg-white/80 placeholder:text-blue-400 text-blue-900 shadow-sm transition-all duration-200"
                  required
                />
                <input
                  type="text"
                  placeholder="No. of Users"
                  className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none bg-white/80 placeholder:text-blue-400 text-blue-900 shadow-sm transition-all duration-200"
                />
                <Button type="submit" className="w-full text-lg font-semibold bg-blue-600 hover:bg-blue-700 transition-colors duration-200 shadow-md rounded-lg">
                  Download Now
                </Button>
              </form>
            </aside>
          </div>
        </section>
      )}
    </>
  );
};

export default WhitepaperDetails;
