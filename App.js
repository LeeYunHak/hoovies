import React from "react";
import AppLoading from "expo-app-loading";
import { useState } from "react";
import { Text } from "react-native";
export default function App() {
  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true);
  const startLoading = async () => {
    // await 해야하는 모든 로딩을 담당하는 곳
    await new Promise((resolve) => setTimeout(resolve, 10000));
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
