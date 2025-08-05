import ActivityTabs from "@/components/ActivityTabs";
import { images } from "@/constants/images";
import CharSheet from "@/screens/CharSheet";
import Inventory from "@/screens/Inventory";
import Spells from "@/screens/Spells";
import { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";

const Index = () => {
  const [activityTabs, setActivityTabs] = useState("sheet");

  return (
    <View className="flex-1">
      <Image source={images.bg} className="absolute w-full h-full z-0" resizeMode="cover"/>

      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: 80,
        }}
      >
        {/* Хедер */}
        <View className="flex flex-col justify-center items-center ">
          {/* Имя и уровень */}
          <View className="flex mt-20 mb-4">
            <Text className="text-4xl text-white font-bold text-center">
              TryHarder
            </Text>
            <Text className="text-2xl text-white font-bold">
              9 lvl | Barbarian
            </Text>
          </View>
          {/* Кнопки всерху */}
          <View className="flex flex-row items-center w-full bg-bgColor rounded-2xl mb-2">
            <ActivityTabs
              title="Character sheet"
              onPress={() => setActivityTabs("sheet")}
              isActive={activityTabs === "sheet"}
            />
            <ActivityTabs
              title="Inventory"
              onPress={() => setActivityTabs("inventory")}
              isActive={activityTabs === "inventory"}
            />
            <ActivityTabs
              title="Spells"
              onPress={() => setActivityTabs("spells")}
              isActive={activityTabs === "spells"}
            />
          </View>
        </View>

        {activityTabs === "sheet" && <CharSheet />}

        {activityTabs === "inventory" && <Inventory />}

        {activityTabs === "spells" && <Spells />}
      </ScrollView>
    </View>
  );
};

export default Index;
