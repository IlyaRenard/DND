import SpellCard from "@/components/SpellCard";
import { fetchSpells } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Spells = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const {
    data: spellsData,
    loading: spellsLoading,
    error: spellsError,
    refetch: loadSpells,
    reset,
  } = useFetch(() => fetchSpells({ query: searchQuery }));

  // useEffect(() => {
  //   const func = async () => {
  //     if (searchQuery.trim()) {
  //       await loadSpells();
  //     } else {
  //       reset();
  //     }
  //   };

  //   func();
  // }, [searchQuery]);

  return (
    <View>
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: 10,
        }}
      >
        {spellsLoading ? (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            className="mt-10 self-center"
          />
        ) : spellsError ? (
          <Text>Error: {spellsError?.message}</Text>
        ) : (
          <View className="flex-1">
            <>
              <Text className="text-lg text-white font-bold mb-3">
                All spells
              </Text>
              <FlatList
                data={spellsData}
                renderItem={({ item }) => <SpellCard {...item} />}
                keyExtractor={(item) => item.index.toString()}
                className="mt-2 pb-32"
                scrollEnabled={false}
              />
            </>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Spells;

const styles = StyleSheet.create({});
