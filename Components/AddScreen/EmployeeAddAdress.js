import { View, StyleSheet } from "react-native";
import EmployeeEditAddText from "../Common/EmployeeEditAddText";

const EmployeeAddAddress = (props) => {
  return (
    <View style={styles.container}>
      <EmployeeEditAddText upperText="Street" onChange={props.onStreetChange} />
      <EmployeeEditAddText upperText="City" onChange={props.onCityChange} />
      <EmployeeEditAddText upperText="State" onChange={props.onStateChange} />
      <EmployeeEditAddText
        upperText="Zip"
        keyboardType="number-pad"
        onChange={props.onZipChange}
      />
      <EmployeeEditAddText
        upperText="Country"
        onChange={props.onCountryChange}
      />
    </View>
  );
};

export default EmployeeAddAddress;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    marginHorizontal: 12,
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
  },
  scrollView: {
    flex: 1,
    marginBottom: 24,
  },
});
