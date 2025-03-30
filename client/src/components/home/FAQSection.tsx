import { Link } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is Mobile Device Management (MDM)?",
      answer: "MDM is a type of security software that enables IT administrators to control, secure, and enforce policies on employee smartphones, tablets, and other devices. It allows organizations to ensure that corporate data is protected, regardless of where the device is located."
    },
    {
      question: "How does SecureMDM protect corporate data?",
      answer: "SecureMDM protects corporate data through multiple layers of security, including device encryption, application management, secure containers, data loss prevention policies, and remote wipe capabilities. These features ensure sensitive information remains protected, even if a device is lost or stolen."
    },
    {
      question: "Can I manage both iOS and Android devices?",
      answer: "Yes, SecureMDM provides comprehensive support for both iOS and Android devices, allowing you to manage your entire fleet from a single console regardless of operating system. Our platform also supports Windows and macOS devices for complete endpoint management."
    },
    {
      question: "What is the difference between BYOD and corporate-owned device management?",
      answer: "BYOD (Bring Your Own Device) management focuses on separating work and personal data on employee-owned devices through containerization, ensuring corporate security without compromising user privacy. Corporate-owned device management provides more comprehensive control over company-owned devices, with full management of device settings, applications, and security policies."
    },
    {
      question: "How do I deploy SecureMDM to my organization?",
      answer: "Deployment is simple with multiple enrollment options including QR code scanning, email invitations, or zero-touch enrollment for corporate devices. Our team provides comprehensive onboarding support to ensure a smooth implementation, including configuration assistance, policy setup, and user training."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-800">Frequently Asked Questions</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Find answers to common questions about our MDM solution.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-neutral-200 rounded-lg"
                itemscope 
                itemprop="mainEntity" 
                itemtype="https://schema.org/Question"
              >
                <AccordionTrigger className="px-5 py-4 text-left font-medium text-neutral-800 hover:no-underline hover:text-primary" itemprop="name">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-4 pt-0 text-neutral-600" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                  <div itemprop="text">
                    <p>{faq.answer}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <Link href="/faq" className="inline-flex items-center text-primary hover:text-primary-dark font-medium">
              View all FAQs
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
                className="ml-1 h-4 w-4"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
