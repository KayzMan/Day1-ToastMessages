import React from "react";
import { StyleSheet } from "react-native";
import { Button, ButtonProps, MD2Colors } from "react-native-paper";
import Animated, { FadeIn } from "react-native-reanimated";

export default function MyButton({
  className,
  style,
  contentStyle,
  labelStyle,
  btnId,
  ...props
}: ButtonProps & { btnId: number }) {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: MD2Colors.green500,
      borderRadius: 5,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
    },
    label: {
      textAlign: "center",
      color: "white",
      fontSize: 16,
      letterSpacing: 1.1,
    },
    content: {},
  });

  return (
    <Animated.View className={"w-[80%]"} entering={FadeIn.delay(320 * btnId)}>
      <Button
        {...props}
        style={[styles.button, style]}
        labelStyle={[styles.label, labelStyle]}
        contentStyle={[styles.content, contentStyle]}
      />
    </Animated.View>
  );
}
