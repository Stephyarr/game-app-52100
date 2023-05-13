import { StyleSheet } from "react-native";

import colors from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    paddingTop: 50,
    backgroundColor: colors.primary,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingHorizontal: 15,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 20,
  },
  cleanButton: {
    backgroundColor: colors.bottons,
    height: 40,
    width: 100,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    fontSize: 18,
    color: colors.white,
  },
});
