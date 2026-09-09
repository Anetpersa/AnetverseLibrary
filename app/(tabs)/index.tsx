import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { getAllBooks } from "@/lib/database";
import { router, usePathname } from "expo-router";
import { useEffect, useState } from "react";
import { Button, FlatList } from "react-native";

export default function HomeScreen() {
  const [books, setBooks] = useState<any[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    setBooks(getAllBooks());
  }, [pathname]);

  return (
    <ThemedView style={{ flex: 1, padding: 16, paddingTop: 60 }}>
      <ThemedText type="title" style={{ marginBottom: 16 }}>
        Moja biblioteka
      </ThemedText>

      <Button title="Dodaj knjigu" onPress={() => router.push("/add-book")} />

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
