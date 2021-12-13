import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Amplify from "aws-amplify";
import config from "./src/aws-exports";
Amplify.configure(config);

// Connect frontend to API (Documentation)
// https://docs.amplify.aws/start/getting-started/data-model/q/integration/react-native/#deploying-the-api

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
