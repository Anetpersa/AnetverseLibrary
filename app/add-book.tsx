import { router } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, TextInput } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { addBook } from "@/lib/database";

export default function AddBookScreen() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  function handleSave() {
    if (title.trim() === "") {
      alert("Naslov je obavezan!");
      return;
    }
    addBook(title, author);
    router.back();
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.label}>
        Nova knjiga
      </ThemedText>

      <ThemedText style={styles.label}>Naslov</ThemedText>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Unesi naslov knjige"
        placeholderTextColor="#888"
      />

      <ThemedText style={styles.label}>Autor</ThemedText>
      <TextInput
        style={styles.input}
        value={author}
        onChangeText={setAuthor}
        placeholder="Unesi autora"
        placeholderTextColor="#888"
      />

      <Button title="Sačuvaj knjigu" onPress={handleSave} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 60,
  },
  label: {
    marginTop: 12,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: "#888",
    borderRadius: 8,
    padding: 10,
    color: "#fff",
  },
});
