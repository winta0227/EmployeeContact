import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  ActivityIndicator,
} from "react-native";

const EmployeeList = ({ navigation, employees, isLoading }) => {
  if (isLoading) {
    return <ActivityIndicator />;
  }

  const renderItem = ({ item }) => (
    <Pressable
      style={({ pressed }) => [
        styles.indiviualContainer,
        pressed && styles.pressedItem,
      ]}
      onPress={() => navigation.navigate("Employee Detail", { employee: item })}
    >
      <Text style={styles.nameStyle}>{item.Name}</Text>
      <Text>{item.Department.Name}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={employees}
        renderItem={renderItem}
        keyExtractor={(item) => item.Id.toString()}
      />
    </View>
  );
};

export default EmployeeList;

const styles = StyleSheet.create({
  container: {
    padding: 4,
    backgroundColor: "#ffffff",
    borderRadius: 16,
  },
  indiviualContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 16,
    paddingBottom: 16,
    borderBottomColor: "#D9D9D9",
    borderBottomWidth: 1,
  },
  nameStyle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  pressedItem: {
    opacity: 0.5,
  },
});
