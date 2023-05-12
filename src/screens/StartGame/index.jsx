import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { styles } from "./styles";

export const StartGame = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Guess Number</Text>
      <TextInput/>
      <View style={styles.buttonContainer}>
        <View>
          <Button title="clean"/>
        </View>
        <View>
          <Button title="confirm"/>
        </View>
      </View>
    </View>
  );
};

export default StartGame;
