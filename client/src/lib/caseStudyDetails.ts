import { CaseStudy } from "./data";

export interface CaseStudyDetail extends CaseStudy {
  challenges: {
    title: string;
    description: string;
  }[];
  solution: {
    title: string;
    features: string[];
    icon: string;
  }[];
  testimonials: {
    quote: string;
    author: string;
    position: string;
    company: string;
    image: string;
  }[];
  relatedCaseStudies: string[]; // Array of slugs for related case studies
}

export const caseStudyDetails: Record<string, CaseStudyDetail> = {
  "preventing-mobile-fraud-banking": {
    title: "Preventing Mobile Fraud in Banking: How MDM Reduced Unauthorized Transactions by 60%",
    summary: "A multinational bank faced escalating mobile fraud incidents, including phishing scams, account takeovers, and unauthorized transactions. After deploying MobiHeal MDM, the bank reduced fraudulent activities by 60%, achieved 100% PCI-DSS compliance, and enhanced customer trust.",
    imageSrc: "/images/case-studies/banking-fraud.jpg",
    tags: ["Banking & Financial Services", "Security", "Fraud Prevention"],
    results: [
      { stat: "60%", label: "Reduction in monthly fraud incidents" },
      { stat: "100%", label: "PCI-DSS compliance achieved" },
      { stat: "95%", label: "Customer retention rate" }
    ],
    slug: "preventing-mobile-fraud-banking",
    challenges: [
      {
        title: "Rising Fraud Rates",
        description: "15% month-over-month increase in unauthorized mobile transactions"
      },
      {
        title: "Regulatory Pressure",
        description: "Non-compliance with PCI-DSS and GDPR due to insecure mobile banking apps"
      },
      {
        title: "Customer Attrition",
        description: "20% of fraud victims switched to competitors"
      }
    ],
    solution: [
      {
        title: "Geo-Fencing for Transaction Authorization",
        features: [
          "Restricted high-risk transactions to pre-approved locations like branch offices",
          "Triggered multi-factor authentication (MFA) for transactions outside authorized zones",
          "Real-time location verification for high-value transactions"
        ],
        icon: "map-pin"
      },
      {
        title: "Real-Time Anomaly Detection",
        features: [
          "AI-driven algorithms analyzed transaction patterns, flagging deviations",
          "Integrated with SIEM tools to block suspicious activities within seconds",
          "Machine learning models adapted to new fraud patterns"
        ],
        icon: "shield"
      },
      {
        title: "Secure BYOD Management",
        features: [
          "Enforced Work Profile Containerization to isolate corporate apps from personal data",
          "Automatically revoked access for devices with jailbroken OS or outdated security patches",
          "Remote wipe capability for compromised devices"
        ],
        icon: "smartphone"
      }
    ],
    testimonials: [
      {
        quote: "MobiHeal MDM has transformed our mobile security posture. The fraud reduction metrics speak for themselves.",
        author: "Sarah Chen",
        position: "Chief Security Officer",
        company: "Global Banking Corp",
        image: "/images/testimonials/sarah-chen.jpg"
      }
    ],
    relatedCaseStudies: [
      "securing-healthcare-data",
      "securing-healthcare-data-2",
      "retail-mobile-security"
    ]
  },
  "securing-healthcare-data": {
    title: "Securing Healthcare Data: How a Hospital Network Protected Patient Information",
    summary: "A major hospital network implemented MobiHeal MDM to secure patient data across mobile devices, achieving HIPAA compliance and reducing data breach risks.",
    imageSrc: "/images/case-studies/healthcare-security.jpg",
    tags: ["Healthcare", "Data Protection", "HIPAA Compliance"],
    results: [
      { stat: "100%", label: "HIPAA compliance achieved" },
      { stat: "75%", label: "Reduction in security incidents" },
      { stat: "90%", label: "Staff adoption rate" }
    ],
    slug: "securing-healthcare-data",
    challenges: [
      {
        title: "HIPAA Compliance",
        description: "Struggling to meet HIPAA requirements for mobile device security"
      },
      {
        title: "Data Breach Risks",
        description: "Multiple incidents of unauthorized access to patient records"
      },
      {
        title: "Staff Training",
        description: "Difficulty in training medical staff on security protocols"
      }
    ],
    solution: [
      {
        title: "Data Encryption",
        features: [
          "End-to-end encryption for all patient data",
          "Secure file sharing between medical staff",
          "Automatic encryption for sensitive documents"
        ],
        icon: "lock"
      },
      {
        title: "Access Control",
        features: [
          "Role-based access control for medical staff",
          "Biometric authentication for sensitive data",
          "Session timeout for inactive devices"
        ],
        icon: "key"
      },
      {
        title: "Compliance Monitoring",
        features: [
          "Real-time compliance status dashboard",
          "Automated audit trail generation",
          "Regular security posture reports"
        ],
        icon: "clipboard-check"
      }
    ],
    testimonials: [
      {
        quote: "MobiHeal MDM has made HIPAA compliance achievable while maintaining our focus on patient care.",
        author: "Dr. Michael Rodriguez",
        position: "Chief Medical Information Officer",
        company: "Metro Health Network",
        image: "/images/testimonials/michael-rodriguez.jpg"
      }
    ],
    relatedCaseStudies: [
      "preventing-mobile-fraud-banking",
      "retail-mobile-security"
    ]
  },
  "securing-healthcare-data-2": {
    title: "Securing Healthcare Data: How a Hospital Network Protected Patient Information",
    summary: "A major hospital network implemented MobiHeal MDM to secure patient data across mobile devices, achieving HIPAA compliance and reducing data breach risks.",
    imageSrc: "/images/case-studies/healthcare-security.jpg",
    tags: ["Healthcare", "Data Protection", "HIPAA Compliance"],
    results: [
      { stat: "100%", label: "HIPAA compliance achieved" },
      { stat: "75%", label: "Reduction in security incidents" },
      { stat: "90%", label: "Staff adoption rate" }
    ],
    slug: "securing-healthcare-data-2",
    challenges: [
      {
        title: "HIPAA Compliance",
        description: "Struggling to meet HIPAA requirements for mobile device security"
      },
      {
        title: "Data Breach Risks",
        description: "Multiple incidents of unauthorized access to patient records"
      },
      {
        title: "Staff Training",
        description: "Difficulty in training medical staff on security protocols"
      }
    ],
    solution: [
      {
        title: "Data Encryption",
        features: [
          "End-to-end encryption for all patient data",
          "Secure file sharing between medical staff",
          "Automatic encryption for sensitive documents"
        ],
        icon: "lock"
      },
      {
        title: "Access Control",
        features: [
          "Role-based access control for medical staff",
          "Biometric authentication for sensitive data",
          "Session timeout for inactive devices"
        ],
        icon: "key"
      },
      {
        title: "Compliance Monitoring",
        features: [
          "Real-time compliance status dashboard",
          "Automated audit trail generation",
          "Regular security posture reports"
        ],
        icon: "clipboard-check"
      }
    ],
    testimonials: [
      {
        quote: "MobiHeal MDM has made HIPAA compliance achievable while maintaining our focus on patient care.",
        author: "Dr. Michael Rodriguez",
        position: "Chief Medical Information Officer",
        company: "Metro Health Network",
        image: "/images/testimonials/michael-rodriguez.jpg"
      }
    ],
    relatedCaseStudies: [
      "preventing-mobile-fraud-banking",
      "retail-mobile-security",
      "securing-healthcare-data"
    ]
  }
}; 