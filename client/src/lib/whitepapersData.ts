// lib/whitepapersData.ts
import wp1 from "@/assets/whitepaper/wp1.png";
export const whitepapers = [
  {
    id: "mdm-operations",
    slug: "unlocking-business-potential",
    title: "Unlocking Business Potential: How Mobile Device Management Solutions Transform Operations",
    heroSubtitle: "Discover how Mobile Device Management solutions optimize operations, enhance security, and drive cost-efficiency.",
    heroImage: wp1,
    type: "Whitepaper",
    highlights: [
      "Secure corporate and personal mobile devices",
      "Ensure compliance with GDPR, HIPAA, and PCI DSS",
      "Cut IT and mobility costs by up to 50%",
      "Improve employee productivity and BYOD flexibility",
      "Seamlessly integrate with IT infrastructure",
      "Future-proof your mobile security posture"
    ],
    sections: [
      {
        title: "The Significance of MDM in Enhancing Corporate Security",
        content: `Mobile Device Management (MDM) is pivotal in fortifying corporate security...`
      },
      {
        title: "Cost-Effectiveness and Efficiency Gains Through MDM",
        content: `MDM helps reduce IT overhead, prevent data breaches, and optimize device use...`
      },
      {
        title: "MDM's Role in Compliance and Regulatory Adherence",
        content: `MDM ensures compliance with GDPR, HIPAA, PCI DSS through centralized policy control...`
      },
      {
        title: "Improving Employee Productivity and Work Flexibility",
        content: `MDM simplifies access to tools, streamlines collaboration, and supports hybrid work...`
      }
    ],
    downloadForm: {
      enabled: true
    }
  }
];
