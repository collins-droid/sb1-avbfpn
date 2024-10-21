import * as React from "react";
import { StyleSheet } from "react-nativescript";

export function Dispatch() {
  const [orders, setOrders] = React.useState([]);

  React.useEffect(() => {
    // TODO: Fetch orders from API
    // For now, we'll use dummy data
    setOrders([
      { id: 1, customer: "John Doe", status: "Pending" },
      { id: 2, customer: "Jane Smith", status: "In Transit" },
    ]);
  }, []);

  return (
    <flexboxLayout style={styles.container}>
      <label style={styles.title}>Dispatch Dashboard</label>
      <listView items={orders} style={styles.list}>
        <listView.itemTemplate>
          <gridLayout columns="*, auto" rows="auto, auto">
            <label text="{{ customer }}" col="0" row="0" style={styles.customerName} />
            <label text="{{ status }}" col="1" row="0" style={styles.status} />
            <button text="Update Status" col="0" row="1" colSpan="2" style={styles.updateButton} onTap={() => console.log("Update status")} />
          </gridLayout>
        </listView.itemTemplate>
      </listView>
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
  status: {
    fontSize: 14,
    color: "gray",
  },
  updateButton: {
    fontSize: 14,
    color: "white",
    backgroundColor: "#65adf1",
    padding: 5,
    marginTop: 5,
  },
});