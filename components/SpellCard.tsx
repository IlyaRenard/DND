import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const SpellCard = ({ index, name, level, url }: spell) => {
  return (
    <Link href={`/spells/${url}`} asChild>
      <TouchableOpacity className="flex flex-row justify-between items-center mt-2 border-t border-gray-500 mx-4">
        <Text className="text-xl text-white p-2" numberOfLines={1}>
          {name}
        </Text>
        <Text className="text-xl text-white p-2">Type</Text>
      </TouchableOpacity>
    </Link>
  );
};

export default SpellCard;

const styles = StyleSheet.create({});
