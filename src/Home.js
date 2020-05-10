import React from "react";
import { SafeAreaView } from "react-native";
import { Header, Settings, Bell } from "./style";

export default function Home() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? 25 : 0,
        backgroundColor: "#f0f1f5",
      }}
    >
      <Header>
        <Settings name="settings" size={24} color="black" />
        <Bell name="bell" size={24} color="black" />
      </Header>
    </SafeAreaView>
  );
}
