import { View, StyleSheet, Text } from "react-native";
import EmployeeEditAddText from "../Common/EmployeeEditAddText";
import RNPickerSelect from "react-native-picker-select";

const EmployeeEditName = (props) => {
  return (
    <View style={styles.container}>
      <EmployeeEditAddText
        upperText="Name"
        lowerText={props.name}
        onChange={props.onNameChange}
      />
      <View style={styles.DepartmentContrainer}>
        <Text style={styles.upper}>Department</Text>
        <RNPickerSelect
          onValueChange={props.onDepartmentChange}
          value={props.department}
          items={props.departments.map((dept) => ({
            label: dept.Name,
            value: dept.Id,
          }))}
        />
      </View>
    </View>
  );
};

export default EmployeeEditName;

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
