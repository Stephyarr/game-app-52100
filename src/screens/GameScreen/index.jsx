import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";

import { styles } from "./styles";
import { Card } from "../../components";

const GameScreen = () => {
  const [currentGuess, setCurrentGuess] = useState();

  useEffect(() => {
    setCurrentGuess(Math.floor(Math.random() * (99 - 1) + 1));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.textColor}>The opponent's assumption is</Text>
      <Text style={styles.textColor}>{currentGuess}</Text>
      <Card otherStyles={styles.buttonContainer}>
        <Button title="lower" onPress={console.log("lower")} />
        <Button title="higher" onPress={console.log("higher")} />
      </Card>
    </View>
  );
};

export default GameScreen;
