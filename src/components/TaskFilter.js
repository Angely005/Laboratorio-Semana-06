import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function TaskFilter({ setFilter }) {
  return (
    <View style={styles.filters}>
      {['all', 'pending', 'completed'].map(f => (
        <Button key={f} title={f} onPress={() => setFilter(f)} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  filters: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 }
});
