require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const connectDB = require("./database");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());




// Get all Employee data
app.get("/api/employee", (req, res) => {
  const sqlSelect = "SELECT * FROM employee";
  connectDB.query(sqlSelect, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

// Get all Employee_email data
app.get("/api/employee_email", (req, res) => {
  const sqlSelect = "SELECT * FROM employee_email";
  connectDB.query(sqlSelect, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

// Get all Employee_mobile_num data
app.get("/api/employee_mobile_num", (req, res) => {
  const sqlSelect = "SELECT * FROM employee_mobile_num";
  connectDB.query(sqlSelect, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

// Get all Doctor data
app.get("/api/doctor", (req, res) => {
  const sqlSelect = "SELECT * FROM doctor";
  connectDB.query(sqlSelect, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

// Get all Nurse data
app.get("/api/nurse", (req, res) => {
  const sqlSelect = "SELECT * FROM nurse";
  connectDB.query(sqlSelect, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

// Get all Administrator data
app.get("/api/administrator", (req, res) => {
  const sqlSelect = "SELECT * FROM administrator";
  connectDB.query(sqlSelect, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

// Get all Department data
app.get("/api/department", (req, res) => {
  const sqlSelect = "SELECT * FROM department";
  connectDB.query(sqlSelect, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});



// get all data from patient table
app.get("/api/patient", (req, res) => {
  const sqlSelect = "SELECT * FROM patient";
  connectDB.query(sqlSelect, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });  
});



// Get all Patient_email data
app.get("/api/patient_email", (req, res) => {
  const sqlSelect = "SELECT * FROM patient_email";
  connectDB.query(sqlSelect, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

// Get all Patient_phone_number data
app.get("/api/patient_phone_number", (req, res) => {
  const sqlSelect = "SELECT * FROM patient_phone_number";
  connectDB.query(sqlSelect, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

// Get all Ward data
app.get("/api/ward", (req, res) => {
  const sqlSelect = "SELECT * FROM ward";
  connectDB.query(sqlSelect, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

// Get all Floor data
app.get("/api/floor", (req, res) => {
  const sqlSelect = "SELECT * FROM floor";
  connectDB.query(sqlSelect, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

// Get all Medical_Supplies data
app.get("/api/medical_supplies", (req, res) => {
  const sqlSelect = "SELECT * FROM medical_Supplies";
  connectDB.query(sqlSelect, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

// Get all Medicines data
app.get("/api/medicines", (req, res) => {
  const sqlSelect = "SELECT * FROM medicines";
  connectDB.query(sqlSelect, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

// Get all Supplier data
app.get("/api/supplier", (req, res) => {
  const sqlSelect = "SELECT * FROM supplier";
  connectDB.query(sqlSelect, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

// Get all Supplier_phone_number data
app.get("/api/supplier_phone_number", (req, res) => {
  const sqlSelect = "SELECT * FROM supplier_phone_number";
  connectDB.query(sqlSelect, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

// Get all Billing data
app.get("/api/billing", (req, res) => {
  const sqlSelect = "SELECT * FROM billing";
  connectDB.query(sqlSelect, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

// Get all Resources data
app.get("/api/resources", (req, res) => {
  const sqlSelect = "SELECT * FROM resources";
  connectDB.query(sqlSelect, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

// Get all Supplies data
app.get("/api/supplies", (req, res) => {
  const sqlSelect = "SELECT * FROM supplies";
  connectDB.query(sqlSelect, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

// Get all Has data
app.get("/api/has", (req, res) => {
  const sqlSelect = "SELECT * FROM has";
  connectDB.query(sqlSelect, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

// Get all Treats data
app.get("/api/treats", (req, res) => {
  const sqlSelect = "SELECT * FROM treats";
  connectDB.query(sqlSelect, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

// Get all Department_head data
app.get("/api/department_head", (req, res) => {
  const sqlSelect = "SELECT * FROM department_head";
  connectDB.query(sqlSelect, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});


// ---------------------------------------------------------


// create new data
app.post("/api/insert_patient", (req, res) => {
    const patient_id = req.body.patient_id
    const date_of_birth = req.body.date_of_birth
    const fullname = req.body.fullname
    const gender = req.body.gender
    const street = req.body.street
    const city = req.body.city
    const thana = req.body.thana
    const house_no = req.body.house_no
    const ward_number = req.body.ward_number
    const floor_number = req.body.floor_number

  const sqlInser =
    "INSERT INTO patient (patient_id, date_of_birth, fullname, gender, street, city, thana, house_no, ward_number, floor_number) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  connectDB.query(sqlInser, [patient_id, date_of_birth, fullname, gender, street, city, thana, house_no, ward_number, floor_number], (err, result) => {
        res.json(err)
  });
});


// Insert new Employee
app.post("/api/insert_employee", (req, res) => {
  const { Employee_id, Last_Name, Middle_Name, First_Name, Salary, Shift, Street, Thana, House_Number, department_id } = req.body;
  const sqlInsert = "INSERT INTO Employee (Employee_id, Last_Name, Middle_Name, First_Name, Salary, Shift, Street, Thana, House_Number, department_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  connectDB.query(sqlInsert, [Employee_id, Last_Name, Middle_Name, First_Name, Salary, Shift, Street, Thana, House_Number, department_id], (err, result) => {
    res.json(err || result);
  });
});

// Insert new Employee_email
app.post("/api/insert_employee_email", (req, res) => {
  const { Employee_id, email } = req.body;
  const sqlInsert = "INSERT INTO Employee_email (Employee_id, email) VALUES (?, ?)";
  connectDB.query(sqlInsert, [Employee_id, email], (err, result) => {
    res.json(err || result);
  });
});

// Insert new Employee_mobile_num
app.post("/api/insert_employee_mobile_num", (req, res) => {
  const { Employee_id, mobile_num } = req.body;
  const sqlInsert = "INSERT INTO Employee_mobile_num (Employee_id, mobile_num) VALUES (?, ?)";
  connectDB.query(sqlInsert, [Employee_id, mobile_num], (err, result) => {
    res.json(err || result);
  });
});

// Insert new Doctor
app.post("/api/insert_doctor", (req, res) => {
  const { Employee_id, Specialization, Years_of_Experience } = req.body;
  const sqlInsert = "INSERT INTO Doctor (Employee_id, Specialization, Years_of_Experience) VALUES (?, ?, ?)";
  connectDB.query(sqlInsert, [Employee_id, Specialization, Years_of_Experience], (err, result) => {
    res.json(err || result);
  });
});

// Insert new Nurse
app.post("/api/insert_nurse", (req, res) => {
  const { Employee_id, nurse_role } = req.body;
  const sqlInsert = "INSERT INTO Nurse (Employee_id, nurse_role) VALUES (?, ?)";
  connectDB.query(sqlInsert, [Employee_id, nurse_role], (err, result) => {
    res.json(err || result);
  });
});

// Insert new Administrator
app.post("/api/insert_administrator", (req, res) => {
  const { Employee_id, Admin_Role } = req.body;
  const sqlInsert = "INSERT INTO Administrator (Employee_id, Admin_Role) VALUES (?, ?)";
  connectDB.query(sqlInsert, [Employee_id, Admin_Role], (err, result) => {
    res.json(err || result);
  });
});

// Insert new Department
app.post("/api/insert_department", (req, res) => {
  const { department_id, Department_Name, Location, head_of_dep } = req.body;
  const sqlInsert = "INSERT INTO Department (department_id, Department_Name, Location, head_of_dep) VALUES (?, ?, ?, ?)";
  connectDB.query(sqlInsert, [department_id, Department_Name, Location, head_of_dep], (err, result) => {
    res.json(err || result);
  });
});

// Insert new Patient_email
app.post("/api/insert_patient_email", (req, res) => {
  const { patient_id, email } = req.body;
  const sqlInsert = "INSERT INTO Patient_email (patient_id, email) VALUES (?, ?)";
  connectDB.query(sqlInsert, [patient_id, email], (err, result) => {
    res.json(err || result);
  });
});

// Insert new Patient_phone_number
app.post("/api/insert_patient_phone_number", (req, res) => {
  const { patient_id, phone_number } = req.body;
  const sqlInsert = "INSERT INTO Patient_phone_number (patient_id, phone_number) VALUES (?, ?)";
  connectDB.query(sqlInsert, [patient_id, phone_number], (err, result) => {
    res.json(err || result);
  });
});


// Insert new Floor
app.post("/api/insert_floor", (req, res) => {
  const  floor_number = req.body.floor_number;
  const  ward_count = req.body.ward_count;

  const sqlInsert = "INSERT INTO Floor (Floor_number, ward_count) VALUES (?, ?)";
  connectDB.query(sqlInsert, [floor_number, ward_count], (err, result) => {
    res.json(err || result);
  });
});


// Insert new Ward
app.post("/api/insert_ward", (req, res) => {
  const { ward_number, capacity, type_of_ward, floor_number } = req.body;
  const sqlInsert = "INSERT INTO Ward (ward_number, capacity, type_of_ward, floor_number) VALUES (?, ?, ?, ?)";
  connectDB.query(sqlInsert, [ward_number, capacity, type_of_ward, floor_number], (err, result) => {
    res.json(err || result);
  });
});



// Insert new Medical_Supplies
app.post("/api/insert_medical_supplies", (req, res) => {
  const { resource_id, Name, Type, Size } = req.body;
  const sqlInsert = "INSERT INTO Medical_Supplies (resource_id, Name, Type, Size) VALUES (?, ?, ?, ?)";
  connectDB.query(sqlInsert, [resource_id, Name, Type, Size], (err, result) => {
    res.json(err || result);
  });
});

// Insert new Medicines
app.post("/api/insert_medicines", (req, res) => {
  const { resource_id, medicine_name, manufacturer, expiry_Date } = req.body;
  const sqlInsert = "INSERT INTO Medicines (resource_id, medicine_name, manufacturer, expiry_Date) VALUES (?, ?, ?, ?)";
  connectDB.query(sqlInsert, [resource_id, medicine_name, manufacturer, expiry_Date], (err, result) => {
    res.json(err || result);
  });
});

// Insert new Supplier
app.post("/api/insert_supplier", (req, res) => {
  const { supplier_id, name, Supply_Type } = req.body;
  const sqlInsert = "INSERT INTO Supplier (supplier_id, name, Supply_Type) VALUES (?, ?, ?)";
  connectDB.query(sqlInsert, [supplier_id, name, Supply_Type], (err, result) => {
    res.json(err || result);
  });
});

// Insert new Supplier_phone_number
app.post("/api/insert_supplier_phone_number", (req, res) => {
  const { supplier_id, phone_number } = req.body;
  const sqlInsert = "INSERT INTO Supplier_phone_number (supplier_id, phone_number) VALUES (?, ?)";
  connectDB.query(sqlInsert, [supplier_id, phone_number], (err, result) => {
    res.json(err || result);
  });
});

// Insert new Billing
app.post("/api/insert_billing", (req, res) => {
  const { Billing_ID, room_charge, doctor_fees, medicine_Bill, billing_date, patient_id } = req.body;
  const sqlInsert = "INSERT INTO Billing (Billing_ID, room_charge, doctor_fees, medicine_Bill, billing_date, patient_id) VALUES (?, ?, ?, ?, ?, ?)";
  connectDB.query(sqlInsert, [Billing_ID, room_charge, doctor_fees, medicine_Bill, billing_date, patient_id], (err, result) => {
    res.json(err || result);
  });
});

// Insert new Resources
app.post("/api/insert_resources", (req, res) => {
  const { resource_id, resoruce_type, cost_per_unit, quantity } = req.body;
  const sqlInsert = "INSERT INTO Resources (resource_id, resoruce_type, cost_per_unit, quantity) VALUES (?, ?, ?, ?)";
  connectDB.query(sqlInsert, [resource_id, resoruce_type, cost_per_unit, quantity], (err, result) => {
    res.json(err || result);
  });
});

// Insert new Supplies
app.post("/api/insert_supplies", (req, res) => {
  const { resource_id, supplier_id } = req.body;
  const sqlInsert = "INSERT INTO Supplies (resource_id, supplier_id) VALUES (?, ?)";
  connectDB.query(sqlInsert, [resource_id, supplier_id], (err, result) => {
    res.json(err || result);
  });
});

// Insert new Has
app.post("/api/insert_has", (req, res) => {
  const { department_id, resource_id } = req.body;
  const sqlInsert = "INSERT INTO Has (department_id, resource_id) VALUES (?, ?)";
  connectDB.query(sqlInsert, [department_id, resource_id], (err, result) => {
    res.json(err || result);
  });
});

// Insert new Treats
app.post("/api/insert_treats", (req, res) => {
  const { Employee_id, patient_id } = req.body;
  const sqlInsert = "INSERT INTO Treats (Employee_id, patient_id) VALUES (?, ?)";
  connectDB.query(sqlInsert, [Employee_id, patient_id], (err, result) => {
    res.json(err || result);
  });
});

// Insert new Department_head
app.post("/api/insert_department_head", (req, res) => {
  const { employee_id, dep_head_id, start_date, end_date } = req.body;
  const sqlInsert = "INSERT INTO Department_head (employee_id, dep_head_id, start_date, end_date) VALUES (?, ?, ?, ?)";
  connectDB.query(sqlInsert, [employee_id, dep_head_id, start_date, end_date], (err, result) => {
    res.json(err || result);
  });
});




// ------------------------------------------





// Delete an employee
app.delete("/api/delete/employee", (req, res) => {
  const employee_id = req.body.employee_id; // Access employee_id from the request body

  const sqlDelete = "DELETE FROM Employee WHERE Employee_id = ?";
  connectDB.query(sqlDelete, [employee_id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: "Error deleting employee" });
    } else {
      res.send({ message: `Employee with ID ${employee_id} deleted successfully` });
    }
  });
});

// Delete employee email
app.delete("/api/delete/employee_email", (req, res) => {
  const email = req.body.email; // Access email from the request body

  const sqlDelete = "DELETE FROM Employee_email WHERE email = ?";
  connectDB.query(sqlDelete, [email], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: "Error deleting employee email" });
    } else {
      res.send({ message: `Employee email ${email} deleted successfully` });
    }
  });
});

// Delete employee mobile number
app.delete("/api/delete/employee_mobile", (req, res) => {
  const mobile_num = req.body.mobile_num; // Access mobile number from the request body

  const sqlDelete = "DELETE FROM employee_mobile_num WHERE mobile_num = ?";
  connectDB.query(sqlDelete, [mobile_num], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: "Error deleting employee mobile number" });
    } else {
      res.send({ message: `Employee mobile number ${mobile_num} deleted successfully` });
    }
  });
});

// Delete a doctor
app.delete("/api/delete/doctor", (req, res) => {
  const employee_id = req.body.employee_id; // Access employee_id from the request body

  const sqlDelete = "DELETE FROM Doctor WHERE Employee_id = ?";
  connectDB.query(sqlDelete, [employee_id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: "Error deleting doctor" });
    } else {
      res.send({ message: `Doctor with Employee ID ${employee_id} deleted successfully` });
    }
  });
});

// Delete a nurse
app.delete("/api/delete/nurse", (req, res) => {
  const employee_id = req.body.employee_id; // Access employee_id from the request body

  const sqlDelete = "DELETE FROM Nurse WHERE Employee_id = ?";
  connectDB.query(sqlDelete, [employee_id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: "Error deleting nurse" });
    } else {
      res.send({ message: `Nurse with Employee ID ${employee_id} deleted successfully` });
    }
  });
});

// Delete an administrator
app.delete("/api/delete/administrator", (req, res) => {
  const employee_id = req.body.employee_id; // Access employee_id from the request body

  const sqlDelete = "DELETE FROM Administrator WHERE Employee_id = ?";
  connectDB.query(sqlDelete, [employee_id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: "Error deleting administrator" });
    } else {
      res.send({ message: `Administrator with Employee ID ${employee_id} deleted successfully` });
    }
  });
});

// Delete a department
app.delete("/api/delete/department", (req, res) => {
  const department_id = req.body.department_id; // Access department_id from the request body

  const sqlDelete = "DELETE FROM Department WHERE department_id = ?";
  connectDB.query(sqlDelete, [department_id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: "Error deleting department" });
    } else {
      res.send({ message: `Department with ID ${department_id} deleted successfully` });
    }
  });
});

// Delete a patient
app.delete("/api/delete/patient", (req, res) => {
  const patient_id = req.body.patient_id; // Access patient_id from the request body

  const sqlDelete = "DELETE FROM Patient WHERE patient_id = ?";
  connectDB.query(sqlDelete, [patient_id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: "Error deleting patient" });
    } else {
      res.send({ message: `Patient with ID ${patient_id} deleted successfully` });
    }
  });
});

// Delete patient email
app.delete("/api/delete/patient_email", (req, res) => {
  const email = req.body.email; // Access email from the request body

  const sqlDelete = "DELETE FROM Patient_email WHERE email = ?";
  connectDB.query(sqlDelete, [email], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: "Error deleting patient email" });
    } else {
      res.send({ message: `Patient email ${email} deleted successfully` });
    }
  });
});

// Delete patient phone number
app.delete("/api/delete/patient_phone", (req, res) => {
  const phone_number = req.body.phone_number; // Access phone number from the request body

  const sqlDelete = "DELETE FROM Patient_phone_number WHERE phone_number = ?";
  connectDB.query(sqlDelete, [phone_number], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: "Error deleting patient phone number" });
    } else {
      res.send({ message: `Patient phone number ${phone_number} deleted successfully` });
    }
  });
});


// delete a ward
app.delete("/api/delete/ward", (req, res) => {
  const ward_number = req.body.ward_number; // Access ward_number from the request body

  const sqlDelete = "DELETE FROM ward WHERE ward_number = ?"; // Use ward_number in the query
  connectDB.query(sqlDelete, [ward_number], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: "Error deleting ward" });
    } else {
      res.send({ message: `Ward with number ${ward_number} deleted successfully` });
    }
  });
});


// Delete a floor
app.delete("/api/delete/floor", (req, res) => {
  const floor_number = req.body.floor_number; // Access floor_number from the request body

  const sqlDelete = "DELETE FROM Floor WHERE Floor_number = ?";
  connectDB.query(sqlDelete, [floor_number], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: "Error deleting floor" });
    } else {
      res.send({ message: `Floor with number ${floor_number} deleted successfully` });
    }
  });
});


// Delete medical supply
app.delete("/api/delete/medical_supply", (req, res) => {
  const resource_id = req.body.resource_id; // Access resource_id from the request body

  const sqlDelete = "DELETE FROM Medical_Supplies WHERE resource_id = ?";
  connectDB.query(sqlDelete, [resource_id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: "Error deleting medical supply" });
    } else {
      res.send({ message: `Medical supply with ID ${resource_id} deleted successfully` });
    }
  });
});

// Delete medicine
app.delete("/api/delete/medicine", (req, res) => {
  const resource_id = req.body.resource_id; // Access resource_id from the request body

  const sqlDelete = "DELETE FROM Medicines WHERE resource_id = ?";
  connectDB.query(sqlDelete, [resource_id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: "Error deleting medicine" });
    } else {
      res.send({ message: `Medicine with ID ${resource_id} deleted successfully` });
    }
  });
});

// Delete supplier
app.delete("/api/delete/supplier", (req, res) => {
  const supplier_id = req.body.supplier_id; // Access supplier_id from the request body

  const sqlDelete = "DELETE FROM Supplier WHERE supplier_id = ?";
  connectDB.query(sqlDelete, [supplier_id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: "Error deleting supplier" });
    } else {
      res.send({ message: `Supplier with ID ${supplier_id} deleted successfully` });
    }
  });
});

// Delete supplier phone number
app.delete("/api/delete/supplier_phone", (req, res) => {
  const phone_number = req.body.phone_number; // Access phone number from the request body

  const sqlDelete = "DELETE FROM Supplier_phone_number WHERE phone_number = ?";
  connectDB.query(sqlDelete, [phone_number], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: "Error deleting supplier phone number" });
    } else {
      res.send({ message: `Supplier phone number ${phone_number} deleted successfully` });
    }
  });
});

