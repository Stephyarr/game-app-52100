import React from "react";
import { TextInput } from "react-native";

import { styles } from "./styles";

const Input = ({ otherStyle, ...resProps }) => {
  return <TextInput style={{ ...styles.input, ...otherStyle }} {...resProps} />;
};

export default Input;
