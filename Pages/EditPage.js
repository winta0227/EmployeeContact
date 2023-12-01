import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Pressable,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import EmployeeImg from "../Components/Common/EmployeeImg";
import EmployeeEditName from "../Components/EditScreen/EmployeeEditName";
import EmployeeEditPhone from "../Components/EditScreen/EmployeeEditPhone";
import EmployeeEditAddress from "../Components/EditScreen/EmployeeEditAddress";
import { UpdateEmployee } from "../Utilities/APIWebServices";
import { fetchDepartments } from "../Utilities/APIWebServices";

const EditScreen = ({ route, navigation }) => {
  const [departments, setDepartments] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const { employee } = route.params;
  const [updateEmployee, setUpdateEmployee] = useState({
    Id: employee.Id,
    Name: employee.Name,
    Phone: employee.Phone,
    Department: employee.Department.Id,
    Street: employee.Street,
    City: employee.City,
    State: employee.State,
    Zip: employee.Zip,
    Country: employee.Country,
  });

  useEffect(() => {
    fetchDepartments(setDepartments, setLoading);
  }, []);

  const handleCancel = () => {
    navigation.navigate("Employee Detail", { employee: employee });
  };

  const validateFields = () => {
    for (let key in updateEmployee) {
      const value = updateEmployee[key];
      if (typeof value === "string" && value.trim() === "") {
        return false;
      }
    }
    return true;
  };

  const handleSave = async () => {
    if (!validateFields()) {
      Alert.alert("Error", "Please fill in all fields", [{ text: "OK" }]);
      return;
    }

    let updateEmployeeInfo = `id=${updateEmployee.Id}&name=${updateEmployee.Name}&phone=${updateEmployee.Phone}&department=${updateEmployee.Department}&street=${updateEmployee.Street}&city=${updateEmployee.City}&state=${updateEmployee.State}&zip=${updateEmployee.Zip}&country=${updateEmployee.Country}`;
    try {
      await UpdateEmployee(updateEmployeeInfo);
      Alert.alert("Success", "Employee updated successfully", [
        {
          text: "OK",
          onPress: () =>
            navigation.navigate("Employee Detail", {
              employee: employee,
              employeeUpdated: true,
            }),
        },
      ]);
    } catch {
      Alert.alert("Error", "Failed to add new employee", [{ text: "OK" }]);
    }
  };

  const handleNameChange = (value) => {
    setUpdateEmployee({ ...updateEmployee, Name: value });
  };

  const handleDepartmentChange = (value) => {
    setUpdateEmployee({ ...updateEmployee, Department: value });
  };

  const handlePhoneChange = (value) => {
    setUpdateEmployee({ ...updateEmployee, Phone: value });
  };

  const handleStreetChange = (value) => {
    setUpdateEmployee({ ...updateEmployee, Street: value });
  };

  const handleCityChange = (value) => {
    setUpdateEmployee({ ...updateEmployee, City: value });
  };

  const handleStateChange = (value) => {
    setUpdateEmployee({ ...updateEmployee, State: value });
  };

  const handleZipChange = (value) => {
    setUpdateEmployee({ ...updateEmployee, Zip: value });
  };

  const handleCountryChange = (value) => {
    setUpdateEmployee({ ...updateEmployee, Country: value });
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <EmployeeImg />
        <EmployeeEditName
          name={updateEmployee.Name}
          department={updateEmployee.Department}
          onNameChange={handleNameChange}
          onDepartmentChange={handleDepartmentChange}
          departments={departments}
        />
        <EmployeeEditPhone
          phone={updateEmployee.Phone}
          onPhoneChange={handlePhoneChange}
        />
        <EmployeeEditAddress
          street={updateEmployee.Street}
          city={updateEmployee.City}
          state={updateEmployee.State}
          zip={updateEmployee.Zip}
          country={updateEmployee.Country}
          onStreetChange={handleStreetChange}
          onCityChange={handleCityChange}
          onStateChange={handleStateChange}
          onZipChange={handleZipChange}
          onCountryChange={handleCountryChange}
        />
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.pressedItem,
          ]}
          onPress={handleCancel}
        >
          <Text style={styles.ButtonText}>Cancel</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.pressedItem,
          ]}
          onPress={handleSave}
        >
          <Text style={styles.ButtonText}>Save</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D9D9D9",
  },
  scrollView: {
    flex: 1,
    marginBottom: 24,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
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
  ButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default EditScreen;
