import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface Props {
  placeholder: string;
  onPress?: () => void;
  value: string;
  onChangeText: (text: string) => void;
}

const SearchBar = ({ placeholder, onPress, value, onChangeText }: Props) => {
  return (
    <View className="flex-row items-center bg-secondary rounded-full py-2 inset-shadow-lg inset-shadow-black mt-2 mb-2">
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#9ca3af"
        className="flex-1 ml-2 text-white"
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
