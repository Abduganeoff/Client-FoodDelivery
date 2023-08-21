import React, { useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { categories } from "../constants";
import { themeColors } from "../theme";

const Catogories = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const renderCategory = ({ item }) => {
    let isActive = item.id === activeCategory;
    let textClass = isActive
      ? " font-semibold text-gray-800"
      : " text-gray-500";
    return (
      <View className="flex justify-center items-center mr-6">
        <TouchableOpacity
          style={{
            borderColor: themeColors.bgColor(1),
            borderRadius: 1,
            borderWidth: 1,
          }}
          className={`p-1 rounded-full shadow bg-gray-${isActive ? 600 : 200} `}
          onPress={() => setActiveCategory(item.id)}
        >
          <Image style={{ width: 45, height: 45 }} source={item.image} />
        </TouchableOpacity>
        <Text className={"text-sm " + textClass}>{item.name}</Text>
      </View>
    );
  };

  return (
    <View className="mt-4">
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Catogories;
