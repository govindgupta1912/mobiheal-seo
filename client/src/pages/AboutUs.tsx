import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Mobisec Technologies 🔐
          </h1>
          <p className="text-lg md:text-xl">
            A cutting-edge cybersecurity startup shaping the future of digital protection.
          </p>
        </div>
      </section>

      {/* Founder's Vision */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://source.unsplash.com/featured/?cybersecurity"
            alt="Cybersecurity Vision"
            className="w-full rounded-xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Origins 👨‍💻</h2>
            <p className="text-gray-700 leading-relaxed">
              Founded by a visionary leader with 20+ years of experience in cybersecurity,
              Mobisec is born out of deep expertise and unwavering commitment to digital resilience.
            </p>
          </div>
        </div>
      </section>

      {/* Incubation Info */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Incubated at IIT Delhi & DSCI 🚀</h2>
          <p className="text-gray-700 mb-6">
            We're proudly incubated at <strong>IIT Delhi</strong> and the <strong>National Centre of Excellence for Cybersecurity (DSCI)</strong>, a reflection of our alignment with both academic brilliance and industry relevance.
          </p>
          <img
            src="https://source.unsplash.com/featured/?university,technology"
            alt="IIT and DSCI"
            className="rounded-xl mx-auto shadow-md"
          />
        </div>
      </section>

      {/* Vision + Mission */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-3">🌐 Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              We envision a secure digital future by anticipating cyber threats and innovating proactively. Our goal is to empower every business and nation with digital confidence.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-3">🎯 Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To develop adaptive cybersecurity solutions that protect digital infrastructures while enabling our clients to thrive in a threat-heavy digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Innovation & Strategy */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-4">Innovation Hub 💡</h3>
            <p className="text-gray-700">
              Creativity and tech excellence drive us. Our team is dedicated to crafting novel cybersecurity paradigms through collaboration and curiosity.
            </p>
            <h3 className="text-3xl font-bold mt-10 mb-4">Strategic Alliances 🤝</h3>
            <p className="text-gray-700">
              We work with global industry leaders and academic institutions to future-proof our solutions with real-time insights and resilient frameworks.
            </p>
          </div>
          <img
            src="https://source.unsplash.com/featured/?innovation,team"
            alt="Innovation"
            className="w-full rounded-xl shadow-xl"
          />
        </div>
      </section>

      {/* Commitment */}
      <section className="bg-blue-50 py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">🔒 Our Commitment</h3>
          <p className="text-gray-700 mb-4">
            We deliver tailored, enterprise-grade cybersecurity solutions with precision and integrity. At Mobisec, we secure more than data — we safeguard the future.
          </p>
          <p className="text-gray-700 italic">
            "Join us on this exciting journey. Let’s build a digitally resilient world together."
          </p>
        </div>
      </section>

      {/* Contact */}
     <section className="bg-gray-900 text-white py-16 px-4">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
    {/* Contact Info Card */}
    <div>
      <h3 className="text-3xl font-bold mb-6">📞 Get in Touch</h3>
      <div className="bg-gray-800 rounded-xl p-6 shadow-md space-y-6">
        <div className="flex items-start gap-4">
          <MapPin size={24} className="text-blue-400" />
          <div>
            <h4 className="font-semibold">Our Office</h4>
            <p>F-200, FF, Phase-1, New Palam Vihar, Sec-110,<br />Gurugram, Haryana 122017, India</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Phone size={24} className="text-blue-400" />
          <div>
            <h4 className="font-semibold">Phone</h4>
            <p>+91-11-6926-8029</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Mail size={24} className="text-blue-400" />
          <div>
            <h4 className="font-semibold">Email</h4>
            <p>contact@mobisec.in</p>
          </div>
        </div>
        <Button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white w-full">
          📤 Send Inquiry
        </Button>
      </div>
    </div>

    {/* Embedded Map */}
    <div className="rounded-xl overflow-hidden shadow-lg">
      <iframe
        title="Mobisec Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.500983864365!2d77.02796877529282!3d28.615457875684633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1be071040bad%3A0xa4828ec4fa0208a3!2sNew%20Palam%20Vihar%2C%20Sector%20110%2C%20Gurugram%2C%20Haryana%20122017!5e0!3m2!1sen!2sin!4v1687431777981!5m2!1sen!2sin"
        width="100%"
        height="100%"
        className="w-full h-[400px] border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</section>

    </div>
  );
};

export default AboutUs;
