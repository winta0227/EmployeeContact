import { View, StyleSheet } from "react-native";
import EmployeeEditAddText from "../Common/EmployeeEditAddText";

const EmployeeAddPhone = (props) => {
  return (
    <View style={styles.container}>
      <EmployeeEditAddText
        upperText="Phone"
        keyboardType="phone-pad"
        onChange={props.onPhoneChange}
      />
    </View>
  );
};

export default EmployeeAddPhone;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    marginHorizontal: 12,
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
  },
});
