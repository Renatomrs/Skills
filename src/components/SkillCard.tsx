import React from "react";

import {
  StyleSheet, 
  TouchableOpacity,
  TouchableOpacityProps,
  Text 
} from "react-native";

interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}

export function SkillCard({ skill, ...rest } : SkillCardProps) {
  return (
    <TouchableOpacity 
      style={styles.buttonSkill}
      {...rest}
    >
      <Text style={styles.textSkill}>
        {skill}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonSkill: {
    alignItems: 'center',
    padding: 15,
    borderRadius: 50,
    marginBottom: 20,
    backgroundColor: '#1F1E25'
  },
  textSkill: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFF'
  },
});