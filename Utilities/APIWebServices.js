/** @format */

///////////////// IP ADDRESS /////////////////////////////////////
const IP_ADDRESS = "http://localhost:44350"

// http://localhost:44350/EmployeesController.asmx/GetAllEmployee

////////////// Fetch Employee Data from Backend //////////////////
const GET_EMPLOYEES_API_URL = IP_ADDRESS + "/EmployeesController.asmx/GetAllEmployee"

export const fetchEmployees = async (setEmployees, setLoading) => {
   try {
      const response = await fetch(GET_EMPLOYEES_API_URL)
      const json = await response.json()
      setEmployees(json)
   } catch (error) {
      console.error(error)
   } finally {
      setLoading(false)
   }
}

////////////// Fetch Department Data from Backend ///////////////////
const GET_DEPARTMENT_API_URL = IP_ADDRESS + "/EmployeesController.asmx/GetDepartments"

export const fetchDepartments = async (setDepartments, setLoading) => {
   try {
      const response = await fetch(GET_DEPARTMENT_API_URL)
      const json = await response.json()
      setDepartments(json)
   } catch (error) {
      console.error(error)
   } finally {
      setLoading(false)
   }
}

//////////////// Add Employee API ////////////////////////////////
const ADD_EMPLOYEE_API_URL = IP_ADDRESS + "/EmployeesController.asmx/CreateNewEmployee"

export const CreateNewEmployee = async (newEmployeeInfo) => {
   fetch(ADD_EMPLOYEE_API_URL, {
      method: "POST",
      headers: {
         "Content-Type": "application/x-www-form-urlencoded",
      },
      body: newEmployeeInfo,
   }).catch((err) => {
      console.log(err)
   })
}

///////////////// Update Employee API ///////////////////////////
const UPDATE_EMPOLOYEE_API_URL = IP_ADDRESS + "/EmployeesController.asmx/UpdateEmployee"

export const UpdateEmployee = async (updateEmployeeInfo) => {
   try {
      await fetch(UPDATE_EMPOLOYEE_API_URL, {
         method: "POST",
         headers: {
            "Content-Type": "application/x-www-form-urlencoded",
         },
         body: updateEmployeeInfo,
      })
   } catch (err) {
      console.error("Update failed:", err)
      throw err
   }
}
//////////////// Get Employee by Id /////////////////////////////
const GET_EMPLOYEES_BY_ID_API_URL = IP_ADDRESS + "/EmployeesController.asmx/GetEmployeeById"

export const fetchEmployeesById = async (id) => {
   try {
      const urlWithId = `${GET_EMPLOYEES_BY_ID_API_URL}?id=${id}`
      const response = await fetch(urlWithId)

      if (!response.ok) {
         throw new Error("Network response was not ok")
      }

      const json = await response.json()
      return json
   } catch (error) {
      console.error("Error fetching employee by ID:", error)
      throw error
   }
}

// ///////////////////////////// RECODE /////////////////////////////
// const endpoint = "http://localhost:44350/EmployeesController.asmx"

// const GetEmployee = async (employeeId) => {
//    try {
//       const res = await fetch(`${endpoint}/GetEmployees?id=${employeeId}`).then((result) => result.json())
//       return res
//    } catch {
//       console.log(`Failed to establish connection to server (${error})`)
//       throw error
//    }
// }

// const DeleteEmployee = async (employeeId) => {
//    try {
//       const res = await fetch(`${endpoint}/DeleteEmployee?id=${employeeId}`).then((result) => result.json())
//       return res
//    } catch {
//       console.log(`Failed to establish connection to server (${error})`)
//       throw error
//    }
// }
