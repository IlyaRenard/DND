import React from "react";
import { StyleSheet, Text, View } from "react-native";

const StatView = ({ title, value }: any) => {
  return (
    <View className="bg-bgColor overflow-hidden rounded-2xl h-36 mb-2 mr-3 mt-2 w-full ">
      <Text className="text-sm text-gray-400 pl-2 pt-2">{title}</Text>
      <Text className="text-4xl text-white mt-5 mb-10 text-center">
        {value}
      </Text>
    </View>
  );
};

export default StatView;

const styles = StyleSheet.create({});
