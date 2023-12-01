import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";
import { useState, useEffect } from "react";
import EmployeeImg from "../Components/Common/EmployeeImg";
import EmployeeAddName from "../Components/AddScreen/EmployeeAddName";
import EmployeeAddPhone from "../Components/AddScreen/EmployeeAddPhone";
import EmployeeAddAddress from "../Components/AddScreen/EmployeeAddAdress";
import {
  CreateNewEmployee,
  fetchDepartments,
} from "../Utilities/APIWebServices";

const AddScreen = ({ navigation, route }) => {
  const [departments, setDepartments] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    phone: "",
    department: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  useEffect(() => {
    fetchDepartments(setDepartments, setLoading);
  }, []);

  const handleNameChange = (value) => {
    setNewEmployee({ ...newEmployee, name: value });
  };

  const handleDepartmentChange = (value) => {
    setNewEmployee({ ...newEmployee, department: value });
  };

  const handlePhoneChange = (value) => {
    setNewEmployee({ ...newEmployee, phone: value });
  };

  const handleStreetChange = (value) => {
    setNewEmployee({ ...newEmployee, street: value });
  };

  const handleCityChange = (value) => {
    setNewEmployee({ ...newEmployee, city: value });
  };

  const handleStateChange = (value) => {
    setNewEmployee({ ...newEmployee, state: value });
  };

  const handleZipChange = (value) => {
    setNewEmployee({ ...newEmployee, zip: value });
  };

  const handleCountryChange = (value) => {
    setNewEmployee({ ...newEmployee, country: value });
  };

  const handleCancel = () => {
    navigation.navigate("Contact List");
  };

  const validateFields = () => {
    for (let key in newEmployee) {
      const value = newEmployee[key];
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
    let newEmployeeInfo = `name=${newEmployee.name}&phone=${newEmployee.phone}&department=${newEmployee.department}&street=${newEmployee.street}&city=${newEmployee.city}&state=${newEmployee.state}&zip=${newEmployee.zip}&country=${newEmployee.country}`;
    try {
      await CreateNewEmployee(newEmployeeInfo);
      Alert.alert("Success", "New employee added successfully", [
        {
          text: "OK",
          onPress: () => navigation.navigate("Contact List"),
        },
      ]);
    } catch {
      Alert.alert("Error", "Failed to add new employee", [{ text: "OK" }]);
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <EmployeeImg />
        <EmployeeAddName
          onNameChange={handleNameChange}
          onDepartmentChange={handleDepartmentChange}
          departments={departments}
        />
        <EmployeeAddPhone onPhoneChange={handlePhoneChange} />
        <EmployeeAddAddress
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
          <Text style={styles.buttonText}>Cancel</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.pressedItem,
          ]}
          onPress={handleSave}
        >
          <Text style={styles.buttonText}>Save</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AddScreen;

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
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
