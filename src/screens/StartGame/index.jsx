import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from "react-native";

import { styles } from "./styles";
import { Card, Input } from "../../components";

export const StartGame = ({ onStartGame }) => {
  const [value, setValue] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState("");

  const handleInput = (text) => {
    setValue(text.replace(/[^0-9]/g, ""));
  };

  const handleResetInput = () => {
    setValue("");
    setConfirm(false);
  };

  const handleConfirmation = () => {
    const newValue = parseInt(value);
    if (isNaN(newValue) || newValue <= 0 || newValue > 99) return;

    setConfirm(true);
    setSelectedNumber(newValue);
    setValue("");
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="height">
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
              value={value}
              onChangeText={handleInput}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.cleanButton} onPress={handleResetInput}>
                <Text style={styles.textButton}>clean</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cleanButton} onPress={handleConfirmation}>
                <Text style={styles.textButton}>confirm</Text>
              </TouchableOpacity>
            </View>
          </Card>
          {confirm && (
            <Card otherStyles={styles.selectCard}>
              <Text style={styles.textStart}>You numbre is: </Text>
              <Text style={styles.textStart}>{selectedNumber}</Text>
              <View>
                <Button
                  title="Start Game"
                  color="#cb5740"
                  onPress={() => onStartGame(selectedNumber)}
                />
              </View>
            </Card>
          )}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default StartGame;
