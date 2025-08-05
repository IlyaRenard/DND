import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
  title: string;
  onPress?: () => void;
  isActive: boolean;
}

const ActivityTabs = ({ title, onPress, isActive = false }: Props) => {
  return (
    <TouchableOpacity
      className={`w-[33%] h-full items-center rounded-2xl ${isActive ? "bg-white" : "bg-transparent"} `}
      onPress={onPress}
    >
      <Text
        className={`text-center  ${isActive ? "text-black" : "text-gray-400"} `}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ActivityTabs;

const styles = StyleSheet.create({});
