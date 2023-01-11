import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import steps from "../api/steps";
import ChatBot from "react-native-chatbot-expo";

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <ChatBot steps={steps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
    padding: 20,
    marginTop: 100,
  },
});

export default MainScreen;
