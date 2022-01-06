import React, {useState} from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styles.js";

const TaskList = ({ deleteTask, item }) => {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.taskList} key={item.id}>
      <Text style={styles.taskListItem}>{item.task}</Text>
      <TouchableOpacity
        style={styles.buttonDelete}
        onPress={() => deleteTask(item.id)}
      >
        <Text style={{ color: "#333" }}>x</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskList;
