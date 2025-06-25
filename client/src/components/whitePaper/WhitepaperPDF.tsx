// components/whitePaper/WhitepaperPDF.tsx
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Helvetica",
    fontSize: 11,
    lineHeight: 1.6,
    color: "#1f2937",
  },
  h1: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#1d4ed8",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
    color: "#6b7280",
  },
  tocTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 24,
    marginBottom: 10,
    color: "#111827",
    textDecoration: "underline",
  },
  h2: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color: "#111827",
  },
  h3: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 14,
    marginBottom: 6,
    color: "#2563eb",
  },
  paragraph: {
    marginBottom: 8,
    textAlign: "justify",
  },
  bullet: {
    marginLeft: 14,
    marginBottom: 6,
  },
  footer: {
    marginTop: 30,
    borderTop: "1 solid #d1d5db",
    paddingTop: 10,
    fontSize: 10,
    color: "#6b7280",
    textAlign: "center",
  },
});

const WhitepaperPDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.h1}>Comprehensive Guide to Mobile Device Security</Text>
      <Text style={styles.subtitle}>Secure, Manage & Optimize Mobility Across Industries</Text>

      <Text style={styles.h2}>Executive Summary</Text>
      <Text style={styles.paragraph}>
        Mobile devices have become indispensable tools for enterprises across industries. However, their widespread adoption introduces unique security challenges that require robust solutions. This whitepaper explores the importance of mobile device security, outlines key components of an effective Mobile Device Management (MDM) strategy, and provides actionable insights tailored for industries such as BFSI, defence forces, and educational institutions.
      </Text>

      <Text style={styles.tocTitle}>Table of Contents</Text>
      <Text style={styles.bullet}>1. Introduction</Text>
      <Text style={styles.bullet}>2. The Importance of Mobile Device Security</Text>
      <Text style={styles.bullet}>3. Core Components of an Effective MDM Strategy</Text>
      <Text style={styles.bullet}>4. Industry-Specific Use Cases</Text>
      <Text style={styles.bullet}>   • BFSI Sector</Text>
      <Text style={styles.bullet}>   • Defence Forces</Text>
      <Text style={styles.bullet}>   • Educational Institutions</Text>
      <Text style={styles.bullet}>5. Best Practices for Implementing MDM Solutions</Text>
      <Text style={styles.bullet}>6. Conclusion</Text>

      <Text style={styles.h2}>1. Introduction</Text>
      <Text style={styles.paragraph}>
        In today's digital-first world, mobile devices are integral to enterprise operations. From enabling remote work to streamlining communication, their benefits are undeniable. However, the growing reliance on mobile technology comes with significant risks:
      </Text>
      <Text style={styles.bullet}>• Increased vulnerability to cyber threats such as phishing attacks and malware.</Text>
      <Text style={styles.bullet}>• Challenges in maintaining regulatory compliance across industries like BFSI and healthcare.</Text>
      <Text style={styles.bullet}>• Complexities in managing diverse device fleets ranging from corporate-owned to BYOD (Bring Your Own Device).</Text>
      <Text style={styles.paragraph}>This whitepaper aims to provide a comprehensive guide to securing enterprise mobile environments using advanced MDM solutions like MobiHeal MDM.</Text>

      <Text style={styles.h2}>2. The Importance of Mobile Device Security</Text>
      <Text style={styles.h3}>Growing Cybersecurity Threats</Text>
      <Text style={styles.bullet}>• Phishing Scams: Deceptive emails or messages tricking users into revealing sensitive information.</Text>
      <Text style={styles.bullet}>• Malware: Malicious software compromising device functionality or stealing data.</Text>
      <Text style={styles.bullet}>• Device Theft: Loss or theft of physical devices leading to unauthorized access.</Text>
      <Text style={styles.h3}>Regulatory Compliance Requirements</Text>
      <Text style={styles.paragraph}>Industries such as BFSI and healthcare operate under stringent regulations like GDPR and HIPAA. Non-compliance can result in hefty fines and reputational damage.</Text>
      <Text style={styles.h3}>Remote Work Challenges</Text>
      <Text style={styles.paragraph}>The global shift towards remote work has increased reliance on mobile devices for accessing corporate resources remotely. Without proper security measures, organizations face heightened risks of data breaches.</Text>

      <Text style={styles.h2}>3. Core Components of an Effective MDM Strategy</Text>
      <Text style={styles.h3}>Secure Device Enrollment Methods</Text>
      <Text style={styles.bullet}>• QR Code Enrollment: Simplifies setup by scanning QR codes containing predefined configurations.</Text>
      <Text style={styles.bullet}>• Zero-Touch Enrollment: Automatically configures Android Enterprise devices upon activation.</Text>
      <Text style={styles.h3}>Robust Security Policies Enforcement</Text>
      <Text style={styles.bullet}>• Password complexity requirements.</Text>
      <Text style={styles.bullet}>• Data encryption standards.</Text>
      <Text style={styles.bullet}>• Remote lock/wipe capabilities for lost or stolen devices.</Text>
      <Text style={styles.h3}>Application Management & Control</Text>
      <Text style={styles.bullet}>• Whitelisting approved business apps.</Text>
      <Text style={styles.bullet}>• Blacklisting unauthorized apps.</Text>
      <Text style={styles.bullet}>• Containerization separating personal and corporate data.</Text>
      <Text style={styles.h3}>Continuous Compliance Monitoring & Reporting</Text>
      <Text style={styles.bullet}>• Real-time alerts for non-compliant devices.</Text>
      <Text style={styles.bullet}>• Automated reporting simplifying audit preparation.</Text>

      <Text style={styles.h2}>4. Industry-Specific Use Cases</Text>
      <Text style={styles.h3}>BFSI Sector</Text>
      <Text style={styles.bullet}>• Geo-Fencing restricts device usage within branch premises only.</Text>
      <Text style={styles.bullet}>• Encryption safeguards financial transactions conducted via mobile banking apps.</Text>
      <Text style={styles.h3}>Defence Forces</Text>
      <Text style={styles.bullet}>• Remote wipe functionalities ensure immediate data erasure if a device is compromised.</Text>
      <Text style={styles.bullet}>• Geo-Fencing restricts device usage within secure military bases or operational zones.</Text>
      <Text style={styles.h3}>Educational Institutions</Text>
      <Text style={styles.bullet}>• Kiosk Mode restricts student tablets exclusively to educational apps during school hours.</Text>
      <Text style={styles.bullet}>• Centralized app deployment ensures uniformity across all student devices instantly.</Text>

      <Text style={styles.h2}>5. Best Practices for Implementing MDM Solutions</Text>
      <Text style={styles.bullet}>1. Define Organizational Objectives</Text>
      <Text style={styles.bullet}>2. Educate Employees</Text>
      <Text style={styles.bullet}>3. Regularly Review Policies</Text>
      <Text style={styles.bullet}>4. Leverage Advanced Analytics</Text>

      <Text style={styles.h2}>6. Conclusion</Text>
      <Text style={styles.paragraph}>Implementing a robust Mobile Device Management strategy is critical for enterprises aiming to secure sensitive corporate assets while addressing evolving cybersecurity challenges effectively. By leveraging advanced features offered by solutions like MobiHeal MDM, organizations can confidently achieve operational efficiency while maintaining continuous regulatory compliance.</Text>
      <Text style={styles.paragraph}>Ready to transform your organization's mobile security strategy? Request a demo today!</Text>

      <Text style={styles.footer}>© 2025 MobiHeal Technologies. All rights reserved. | www.mobiheal.com | info@mobiheal.com</Text>
    </Page>
  </Document>
);

export default WhitepaperPDF;
