import { Text, View, StyleSheet, TextInput } from "react-native";

const EmployeeEditAddText = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.upper}>{props.upperText}</Text>
      <TextInput
        style={styles.lower}
        value={props.lowerText}
        keyboardType={props.keyboardType}
        onChangeText={props.onChange}
      />
    </View>
  );
};

export default EmployeeEditAddText;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  upper: {
    fontSize: 12,
  },
  lower: {
    fontSize: 18,
    borderBottomColor: "#D9D9D9",
    borderBottomWidth: 1,
  },
});
