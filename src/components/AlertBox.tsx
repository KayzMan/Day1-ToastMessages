import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Animated, {
  useAnimatedStyle,
  SharedValue,
} from "react-native-reanimated";

export interface alertBoxProps {
  backgroundColor: SharedValue<string>;
  topValue: SharedValue<number>;
  icon: React.ReactNode;
}

export default function AlertBox({
  backgroundColor,
  topValue,
  icon,
}: alertBoxProps) {
  const styles = StyleSheet.create({
    alertBox: {
      left: 20,
      right: 20,
      elevation: 8,
      shadowColor: "#000",
      shadowOffset: {
        width: 2,
        height: 3,
      },
      shadowOpacity: 0.25,
      shadowRadius: 15,
    },
  });

  const alertBoxAnimatedStyles = useAnimatedStyle(() => {
    return {
      top: topValue.value,
      backgroundColor: backgroundColor.value,
    };
  });

  return (
    <Animated.View
      style={[styles.alertBox, alertBoxAnimatedStyles]}
      className="bg-green-500 flex-row gap-x-5 absolute h-32 rounded-lg items-center pl-5"
    >
      <View className="rounded-full">{icon}</View>

      <View className="">
        <Text className="text-white text-2xl font-medium">
          Lorem Ipsum Text
        </Text>
        <Text className="text-white text-lg">Lorem Ipsum Description</Text>
      </View>
    </Animated.View>
  );
}
