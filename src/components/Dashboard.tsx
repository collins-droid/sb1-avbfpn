import * as React from "react";
import { StyleSheet } from "react-nativescript";

export function Dashboard() {
  return (
    <scrollView style={styles.container}>
      <label style={styles.title}>Dashboard</label>
      <gridLayout columns="*, *" rows="auto, auto" style={styles.statsGrid}>
        <label text="Total Sales" col="0" row="0" style={styles.statLabel} />
        <label text="$10,000" col="1" row="0" style={styles.statValue} />
        <label text="Total Orders" col="0" row="1" style={styles.statLabel} />
        <label text="50" col="1" row="1" style={styles.statValue} />
      </gridLayout>
      {/* Add more stats and charts as needed */}
    </scrollView>
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
  statsGrid: {
    marginBottom: 20,
  },
  statLabel: {
    fontSize: 16,
    color: "gray",
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
  },
});