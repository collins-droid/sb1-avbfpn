import * as React from "react";
import { StyleSheet } from "react-nativescript";

export function Quotations() {
  const [quotations, setQuotations] = React.useState([]);

  React.useEffect(() => {
    // TODO: Fetch quotations from API
    // For now, we'll use dummy data
    setQuotations([
      { id: 1, customer: "John Doe", total: 1000 },
      { id: 2, customer: "Jane Smith", total: 1500 },
    ]);
  }, []);

  return (
    <flexboxLayout style={styles.container}>
      <label style={styles.title}>Quotations</label>
      <listView items={quotations} style={styles.list}>
        <listView.itemTemplate>
          <label text="{{ customer + ' - $' + total }}" style={styles.item} />
        </listView.itemTemplate>
      </listView>
      <button text="Create New Quotation" style={styles.button} onTap={() => console.log("Create new quotation")} />
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  list: {
    flex: 1,
  },
  item: {
    fontSize: 16,
    padding: 10,
  },
  button: {
    fontSize: 18,
    color: "white",
    backgroundColor: "#65adf1",
    padding: 10,
    marginTop: 20,
  },
});