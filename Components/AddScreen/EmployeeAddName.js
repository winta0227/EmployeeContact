import { View, StyleSheet, Text } from "react-native";
import EmployeeEditAddText from "../Common/EmployeeEditAddText";
import RNPickerSelect from "react-native-picker-select";

const EmployeeAddName = (props) => {
  return (
    <View style={styles.container}>
      <EmployeeEditAddText upperText="Name" onChange={props.onNameChange} />
      <View style={styles.DepartmentContrainer}>
        <Text style={styles.upper}>Department</Text>
        <RNPickerSelect
          onValueChange={props.onDepartmentChange}
          items={props.departments.map((dept) => ({
            label: dept.Name,
            value: dept.Id,
          }))}
        />
      </View>
    </View>
  );
};

export default EmployeeAddName;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    marginHorizontal: 12,
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
  },
  DepartmentContrainer: {
    marginBottom: 10,
  },
  upper: {
    fontSize: 12,
  },
});
