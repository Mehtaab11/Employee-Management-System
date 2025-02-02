import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthContext";
import { setLocalStorage } from "./utils/LocalStorage";
// import { setLocalStorage } from "./utils/LocalStorage";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [logggedInUserData, setLogggedInUserData] = useState(null);

  const authData = useContext(AuthContext);

  console.log(authData);

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setCurrentUser(userData.role)
      setLogggedInUserData(userData.data)
    }

  },[])

  const handleLogin = (email, password) => {
    if (
      authData &&
      authData.admin.email == email &&
      authData.admin.password == password
    ) {
      setCurrentUser({ role: "admin" });
      setLogggedInUserData(authData.admin);

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin", data: authData.admin })
      );
      console.log("this is admin");
    } else if (authData) {
      const employee = authData.employee.find((e) => {
        return e.email == email && e.password == password;
      });
      if (employee) {
        setCurrentUser({ role: "employee" });
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );

        setLogggedInUserData(employee);
      }
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  // setLocalStorage();

  return (
    <>
      {!currentUser ? (
        <Login handleLogin={handleLogin} />
      ) : currentUser.role === "admin" ? (
        <AdminDashboard data={logggedInUserData} />
      ) : (
        <EmployeeDashboard data={logggedInUserData} />
      )}
    </>
  );
};

export default App;
