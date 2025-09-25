import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function TaskMessage({ tasks }) {
  const count = tasks.filter(t => !t.completed).length;
  let message = 'Sin tareas pendientes';
  if (count > 5) message = 'Demasiadas tareas pendientes';
  else if (count >= 4) message = 'Tienes varias tareas';
  else if (count >= 1) message = 'Buen ritmo';

  return (
    <Text style={[styles.message, message === 'Demasiadas tareas pendientes' && styles.red]}>
      {message}
    </Text>
  );
}

const styles = StyleSheet.create({
  message: { fontSize: 16, marginBottom: 10 },
  red: { color: 'red' }
});
