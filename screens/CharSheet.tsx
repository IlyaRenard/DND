import StatView from "@/components/StatView";
import { fetchSkills } from "@/services/api";
import useFetch from "@/services/useFetch";
import { FlatList, Text, View } from "react-native";

const CharSheet = () => {
  const {
    data: skillsData,
    loading: skillsLoading,
    error: skillsError,
  } = useFetch(() => fetchSkills({ query: "" }));
  return (
    <View className="flex-1 flex-col ">
      <StatView title="HEALTH POINTS" value="51" />

      <View className="flex-1 flex-row  w-[31%]">
        <StatView title="SPEED" value="30" />
        <StatView title="ARMOR CLASS" value="10" />
        <StatView title="INITIATIVE" value="5" />
      </View>

      <View className="flex flex-col bg-bgColor overflow-hidden rounded-2xl mb-5">
        <Text className="text-sm text-gray-400 pl-2 pt-2 ">STATS</Text>
        <FlatList
          keyExtractor={(item) => item.index.toString()}
          scrollEnabled={false}
          data={[
            { index: 1, title: "Strength", value: "-1" },
            { index: 2, title: "Dexterity", value: "+3" },
            { index: 3, title: "Constitution", value: "+2" },
            { index: 4, title: "Intelligence", value: "+2" },
            { index: 5, title: "Wisdom", value: "+7" },
            { index: 6, title: "Charisma", value: "+5" },
          ]}
          renderItem={({ item }) => (
            <View
              className="flex flex-row justify-between items-center mt-2 border-t border-gray-500 mx-4"
              key={item.index}
            >
              <Text className="text-xl text-white p-2">{item.title}</Text>
              <Text className="text-xl text-white p-2">{item.value}</Text>
            </View>
          )}
        />
      </View>

      <View className="flex-1 bg-bgColor rounded-2xl mb-5">
        <Text className="text-sm text-gray-400 pl-2 pt-2">SKILLS</Text>
        <FlatList
          keyExtractor={(item) => item.index.toString()}
          scrollEnabled={false}
          data={skillsData}
          renderItem={({ item }) => (
            <View
              className="flex flex-row items-center mt-2 border-t border-gray-500 mx-4"
              key={item.index}
            >
              <Text className="text-xl text-white p-2">{item.name}</Text>
              <Text className="text-xl text-gray-400 text-left">St</Text>
              <Text className="text-xl text-white p-2 absolute top-0 right-0">
                0
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default CharSheet;
