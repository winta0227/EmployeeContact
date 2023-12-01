import { View, StyleSheet } from "react-native";
import IndividualText from "./IndividualText";

const EmployeeDetailPhone = (props) => {
  return (
    <View style={styles.container}>
      <IndividualText upperText="Phone Number" lowerText={props.Phone} />
    </View>
  );
};

export default EmployeeDetailPhone;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    marginHorizontal: 12,
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
  },
});
