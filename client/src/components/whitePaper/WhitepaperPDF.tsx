import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

interface WhitepaperSection {
  heading: string;
  paragraphs: string[];
}

interface WhitepaperContent {
  title: string;
  authorInfo?: string;
  sections: WhitepaperSection[];
  submittedBy?: {
    firstName?: string;
    lastName?: string;
    email?: string;
  };
}

const styles = StyleSheet.create({
  page: { padding: 40, fontSize: 12, lineHeight: 1.6 },
  title: { fontSize: 18, marginBottom: 10, fontWeight: "bold", color: "#1d4ed8" },
  meta: { fontSize: 10, marginBottom: 20, color: "#6b7280" },
  heading: { fontSize: 14, marginBottom: 6, fontWeight: "bold" },
  paragraph: { marginBottom: 8 },
  section: { marginBottom: 20 },
});

const WhitepaperPDF = ({ data }: { data: WhitepaperContent }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>{data.title}</Text>
      {data.submittedBy && (
        <Text style={styles.meta}>
          Submitted by: {data.submittedBy.firstName} {data.submittedBy.lastName} ({data.submittedBy.email})
        </Text>
      )}
      {data.authorInfo && <Text style={styles.meta}>Prepared by: {data.authorInfo}</Text>}

      {data.sections.map((section, idx) => (
        <View style={styles.section} key={idx}>
          <Text style={styles.heading}>{section.heading}</Text>
          {section.paragraphs.map((para, pidx) => (
            <Text key={pidx} style={styles.paragraph}>{para}</Text>
          ))}
        </View>
      ))}
    </Page>
  </Document>
);

export default WhitepaperPDF;
