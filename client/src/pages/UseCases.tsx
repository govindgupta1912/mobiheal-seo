import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const UseCases = () => {
  const [activeTab, setActiveTab] = useState("kiosk");

  const useCases = {
    kiosk: {
      id: "kiosk",
      title: "Kiosk Mode Management",
      description: "Transform standard devices into dedicated-purpose terminals with our advanced kiosk mode. Perfect for customer-facing applications in retail, hospitality, healthcare, and financial services.",
      features: [
        "Single or multi-app configurations for different use cases",
        "Custom branding and UI restriction options",
        "Remote troubleshooting and device maintenance",
        "Scheduled content updates and device reboots",
        "Touchscreen and hardware button restrictions",
        "Automatic updates during off-hours",
        "Screen timeout and power management controls",
        "Custom splash screens and branding options"
      ],
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=450&q=80",
      industries: [
        { name: "Banking & Financial Services", description: "Secure customer-facing terminals and ATM interfaces" },
        { name: "Healthcare", description: "Patient check-in kiosks and medical information displays" },
        { name: "Retail", description: "Point-of-sale systems and product browsing stations" },
        { name: "Restaurants", description: "Self-ordering kiosks and menu displays" }
      ]
    },
    corporate: {
      id: "corporate",
      title: "Corporate-Owned Device Management",
      description: "Take complete control of company-owned devices with full management capabilities for maximum security and productivity.",
      features: [
        "Zero-touch enrollment for faster deployment",
        "Comprehensive policy enforcement and compliance",
        "Advanced security controls and monitoring",
        "Complete device lifecycle management",
        "Detailed inventory and asset tracking",
        "Remote support and diagnostics",
        "Software license management",
        "Corporate data backup and recovery"
      ],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=450&q=80",
      industries: [
        { name: "Enterprise Corporations", description: "Complete fleet management for all company devices" },
        { name: "Field Services", description: "Specialized tools for mobile workforce devices" },
        { name: "Government & Public Sector", description: "High-security configurations for sensitive data" },
        { name: "Logistics & Transportation", description: "Tracking and management for delivery devices" }
      ]
    },
    byod: {
      id: "byod",
      title: "Bring Your Own Device (BYOD)",
      description: "Enable secure use of personal devices in the workplace with our privacy-focused work profile solution.",
      features: [
        "Separate work and personal data with containerization",
        "Protect employee privacy while securing corporate data",
        "Selective remote wipe options for work data only",
        "Simple enrollment process via QR code or email",
        "User privacy controls and transparency",
        "Seamless access to corporate resources",
        "Work/personal app separation",
        "Compliance without compromising user experience"
      ],
      image: "https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=450&q=80",
      industries: [
        { name: "Professional Services", description: "Secure client data on personal devices" },
        { name: "Education", description: "Faculty and staff accessing school resources remotely" },
        { name: "Technology", description: "Developer-friendly policies with security controls" },
        { name: "Consulting", description: "On-the-go access to company resources" }
      ]
    }
  };

  const activeCase = useCases[activeTab as keyof typeof useCases];

  return (
    <>
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              MDM Use Cases
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              Our mobile device management solution adapts to multiple deployment scenarios across various industries.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="kiosk" className="w-full" onValueChange={setActiveTab}>
            <div className="mb-12 flex justify-center">
              <TabsList className="bg-neutral-100">
                <TabsTrigger value="kiosk" id="kiosk">Kiosk Mode</TabsTrigger>
                <TabsTrigger value="corporate" id="corporate">Corporate-Owned</TabsTrigger>
                <TabsTrigger value="byod" id="byod">BYOD</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value={activeTab} className="mt-0 animation-fade-in">
              <div className="flex flex-col md:flex-row items-start gap-12">
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-6 text-neutral-800">{activeCase.title}</h2>
                  <p className="text-neutral-600 mb-8 text-lg">
                    {activeCase.description}
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-4 text-neutral-800">Key Features</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                    {activeCase.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckIcon className="text-green-500 mt-1 mr-2 h-4 w-4" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-neutral-800">Target Industries</h3>
                  <div className="space-y-4 mb-8">
                    {activeCase.industries.map((industry, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg border border-neutral-100">
                        <h4 className="font-medium text-neutral-800">{industry.name}</h4>
                        <p className="text-neutral-600 text-sm">{industry.description}</p>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="mt-4" asChild>
                    <Link href="/contact">Get Started with {activeCase.title}</Link>
                  </Button>
                </div>
                
                <div className="md:w-1/2 mt-8 md:mt-0">
                  <div
                    className="rounded-lg shadow-lg overflow-hidden w-full"
                    style={{
                      height: "450px",
                      backgroundImage: `url('${activeCase.image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center"
                    }}
                  />
                  
                  <div className="bg-white p-6 mt-6 rounded-lg border border-neutral-200">
                    <h3 className="text-xl font-semibold mb-4 text-neutral-800">Success Story</h3>
                    <blockquote className="border-l-4 border-primary pl-4 italic text-neutral-600 mb-4">
                      {activeTab === "kiosk" && "We deployed 500 kiosk-mode tablets across 120 retail locations in just two weeks. Customer engagement increased by 27% and the self-service options reduced wait times significantly."}
                      {activeTab === "corporate" && "After implementing corporate device management, we reduced security incidents by 78% and cut IT support tickets related to mobile devices by more than half."}
                      {activeTab === "byod" && "Our BYOD program has seen a 94% employee satisfaction rate while maintaining complete security compliance. It's the perfect balance of flexibility and control."}
                    </blockquote>
                    <div className="text-right text-sm text-neutral-500">
                      {activeTab === "kiosk" && "— National Retail Chain CIO"}
                      {activeTab === "corporate" && "— Fortune 500 CISO"}
                      {activeTab === "byod" && "— Healthcare System IT Director"}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-neutral-800">Ready to implement these solutions in your organization?</h2>
          <p className="text-neutral-600 mb-8">
            Our team of MDM experts can help you determine the right approach for your specific business needs.
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

export default UseCases;
