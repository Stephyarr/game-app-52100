import { useState } from "react";
import { View } from "react-native";

import { Header } from "./components";
import { GameScreen, StartGame } from "./screens";
import { styles } from "./styles";

const App = () => {
  const [userNumber, setUserNumber] = useState();

  const handleStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGame onStartGame={handleStartGame} />;

  if (userNumber) {
    content = <GameScreen />;
  }

  return (
    <View style={styles.container}>
      <Header title="Adivina el Numero" />
      {content}
    </View>
  );
};

export default App;
