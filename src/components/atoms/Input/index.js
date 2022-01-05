import React from "react";
import { TextInput } from "react-native";

import { styles } from "./styles.js";

const Input = ({ onChangeText, placeholder, ...props }) => {
  return (
    <TextInput
      onChangeText={onChangeText}
      placeholder={placeholder}
      style={styles.input}
      {...props}
    />
  );
};

export default Input;
