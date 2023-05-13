import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { Card, Input } from "../../components";

export const StartGame = () => {
  return (
    <View style={styles.container}>
      <Card>
        <Text style={styles.subtitle}>Guess Number</Text>
        <Input
          bluOnSubmit
          autoCapitaze="none"
          outoCorrect={false}
          keyboardType="numeric"
          maxLength={2}
          placeholder="Write Number"
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.cleanButton}>
            <Text style={styles.textButton}>clean</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cleanButton}>
            <Text style={styles.textButton}>confirm</Text>
          </TouchableOpacity>
        </View>
      </Card>
    </View>
  );
};

export default StartGame;
