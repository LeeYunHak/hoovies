import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { Text, Image } from "react-native";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Asset } from "expo-asset";

export default function App() {
  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true);
  const startLoading = async () => {
    // await 해야하는 모든 로딩을 담당하는 곳
    await Font.loadAsync(Ionicons.font); // Ionicons의 font 파일에 접근
    await Asset.loadAsync(require("./test.jpeg")); // 로컬에서 가져오기
    await Image.prefetch("https://reactnative.dev/img/oss_logo.png"); // 웹에서 가져오기
  };
  if (!ready) {
    return (
      <AppLoading
        startAsync={startLoading}
        onFinish={onFinish}
        onError={console.error}
      />
    );
  }
  return <Text>We are done loading</Text>;
}
