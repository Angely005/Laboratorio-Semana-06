import React from 'react';
import { TextInput, Button, StyleSheet } from 'react-native';

export default function TaskInput({ task, setTask, addTask }) {
  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="Escribe una tarea"
        value={task}
        onChangeText={setTask}
      />
      <Button title="Agregar tarea" onPress={addTask} />
    </>
  );
}

const styles = StyleSheet.create({
  input: { borderWidth: 1, padding: 10, marginVertical: 10 }
});