// Delete billing record
app.delete("/api/delete/billing", (req, res) => {
  const billing_id = req.body.billing_id; // Access billing_id from the request body

  const sqlDelete = "DELETE FROM Billing WHERE Billing_ID = ?";
  connectDB.query(sqlDelete, [billing_id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: "Error deleting billing record" });
    } else {
      res.send({ message: `Billing record with ID ${billing_id} deleted successfully` });
    }
  });
});

// Delete resource
app.delete("/api/delete/resource", (req, res) => {
  const resource_id = req.body.resource_id; // Access resource_id from the request body

  const sqlDelete = "DELETE FROM Resources WHERE resource_id = ?";
  connectDB.query(sqlDelete, [resource_id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: "Error deleting resource" });
    } else {
      res.send({ message: `Resource with ID ${resource_id} deleted successfully` });
    }
  });
});

// Delete supply relationship
app.delete("/api/delete/supply", (req, res) => {
  const resource_id = req.body.resource_id; // Access resource_id from the request body
  const supplier_id = req.body.supplier_id; // Access supplier_id from the request body

  const sqlDelete = "DELETE FROM Supplies WHERE resource_id = ? AND supplier_id = ?";
  connectDB.query(sqlDelete, [resource_id, supplier_id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: "Error deleting supply relationship" });
    } else {
      res.send({ message: `Supply relationship with Resource ID ${resource_id} and Supplier ID ${supplier_id} deleted successfully` });
    }
  });
});

