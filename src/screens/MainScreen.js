import React from "react";
import { View, Text, TextInput, Button } from "react-native";

const MainScreen = () => {
  return (
    <View>
      <Text>Welcome to the mental health support app!</Text>
      <View>
        <Text>What's on your mind?</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          placeholder='Type here...'
          onChangeText={(text) => {
            /* handle input */
          }}
        />
        <Button
          title='Send'
          onPress={() => {
            /* handle sending message */
          }}
        />
      </View>
      <View>
        <Text>Chatbot:</Text>
        <Text>
          I'm here to support you. What would you like to talk about today?
        </Text>
      </View>
    </View>
  );
};

export default MainScreen;
