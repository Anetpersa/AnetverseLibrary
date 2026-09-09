import { FlatList } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { getAllBooks } from "@/lib/database";

export default function HomeScreen() {
  const books = getAllBooks();

  return (
    <ThemedView style={{ flex: 1, padding: 16, paddingTop: 60 }}>
      <ThemedText type="title" style={{ marginBottom: 16 }}>
        Moja biblioteka
      </ThemedText>

      {books.length === 0 ? (
        <ThemedText>Nemaš još nijednu knjigu. Dodaj prvu!</ThemedText>
      ) : (
        <FlatList
          data={books}
          keyExtractor={(item: any) => item.id.toString()}
          renderItem={({ item }: any) => (
            <ThemedView style={{ paddingVertical: 8 }}>
              <ThemedText type="defaultSemiBold">{item.title}</ThemedText>
              <ThemedText>{item.author}</ThemedText>
            </ThemedView>
          )}
        />
      )}
    </ThemedView>
  );
}
