import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TaskItem({ item, toggleTask, deleteTask }) {
  return (
    <TouchableOpacity onPress={() => toggleTask(item.id)} onLongPress={() => deleteTask(item.id)}>
      <Text style={[styles.task, item.completed && styles.completed]}>
        {item.text} {'\n'}📅 {item.createdAt}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  task: { fontSize: 18, padding: 10 },
  completed: { textDecorationLine: 'line-through', color: 'gray' }
});
