import SpellCard from "@/components/SpellCard";
import { images } from "@/constants/images";
import { fetchSpells } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import React from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const spells = () => {
  const router = useRouter();
  const {
    data: spellsData,
    loading: spellsLoading,
    error: spellsError,
  } = useFetch(() => fetchSpells({ query: "" }));
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full h-full z-0" />
      <ScrollView
        className="flex-1 px-5"
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
          <View className="flex-1 mt-10">
            <>
              <Text className="text-lg text-white font-bold mt-5 mb-3">
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

export default spells;

const styles = StyleSheet.create({});
