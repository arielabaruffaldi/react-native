import React, { useState } from 'react';
import { Text } from 'react-native';

import Button from "../../atoms/Button";
import Input from "../../atoms/Input";

import { styles } from "./styles";

const TaskListForm = ({ taskList, setTaskList }) => {
  const [task, setTask] = useState('');
  const addTask = () => {
    setTaskList([...taskList, { id: Math.random(), task, completed: false }]);
    setTask("");
  };
  return (
    <>
      <Input
        onChangeText={(text) => setTask(text)}
        placeholder="Name a task"
        task={task}
        defaultValue={task}
      />
      <Button disabled={!task} onPress={addTask}>
        <Text style={styles.buttonSaveText}>Save</Text>
      </Button>
    </>
  );
};

export default TaskListForm;
