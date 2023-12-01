import { View, StyleSheet } from "react-native";
import EmployeeEditAddText from "../Common/EmployeeEditAddText";

const EmployeeEditAddress = (props) => {
  return (
    <View style={styles.container}>
      <EmployeeEditAddText
        upperText="Street"
        lowerText={props.street}
        onChange={props.onStreetChange}
      />
      <EmployeeEditAddText
        upperText="City"
        lowerText={props.city}
        onChange={props.onCityChange}
      />
      <EmployeeEditAddText
        upperText="State"
        lowerText={props.state}
        onChange={props.onStateChange}
      />
      <EmployeeEditAddText
        upperText="Zip"
        lowerText={props.zip}
        onChange={props.onZipChange}
        keyboardType="number-pad"
      />
      <EmployeeEditAddText
        upperText="Country"
        lowerText={props.country}
        onChange={props.onCountryChange}
      />
    </View>
  );
};

export default EmployeeEditAddress;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    marginHorizontal: 12,
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
  },
});
