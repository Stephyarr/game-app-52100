import { StyleSheet } from "react-native";

import colors from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    width: 300,
    maxWidth: "80%",
    padding: 20,
    alignItems: "center",
    shadowColor: colors.black,
    backgroundColor: colors.white,
    shadowOpacity: 10,
    shadowRadius: 0.3,
    elevation: 5,
    borderRadius: 10,
  },
});
