import { StyleSheet } from "react-native";

import colors from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secundary,
    alignItems: "center",
    height: 100,
    justifyContent: "center",
    paddingTop: 35,
  },
  titulo: {
    fontSize: 22,
    fontFamily: "NanumGothic-Bold",
  },
});
