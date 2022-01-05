/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
const App = () => {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState();

  const addTast = () => {
    setTaskList([...taskList, { id: Math.random(), task }]);
  };

  const deleteTask = (id) => {
    console.warn("id to delete", id);
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <View style={[styles.container]}>
      <Text style={[styles.sectionTitle]}>Hola Coder</Text>
      <TextInput
        onChangeText={(text) => setTask(text)}
        placeholder="Name a task"
      />
      <Button onPress={addTast} title="Save" />
      <View>
        <Text style={styles.taskListTitle}>Task List</Text>
        <FlatList
          data={taskList}
          renderItem={({ item, index }) => (
            <View key={index}>
              <Text>{item.task}</Text>
              <TouchableOpacity onPress={() => deleteTask(item.id)}>
                <Text>x</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    margin: 24,
  },
  sectionTitle: {
    fontSize: 34,
    margin: 24,
    fontWeight: "600",
    textAlign: "center",
  },
  taskListTitle: {
    fontSize: 20,
    marginTop: 24,
    marginBottom: 24,
    fontWeight: "600",
    color: "#000",
  }
});

export default App;
