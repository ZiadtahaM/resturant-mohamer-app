import React from "react";
import { SafeAreaView, Text, FlatList, View, StyleSheet } from "react-native";

const MENU = [
  { id: "1", name: "Burger", price: 10 },
  { id: "2", name: "Fries", price: 5 },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Restaurant Mohamer</Text>
      <FlatList
        data={MENU}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
            <Text>${item.price}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  item: { flexDirection: "row", justifyContent: "space-between", padding: 12, borderBottomWidth: 1 }
});

