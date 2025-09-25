import React, { useState, useEffect } from 'react';
import { View, FlatList, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TaskItem from './src/components/TaskItem';
import TaskInput from './src/components/TaskInput';
import TaskFilter from './src/components/TaskFilter';
import TaskMessage from './src/components/TaskMessage';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    AsyncStorage.getItem('tasks').then(data => {
      if (data) setTasks(JSON.parse(data));
    });
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!task.trim()) return alert('No ingreses tareas vacías');
    if (tasks.some(t => t.text === task.trim())) return alert('Tarea duplicada');
    const newTask = {
      id: Date.now().toString(),
      text: task.trim(),
      completed: false,
      createdAt: new Date().toLocaleString()
    };
    setTasks([newTask, ...tasks]);
    setTask('');
  };

  const toggleTask = id => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = id => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const deleteCompleted = () => {
    setTasks(tasks.filter(t => !t.completed));
  };

  const filteredTasks = tasks
    .filter(t => filter === 'all' || (filter === 'completed' ? t.completed : !t.completed))
    .sort((a, b) => a.completed - b.completed);

  return (
    <View style={styles.container}>
      <TaskMessage tasks={tasks} />
      <TaskInput task={task} setTask={setTask} addTask={addTask} />
      <TaskFilter setFilter={setFilter} />
      <FlatList
        data={filteredTasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TaskItem item={item} toggleTask={toggleTask} deleteTask={deleteTask} />
        )}
      />
      <Button title="Eliminar completadas" onPress={deleteCompleted} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 40 }
});
