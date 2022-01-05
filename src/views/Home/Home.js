import React, { useState } from 'react';
import { Text, View, FlatList } from "react-native";

import TaskList from '../../components/molecules/TaskList';
import TaskListForm from '../../components/organisms/TaskListForm';

import { styles } from './styles';

const Home = () => {
  const [taskList, setTaskList] = useState([]);

  const deleteTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <View style={[styles.container]}>
      <TaskListForm taskList={taskList} setTaskList={setTaskList} />
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
