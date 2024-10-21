import * as React from "react";
import { StyleSheet } from "react-nativescript";

export function POS() {
  const [items, setItems] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  const addItem = (item) => {
    setItems([...items, item]);
    setTotal(total + item.price);
  };

  return (
    <gridLayout rows="*, auto" style={styles.container}>
      <scrollView row="0">
        {/* Display items here */}
        {items.map((item, index) => (
          <label key={index} text={`${item.name} - $${item.price}`} style={styles.item} />
        ))}
      </scrollView>
      <stackLayout row="1" style={styles.footer}>
        <label text={`Total: $${total.toFixed(2)}`} style={styles.total} />
        <button text="Checkout" style={styles.button} onTap={() => console.log("Checkout")} />
      </stackLayout>
    </gridLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    fontSize: 16,
    marginBottom: 10,
  },
  footer: {
    marginTop: 20,
  },
  total: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    fontSize: 18,
    color: "white",
    backgroundColor: "#65adf1",
    padding: 10,
  },
});