// Delete department-resource relationship
app.delete("/api/delete/has", (req, res) => {
  const department_id = req.body.department_id; // Access department_id from the request body
  const resource_id = req.body.resource_id; // Access resource_id from the request body

  const sqlDelete = "DELETE FROM Has WHERE department_id = ? AND resource_id = ?";
  connectDB.query(sqlDelete, [department_id, resource_id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: "Error deleting department-resource relationship" });
    } else {
      res.send({ message: `Department-resource relationship with Department ID ${department_id} and Resource ID ${resource_id} deleted successfully` });
    }
  });
});

// Delete employee-patient treatment relationship
app.delete("/api/delete/treats", (req, res) => {
  const employee_id = req.body.employee_id; // Access employee_id from the request body
  const patient_id = req.body.patient_id; // Access patient_id from the request body

  const sqlDelete = "DELETE FROM Treats WHERE Employee_id = ? AND patient_id = ?";
  connectDB.query(sqlDelete, [employee_id, patient_id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: "Error deleting treatment relationship" });
    } else {
      res.send({ message: `Treatment relationship with Employee ID ${employee_id} and Patient ID ${patient_id} deleted successfully` });
    }
  });
});

// Delete department head relationship
app.delete("/api/delete/department_head", (req, res) => {
  const employee_id = req.body.employee_id; // Access employee_id from the request body
  const dep_head_id = req.body.dep_head_id; // Access dep_head_id from the request body

  const sqlDelete = "DELETE FROM Department_head WHERE employee_id = ? AND dep_head_id = ?";
  connectDB.query(sqlDelete, [employee_id, dep_head_id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: "Error deleting department head relationship" });
    } else {
      res.send({ message: `Department head relationship with Employee ID ${employee_id} and Department Head ID ${dep_head_id} deleted successfully` });
    }
  });
});





