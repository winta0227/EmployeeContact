import { View, StyleSheet } from "react-native";
import IndividualText from "./IndividualText";

const EmployeeDetailName = (props) => {
  return (
    <View style={styles.container}>
      <IndividualText upperText="Name" lowerText={props.Name} />
      <IndividualText upperText="Department" lowerText={props.Department} />
    </View>
  );
};

export default EmployeeDetailName;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    marginHorizontal: 12,
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
  },
});
