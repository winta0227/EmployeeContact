import { View, StyleSheet } from "react-native";
import IndividualText from "./IndividualText";

const EmployeeDetailAddress = (props) => {
  return (
    <View style={styles.container}>
      <IndividualText upperText="Street" lowerText={props.Street} />
      <IndividualText upperText="City" lowerText={props.City} />
      <IndividualText upperText="State" lowerText={props.State} />
      <IndividualText upperText="Zip" lowerText={props.Zip} />
      <IndividualText upperText="Country" lowerText={props.Country} />
    </View>
  );
};

export default EmployeeDetailAddress;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    marginHorizontal: 12,
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
  },
});