//  -------------------------------------------------------------------







// 1. Update Employee Table
app.put("/api/update/employee", (req, res) => {
  const { Employee_id, Last_Name, Middle_Name, First_Name, Salary, Shift, Street, Thana, House_Number, department_id } = req.body;

  const sqlUpdate = `
    UPDATE Employee
    SET Last_Name = ?, Middle_Name = ?, First_Name = ?, Salary = ?, Shift = ?, Street = ?, Thana = ?, House_Number = ?, department_id = ?
    WHERE Employee_id = ?`;

  connectDB.query(
    sqlUpdate,
    [Last_Name, Middle_Name, First_Name, Salary, Shift, Street, Thana, House_Number, department_id, Employee_id],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error updating Employee");
      } else {
        res.status(200).send("Employee updated successfully");
      }
    }
  );
});

// 2. Update Employee_email Table
app.put("/api/update/employee_email", (req, res) => {
  const { Employee_id, email } = req.body;

  const sqlUpdate = `
    UPDATE Employee_email
    SET email = ?
    WHERE Employee_id = ?`;

  connectDB.query(sqlUpdate, [email, Employee_id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error updating Employee Email");
    } else {
      res.status(200).send("Employee Email updated successfully");
    }
  });
});

// 3. Update Employee_mobile_num Table
app.put("/api/update/employee_mobile_num", (req, res) => {
  const { Employee_id, mobile_num } = req.body;

  const sqlUpdate = `
    UPDATE Employee_mobile_num
    SET mobile_num = ?
    WHERE Employee_id = ?`;

  connectDB.query(sqlUpdate, [mobile_num, Employee_id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error updating Employee Mobile Number");
    } else {
      res.status(200).send("Employee Mobile Number updated successfully");
    }
  });
});

