import { View, Image, Text, StyleSheet } from "react-native";

const ContractListHeader = (props) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/RoiLogo.png")}
        style={styles.RoiLogo}
      />
      <Text style={styles.HeaderText}>STAFF CONTACT</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  RoiLogo: {
    height: 110,
    resizeMode: "center",
    marginBottom: 8,
  },
  HeaderText: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold",
  },
});

export default ContractListHeader;
