import React from "react";

import {
  StyleSheet, 
  TouchableOpacity, 
  TouchableOpacityProps,
  Text 
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest } : ButtonProps) {
  return (
    <TouchableOpacity 
      style={styles.button}
      activeOpacity={0.5}
      {...rest}
    >
      <Text style={styles.buttonText}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#A370F7',
    borderRadius: 5,
    padding: 14
  },
  buttonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#FFF'
  },
});