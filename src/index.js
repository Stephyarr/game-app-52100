import { View } from "react-native";

import { Header } from "./components";
import { styles } from "./styles";
import { StartGame } from "./screens";

const App = () => {
  return (
    <View style={styles.container}>
      <Header title="Adivina el Numero" />
      <StartGame/>
    </View>
  );
};

export default App;
