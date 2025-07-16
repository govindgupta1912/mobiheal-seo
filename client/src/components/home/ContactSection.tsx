import ContactForm from "@/components/contact/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-neutral-800">
              Contact Us
            </h2>
            <p className="text-neutral-600 mb-8">
              Have questions about our MDM solution? Our team is here to help
              you find the right solution for your business.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-primary text-xl mt-1 mr-4">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-neutral-800 mb-1">
                    Office Location
                  </h3>
                  <p className="text-neutral-600">
                    2B-5D, R&I Park
                    <br />
                    IIT Delhi, New Delhi – 110016
                  </p>

                  <br/>
                  
                  
                  <p className="text-neutral-600">
                    F-200, FF, Phase-I,
                    <br />
                    New Palam Vihar, Sector 110,
                    <br />
                    Gurugram – 122017
                  </p>
                </div>

                
                
              </div>

             
              <div className="flex items-start">
                <div className="text-primary text-xl mt-1 mr-4">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-neutral-800 mb-1">Phone</h3>
                  <p className="text-neutral-600">
                    {/* Sales: +91 11 6926 8029
                    <br /> */}
                     +91 11 6926 8029
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-primary text-xl mt-1 mr-4">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-neutral-800 mb-1">Email</h3>
                  <p className="text-neutral-600">
                    {/* Sales: support@mobiheal.in
                    <br /> */}
                    support@mobiheal.in
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-primary text-xl mt-1 mr-4">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-neutral-800 mb-1">
                    Business Hours
                  </h3>
                  <p className="text-neutral-600">
                    Monday - Friday: 9:00 AM - 6:00 PM IST
                    <br />
                    Support: 24/7 for Professional Plan customers
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex space-x-4">
              <a
                href="#"
                className="text-neutral-600 hover:text-primary text-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="#"
                className="text-neutral-600 hover:text-primary text-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-neutral-600 hover:text-primary text-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-neutral-600 hover:text-primary text-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
              </a>
               <a href="https://www.instagram.com/mobisec_"
                 className="text-neutral-600 hover:text-primary text-xl"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 "
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
            </div>
          </div>

          <div className="lg:w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
