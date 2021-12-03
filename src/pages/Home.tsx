import React, { useState, useEffect } from "react";

import {
  StyleSheet,
  Platform, 
  View, 
  Text,
  TextInput,
  FlatList,
  Keyboard
} 
from "react-native";

import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

interface SkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState('');

  function handleAddNewSkill() {
    if (newSkill.trim() === '') {
      return
    }
    else {
      const data = {
        id: String(new Date().getTime()),
        name: newSkill
      }

      setMySkills(oldState => [...oldState, data]);
    }
        
    setNewSkill('');
    Keyboard.dismiss();
  }

  function handleRemoveSkill(id: string) {
    setMySkills(oldState => oldState.filter(
      skill => skill.id !== id
    ));
  }

  useEffect(() => {
    const currentHour = new Date().getHours();
        
    if (currentHour < 12) {
      setGreeting('Good morning!');
    } 
    else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good afternoon!');
    } 
    else {
      setGreeting('Goodnight!');
    }
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome, Renato
      </Text>

      <Text style={styles.greetings}>
        {greeting}
      </Text>

      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        value={newSkill}
        onChangeText={(inputValue) => setNewSkill(inputValue)}
      />
            
      <Button
        title="Add"
        onPress={handleAddNewSkill}
      />

      <Text style={[styles.title, {marginVertical: 50}]}>
        My skills
      </Text>

      <FlatList 
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SkillCard 
            skill={item.name}
            onPress={() => handleRemoveSkill(item.id)} 
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 35,
    backgroundColor: '#121015'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF'
  },
  greetings: {
    fontSize: 14,
    color: '#AAA',
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    paddingVertical: Platform.OS === 'ios' ? 15: 10,
    paddingHorizontal: 18,
    marginTop: 30,
    borderRadius: 7,
    marginBottom: 20
  },
});