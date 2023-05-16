import { useFonts } from "expo-font";
import { useState } from "react";
import { View } from "react-native";

import { Header } from "./components";
import { GameScreen, StartGame } from "./screens";
import { styles } from "./styles";

const App = () => {
  const [loaded] = useFonts({
    "NanumGothic-Bold": require("../assets/fonts/NanumGothic-Bold.ttf"),
    "NanumGothic-ExtraBold": require("../assets/fonts/NanumGothic-ExtraBold.ttf"),
    "NanumGothic-Regular": require("../assets/fonts/NanumGothic-Regular.ttf"),
  });

  const [userNumber, setUserNumber] = useState();

  const handleStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGame onStartGame={handleStartGame} />;

  if (userNumber) {
    content = <GameScreen />;
  }

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Header title="Adivina el Numero" />
      {content}
    </View>
  );
};

export default App;
