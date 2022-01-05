import React, { useState } from "react";
import { styles } from "./styles";
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import Input from "../../components/atoms/Input";
import TaskList from "../../components/molecules/TaskList";

const Home = () => {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    setTaskList([...taskList, { id: Math.random(), task, completed: false }]);
    setTask('');
  };

  const deleteTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  console.warn(task)

  return (
    <View style={[styles.container]}>
      <Input
        onChangeText={(text) => setTask(text)}
        placeholder="Name a task"
        task={task}
        defaultValue={task}
      />
      <TouchableOpacity
        disabled={!task}
        style={styles.buttonSave}
        onPress={addTask}
      >
        <Text style={styles.buttonSaveText}>Save</Text>
      </TouchableOpacity>
      <View style={styles.taskListContainer}>
        <Text style={styles.taskListTitle}>Task List</Text>
        <FlatList
          data={taskList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskList item={item} deleteTask={deleteTask} />
          )}
        />
      </View>
    </View>
  );
};

export default Home;
