import { Pressable, useColorScheme, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { withSpring, useSharedValue } from "react-native-reanimated";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";

import MyButton from "../components/MyButton";
import { MD2Colors } from "react-native-paper";
import AlertBox from "../components/AlertBox";

export type iconValues = "success" | "danger" | "info" | "warning";

export default function Home() {
  const colorScheme = useColorScheme();

  const topValue = useSharedValue(-200);
  const backgroundColor = useSharedValue(MD2Colors.grey500);
  const [icon, setIcon] = useState<iconValues>("success");
  const [appShown, setAppShown] = useState(true);

  const showAndHideAlertBox = (color: string, icon: iconValues) => {
    topValue.value = withSpring(50);
    backgroundColor.value = color;
    setIcon(icon);

    setTimeout(() => {
      topValue.value = withSpring(-200);
    }, 1000);
  };

  const getIcon = () => {
    switch (icon) {
      case "success":
        return (
          <MaterialCommunityIcons
            name="check-circle-outline"
            size={50}
            color={"white"}
          />
        );

      case "danger":
        return <Feather name="alert-triangle" size={50} color={"white"} />;
      case "info":
        return <Feather name="info" size={50} color={"white"} />;
      case "warning":
        return <Feather name="alert-triangle" size={50} color={"white"} />;
      default:
        return (
          <MaterialCommunityIcons
            name="check-circle-outline"
            size={50}
            color={"white"}
          />
        );
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor:
          colorScheme === "dark" ? MD2Colors.grey900 : MD2Colors.white,
      }}
    >
      <AlertBox
        topValue={topValue}
        backgroundColor={backgroundColor}
        icon={getIcon()}
      />

      {appShown && (
        <View className="flex-1 items-center justify-center gap-y-5">
          <MyButton
            btnId={0}
            onPress={() => showAndHideAlertBox(MD2Colors.green500, "success")}
          >
            Success
          </MyButton>

          <MyButton
            btnId={1}
            style={{ backgroundColor: MD2Colors.red500 }}
            onPress={() => showAndHideAlertBox(MD2Colors.red500, "danger")}
          >
            Danger
          </MyButton>

          <MyButton
            btnId={2}
            style={{ backgroundColor: MD2Colors.blue500 }}
            onPress={() => showAndHideAlertBox(MD2Colors.blue500, "info")}
          >
            Info
          </MyButton>

          <MyButton
            btnId={3}
            style={{ backgroundColor: MD2Colors.orange500 }}
            onPress={() => showAndHideAlertBox(MD2Colors.orange500, "warning")}
          >
            Warning
          </MyButton>
        </View>
      )}

      <Pressable
        className="absolute top-20 left-0 right-0 items-center"
        onPress={() => {
          setAppShown(false);
          setTimeout(() => setAppShown(true), 100);
        }}
      >
        <MaterialCommunityIcons
          name="refresh"
          color={MD2Colors.transparent}
          size={30}
        />
      </Pressable>
    </SafeAreaView>
  );
}
