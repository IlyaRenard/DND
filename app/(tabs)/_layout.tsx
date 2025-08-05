import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Text } from "@react-navigation/elements";
import { Tabs } from "expo-router";
import React from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";

const TabIcon = ({ focused, icon, title }: any) => {
  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        className="flex flex-row w-full flex-1 min-w-[114px] min-h-16 mt-4 
    justify-center items-center rounded-full overflow-hidden"
      >
        <Image source={icon} tintColor="#151312" className="size-5 mr-2" />
        <Text className="text-secondary text-base font-semibold">{title}</Text>
      </ImageBackground>
    );
  }

  return (
    <View className="size-full justify-center items-center rounded-full mt-4">
      <Image source={icon} tintColor="#A8B5DB" className="size-5" />
    </View>
  );
};

const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0f0D23",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "0f0d23",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="game"
        options={{
          title: "Game",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.game} title="Game" />
          ),
        }}
      />
      <Tabs.Screen
        name="spells"
        options={{
          title: "Spells",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.spells} title="Spells" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.profile} title="Profile" />
          ),
        }}
      />
    </Tabs>
  );
};

export default _Layout;

const styles = StyleSheet.create({});