// 4. Update Doctor Table
app.put("/api/update/doctor", (req, res) => {
  const { Employee_id, Specialization, Years_of_Experience } = req.body;

  const sqlUpdate = `
    UPDATE Doctor
    SET Specialization = ?, Years_of_Experience = ?
    WHERE Employee_id = ?`;

  connectDB.query(sqlUpdate, [Specialization, Years_of_Experience, Employee_id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error updating Doctor");
    } else {
      res.status(200).send("Doctor updated successfully");
    }
  });
});

// 5. Update Nurse Table
app.put("/api/update/nurse", (req, res) => {
  const { Employee_id, nurse_role } = req.body;

  const sqlUpdate = `
    UPDATE Nurse
    SET nurse_role = ?
    WHERE Employee_id = ?`;

  connectDB.query(sqlUpdate, [nurse_role, Employee_id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error updating Nurse");
    } else {
      res.status(200).send("Nurse updated successfully");
    }
  });
});

// 6. Update Administrator Table
app.put("/api/update/administrator", (req, res) => {
  const { Employee_id, Admin_Role } = req.body;

  const sqlUpdate = `
    UPDATE Administrator
    SET Admin_Role = ?
    WHERE Employee_id = ?`;

  connectDB.query(sqlUpdate, [Admin_Role, Employee_id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error updating Administrator");
    } else {
      res.status(200).send("Administrator updated successfully");
    }
  });
});

