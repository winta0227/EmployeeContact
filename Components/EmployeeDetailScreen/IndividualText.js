import { Text, View, StyleSheet } from "react-native";

const IndividualText = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.upper}>{props.upperText}</Text>
      <Text style={styles.lower}>{props.lowerText}</Text>
    </View>
  );
};

export default IndividualText;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  upper: {
    fontSize: 12,
  },
  lower: {
    fontSize: 18,
  },
});
