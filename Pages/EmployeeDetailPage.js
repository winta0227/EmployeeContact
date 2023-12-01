import React, { useLayoutEffect } from "react";
import { ScrollView, View, Text, StyleSheet, Pressable } from "react-native";
import { useEffect, useState } from "react";
import EmployeeImg from "../Components/Common/EmployeeImg";
import EmployeeDetailName from "../Components/EmployeeDetailScreen/EmployeeDetailName";
import EmployeeDetailPhone from "../Components/EmployeeDetailScreen/EmployeeDetailPhone";
import EmployeeDetailAddress from "../Components/EmployeeDetailScreen/EmployeeDetailAddress";
import { fetchEmployeesById } from "../Utilities/APIWebServices";

const EmployeeDetailScreen = ({ route, navigation }) => {
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const loadEmployeeData = async () => {
      if (route.params?.employee?.Id || route.params?.employeeUpdated) {
        try {
          const fetchedEmployee = await fetchEmployeesById(
            route.params.employee.Id
          );
          setEmployee(fetchedEmployee);
          navigation.setParams({ employeeUpdated: null });
        } catch (error) {
          console.error("Failed to fetch employee data:", error);
        }
      }
    };

    loadEmployeeData();
  }, [route.params?.employee?.Id, route.params?.employeeUpdated]);

  if (!employee) {
    return (
      <View style={styles.container}>
        <Text>No employee found.</Text>
      </View>
    );
  }

  const handleEditPress = () => {
    navigation.navigate("Edit", { employee: employee });
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <EmployeeImg />
        <EmployeeDetailName
          Name={employee.Name}
          Department={employee.Department.Name}
        />
        <EmployeeDetailPhone Phone={employee.Phone} />
        <EmployeeDetailAddress
          Street={employee.Street}
          City={employee.City}
          State={employee.State}
          Zip={employee.Zip}
          Country={employee.Country}
        />
      </ScrollView>
      <Pressable
        style={({ pressed }) => [
          styles.editButton,
          pressed && styles.pressedItem,
        ]}
        onPress={handleEditPress}
      >
        <Text style={styles.editButtonText}>Edit</Text>
      </Pressable>
    </View>
  );
};

export default EmployeeDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D9D9D9",
  },
  scrollView: {
    flex: 1,
    marginBottom: 24,
  },
  editButton: {
    bottom: 20,
    left: 0,
    right: 0,
    backgroundColor: "#cb6d4f",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
  },
  pressedItem: {
    opacity: 0.5,
  },
  editButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