// 7. Update Department Table
app.put("/api/update/department", (req, res) => {
  const { department_id, Department_Name, Location, head_of_dep } = req.body;

  const sqlUpdate = `
    UPDATE Department
    SET Department_Name = ?, Location = ?, head_of_dep = ?
    WHERE department_id = ?`;

  connectDB.query(sqlUpdate, [Department_Name, Location, head_of_dep, department_id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error updating Department");
    } else {
      res.status(200).send("Department updated successfully");
    }
  });
});



// Update patient data
app.put("/api/update/patient", (req, res) => {
  const { patient_id, fullname, gender, street, city, thana, house_no, ward_number, floor_number } = req.body;

  const sqlUpdate = `
    UPDATE Patient 
    SET fullname = ?, gender = ?, street = ?, city = ?, thana = ?, house_no = ?, ward_number = ?, floor_number = ?
    WHERE patient_id = ?`;

  connectDB.query(
    sqlUpdate,
    [fullname, gender, street, city, thana, house_no, ward_number, floor_number, patient_id], // Parameter values
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error updating patient information");
      } else {
        res.status(200).send("Patient information updated successfully");
      }
    }
  );
});



// 9. Update Patient_email Table
app.put("/api/update/patient_email", (req, res) => {
  const { patient_id, email } = req.body;

  const sqlUpdate = `
    UPDATE Patient_email
    SET email = ?
    WHERE patient_id = ?`;

  connectDB.query(sqlUpdate, [email, patient_id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error updating Patient Email");
    } else {
      res.status(200).send("Patient Email updated successfully");
    }
  });
});

