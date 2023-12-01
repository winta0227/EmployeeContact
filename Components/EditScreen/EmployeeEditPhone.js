import { View, StyleSheet } from "react-native";
import EmployeeEditAddText from "../Common/EmployeeEditAddText";

const EmployeeEditPhone = (props) => {
  return (
    <View style={styles.container}>
      <EmployeeEditAddText
        upperText="Phone"
        lowerText={props.phone}
        keyboardType="phone-pad"
        onChange={props.onPhoneChange}
      />
    </View>
  );
};

export default EmployeeEditPhone;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    marginHorizontal: 12,
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
  },
});
