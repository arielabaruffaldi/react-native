import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState();
  console.log('HOLAAA');

  const addTast = () => {
    setTaskList([...taskList, { id: Math.random(), task }]);
    setTask('');
  };

  const deleteTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };
  const renderItem = ({ item }) => {
    return (
      <View style={styles.taskList} key={item.id}>
        <Text style={styles.taskListItem}>{item.task}</Text>
        <TouchableOpacity
          style={styles.buttonDelete}
          onPress={() => deleteTask(item.id)}
        >
          <Text style={{ color: '#fff' }}>x</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={[styles.container]}>
      <TextInput
        defaultValue={task}
        onChangeText={(text) => setTask(text)}
        placeholder="Name a task"
        style={styles.input}
      />
      <TouchableOpacity
        disabled={!task}
        style={styles.buttonSave}
        onPress={addTast}
      >
        <Text style={styles.buttonSaveText}>Save</Text>
      </TouchableOpacity>
      <View style={styles.taskListContainer}>
        <Text style={styles.taskListTitle}>Task List</Text>
        <FlatList
          data={taskList}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    margin: 24,
  },
  input: {
    borderWidth: 1,
    marginBottom: 24,
    borderColor: '#ddd',
    paddingHorizontal: 20,
    paddingVertical: 15,
    color: "#333"
  },
  buttonSave: {
    backgroundColor: '#333',
    padding: 20,
    color: "white",
  },
  buttonSaveText: {
    color: "white",
    fontSize: 14,
    textTransform: "uppercase",
    textAlign: "center",
    fontWeight: "bold",
  },
  taskListTitle: {
    fontSize: 20,
    marginTop: 48,
    marginBottom: 24,
    fontWeight: '600',
    color: '#333',
  },
  taskList: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#ffc926",
    padding: 20,
    marginVertical: 8,
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
  },
  taskListItem: {
    fontSize: 18,
    color: "#fff",
    marginRight: 20,
  },
  buttonDelete: {
    color: "#fff",
    borderWidth: 1,
    borderRadius: 100,
    width: 24,
    height: 24,
    borderColor: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
});

export default App;
