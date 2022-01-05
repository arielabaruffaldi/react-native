import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  taskList: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#ffc926",
    padding: 20,
    marginVertical: 8,
    color: "#fff",
    justifyContent: "space-between",
  },
  taskListItem: {
    fontSize: 18,
    color: "#333",
    marginRight: 20,
  },
  buttonDelete: {
    color: "#333",
    borderWidth: 1,
    borderRadius: 100,
    width: 24,
    height: 24,
    borderColor: "#333",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
});