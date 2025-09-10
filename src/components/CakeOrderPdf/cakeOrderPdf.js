import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

// Style
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
    padding: 30,
    fontSize: 12,
    fontFamily: 'Helvetica',
  },
  header: {
    fontSize: 22,
    marginBottom: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#d6336c',
  },
  section: {
    marginBottom: 20,
    padding: 12,
    border: '1pt solid #f3c4d3',
    borderRadius: 8,
    backgroundColor: '#fff0f6',
  },
  sectionTitle: {
    fontSize: 14,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#a61e4d',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  img: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 4,
  },
  label: {
    fontWeight: 'bold',
    color: '#555',
    width: 120,
  },
  value: {
    flex: 1,
    color: '#222',
  },
  footer: {
    marginTop: 40,
    fontSize: 10,
    textAlign: 'center',
    color: '#777',
  },
});

// Helper do renderowania elementu z obrazkiem i podpisem
const RowWithImage = ({ label, data }) => {
  if (!data) {
    return (
      <View style={styles.row}>
        <Text style={styles.label}>{label}:</Text>
        <Text style={styles.value}>Nie wybrano</Text>
      </View>
    );
  }

  return (
    <View style={styles.row}>
      {data.src && <Image src={data.src} style={styles.img} />}
      <Text style={styles.label}>{label}:</Text>
      <Text style={styles.value}>{data.label ?? "Nie wybrano"}</Text>
    </View>
  );
};

// Komponent PDF
const CakeOrderPdf = ({ orderData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.header}>🍰 Podsumowanie zamówienia tortu</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ciasto</Text>
        <RowWithImage label="Biszkopt" data={orderData.spongeType} />
        <RowWithImage label="Kolor biszkoptu" data={orderData.spongeColor} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Nadzienie</Text>
        <RowWithImage label="Rodzaj nadzienia" data={orderData.fillingKind} />
        <RowWithImage label="Smak nadzienia" data={orderData.fillingFlavor} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Krem</Text>
        <RowWithImage label="Rodzaj kremu" data={orderData.creamKind} />
        <RowWithImage label="Kolor kremu" data={orderData.creamColor} />
        <RowWithImage label="Smak kremu" data={orderData.creamFlavor} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dekoracja</Text>
        <RowWithImage label="Lukier" data={orderData.frosting} />
        <RowWithImage label="Kolor lukru" data={orderData.frostingColor} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dane kontaktowe</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{orderData.email}</Text>
        </View>
      </View>

      <Text style={styles.footer}>
        Dziękujemy za zamówienie! 🎂 Skontaktujemy się z Tobą w celu potwierdzenia szczegółów.
      </Text>
    </Page>
  </Document>
);

export default CakeOrderPdf;
