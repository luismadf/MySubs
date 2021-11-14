import React from "react";
import { Text, TouchableHighlight, StyleSheet } from "react-native";
import { Colors, textStyles } from "../../assets/styles";

const Button = ({ text }) => {
  return (
    <>
      <TouchableHighlight style={styles.button}>
        <Text style={[styles.text, textStyles.p]}>{text}</Text>
      </TouchableHighlight>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
    paddingHorizontal: 20,
    height: 44,
    borderRadius: 8,
    width: 234,
  },
  text: {
    color: Colors.white,
    textTransform: "uppercase",
  },
});

export default Button;
