import { Image, View, StyleSheet, Text } from "react-native";

const EmployeeImg = (props) => {
  return (
    <View>
      <Image
        source={require("../../assets/StaffImg/defaultImg.png")}
        style={styles.image}
      />
    </View>
  );
};

export default EmployeeImg;

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: "center",
    marginVertical: 18,
  },
});
