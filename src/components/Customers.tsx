import * as React from "react";
import { StyleSheet } from "react-nativescript";

export function Customers() {
  const [customers, setCustomers] = React.useState([]);

  React.useEffect(() => {
    // TODO: Fetch customers from API
    // For now, we'll use dummy data
    setCustomers([
      { id: 1, name: "John Doe", email: "john@example.com" },
      { id: 2, name: "Jane Smith", email: "jane@example.com" },
    ]);
  }, []);

  return (
    <flexboxLayout style={styles.container}>
      <label style={styles.title}>Customers</label>
      <listView items={customers} style={styles.list}>
        <listView.itemTemplate>
          <stackLayout>
            <label text="{{ name }}" style={styles.customerName} />
            <label text="{{ email }}" style={styles.customerEmail} />
          </stackLayout>
        </listView.itemTemplate>
      </listView>
      <button text="Add New Customer" style={styles.button} onTap={() => console.log("Add new customer")} />
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
  customerName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  customerEmail: {
    fontSize: 14,
    color: "gray",
  },
  button: {
    fontSize: 18,
    color: "white",
    backgroundColor: "#65adf1",
    padding: 10,
    marginTop: 20,
  },
});