// 10. Update Patient_phone_number Table
app.put("/api/update/patient_phone_number", (req, res) => {
  const { patient_id, phone_number } = req.body;

  const sqlUpdate = `
    UPDATE Patient_phone_number
    SET phone_number = ?
    WHERE patient_id = ?`;

  connectDB.query(sqlUpdate, [phone_number, patient_id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error updating Patient Phone Number");
    } else {
      res.status(200).send("Patient Phone Number updated successfully");
    }
  });
});


// 11. Update Ward Table
app.put("/api/update/ward", (req, res) => {
  const { ward_number, capacity, type_of_ward, floor_number } = req.body;

  const sqlUpdate = `
    UPDATE Ward
    SET capacity = ?, type_of_ward = ?, floor_number = ?
    WHERE ward_number = ?`;

  connectDB.query(sqlUpdate, [capacity, type_of_ward, floor_number, ward_number], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error updating Ward");
    } else {
      res.status(200).send("Ward updated successfully");
    }
  });
});

// 12. Update Floor Table
app.put("/api/update/floor", (req, res) => {
  const { Floor_number, ward_count } = req.body;

  const sqlUpdate = `
    UPDATE Floor
    SET ward_count = ?
    WHERE Floor_number = ?`;

  connectDB.query(sqlUpdate, [ward_count, Floor_number], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error updating Floor");
    } else {
      res.status(200).send("Floor updated successfully");
    }
  });
});

// 13. Update Medical_Supplies Table
app.put("/api/update/medical_supplies", (req, res) => {
  const { resource_id, Name, Type, Size } = req.body;

  const sqlUpdate = `
    UPDATE Medical_Supplies
    SET Name = ?, Type = ?, Size = ?
    WHERE resource_id = ?`;

  connectDB.query(sqlUpdate, [Name, Type, Size, resource_id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error updating Medical Supplies");
    } else {
      res.status(200).send("Medical Supplies updated successfully");
    }
  });
});

