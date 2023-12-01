import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { useEffect, useState } from "react";
import ContractListHeader from "../Components/ContactListScreen/ContractListHeader";
import EmployeeList from "../Components/ContactListScreen/EmployeeList";
import { fetchEmployees } from "../Utilities/APIWebServices";
import useOrientation from "../Utilities/Orientation";

const ContactListScreen = ({ navigation, route }) => {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchEmployees(setEmployees, setLoading);

    const unsubscribe = navigation.addListener("focus", () => {
      fetchEmployees(setEmployees, setLoading);
    });

    return unsubscribe;
  }, [navigation]);

  const handleAddPress = () => {
    navigation.navigate("Add");
  };

  const orientation = useOrientation();

  return (
    <View
      style={
        orientation === "portrait"
          ? styles.container_portrait
          : styles.container_landscape
      }
    >
      <View style={styles.headerContainer}>
        <ContractListHeader />
      </View>
      <View style={styles.employeeList}>
        <EmployeeList
          navigation={navigation}
          employees={employees}
          isLoading={isLoading}
        />
      </View>
      <Pressable style={styles.addButton} onPress={handleAddPress}>
        <Text style={styles.addButtonText}>+</Text>
      </Pressable>
    </View>
  );
};

export default ContactListScreen;

const styles = StyleSheet.create({
  container_portrait: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#D9D9D9",
    paddingHorizontal: 12,
  },
  container_landscape: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#D9D9D9",
    paddingHorizontal: 12,
  },
  headerContainer: {
    flex: 3,
  },
  employeeList: {
    flex: 7,
  },
  addButton: {
    position: "absolute",
    left: 20,
    bottom: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#cb6d4f",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  addButtonText: {
    fontSize: 25,
    color: "white",
  },
});