// 14. Update Medicines Table
app.put("/api/update/medicines", (req, res) => {
  const { resource_id, medicine_name, manufacturer, expiry_Date } = req.body;

  const sqlUpdate = `
    UPDATE Medicines
    SET medicine_name = ?, manufacturer = ?, expiry_Date = ?
    WHERE resource_id = ?`;

  connectDB.query(sqlUpdate, [medicine_name, manufacturer, expiry_Date, resource_id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error updating Medicines");
    } else {
      res.status(200).send("Medicines updated successfully");
    }
  });
});

// 15. Update Supplier Table
app.put("/api/update/supplier", (req, res) => {
  const { supplier_id, name, Supply_Type } = req.body;

  const sqlUpdate = `
    UPDATE Supplier
    SET name = ?, Supply_Type = ?
    WHERE supplier_id = ?`;

  connectDB.query(sqlUpdate, [name, Supply_Type, supplier_id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error updating Supplier");
    } else {
      res.status(200).send("Supplier updated successfully");
    }
  });
});

// 16. Update Supplier_phone_number Table
app.put("/api/update/supplier_phone_number", (req, res) => {
  const { supplier_id, phone_number } = req.body;

  const sqlUpdate = `
    UPDATE Supplier_phone_number
    SET phone_number = ?
    WHERE supplier_id = ?`;

  connectDB.query(sqlUpdate, [phone_number, supplier_id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error updating Supplier Phone Number");
    } else {
      res.status(200).send("Supplier Phone Number updated successfully");
    }
  });
});

// 17. Update Billing Table
app.put("/api/update/billing", (req, res) => {
  const { Billing_ID, room_charge, doctor_fees, medicine_Bill, billing_date, patient_id } = req.body;

  const sqlUpdate = `
    UPDATE Billing
    SET room_charge = ?, doctor_fees = ?, medicine_Bill = ?, billing_date = ?
    WHERE Billing_ID = ?`;

  connectDB.query(sqlUpdate, [room_charge, doctor_fees, medicine_Bill, billing_date, Billing_ID], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error updating Billing");
    } else {
      res.status(200).send("Billing updated successfully");
    }
  });
});

// 18. Update Resources Table
app.put("/api/update/resources", (req, res) => {
  const { resource_id, resoruce_type, cost_per_unit, quantity } = req.body;

  const sqlUpdate = `
    UPDATE Resources
    SET resoruce_type = ?, cost_per_unit = ?, quantity = ?
    WHERE resource_id = ?`;

  connectDB.query(sqlUpdate, [resoruce_type, cost_per_unit, quantity, resource_id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error updating Resources");
    } else {
      res.status(200).send("Resources updated successfully");
    }
  });
});

// 19. Update Supplies Table
app.put("/api/update/supplies", (req, res) => {
  const { resource_id, supplier_id } = req.body;

  const sqlUpdate = `
    UPDATE Supplies
    SET supplier_id = ?
    WHERE resource_id = ?`;

  connectDB.query(sqlUpdate, [supplier_id, resource_id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error updating Supplies");
    } else {
      res.status(200).send("Supplies updated successfully");
    }
  });
});

// 20. Update Has Table
app.put("/api/update/has", (req, res) => {
  const { department_id, resource_id } = req.body;

  const sqlUpdate = `
    UPDATE Has
    SET resource_id = ?
    WHERE department_id = ?`;

  connectDB.query(sqlUpdate, [resource_id, department_id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error updating Has");
    } else {
      res.status(200).send("Has updated successfully");
    }
  });
});

// 21. Update Treats Table
app.put("/api/update/treats", (req, res) => {
  const { Employee_id, patient_id } = req.body;

  const sqlUpdate = `
    UPDATE Treats
    SET patient_id = ?
    WHERE Employee_id = ?`;

  connectDB.query(sqlUpdate, [patient_id, Employee_id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error updating Treats");
    } else {
      res.status(200).send("Treats updated successfully");
    }
  });
});

// 22. Update Department_head Table
app.put("/api/update/department_head", (req, res) => {
  const { employee_id, dep_head_id, start_date, end_date } = req.body;

  const sqlUpdate = `
    UPDATE Department_head
    SET dep_head_id = ?, start_date = ?, end_date = ?
    WHERE employee_id = ?`;

  connectDB.query(sqlUpdate, [dep_head_id, start_date, end_date, employee_id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error updating Department Head");
    } else {
      res.status(200).send("Department Head updated successfully");
    }
  });
});






app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});

