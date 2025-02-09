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

  const [userData, setUserData] = useContext(AuthContext);

  console.log(userData);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setCurrentUser({ role: userData.role });
      setLogggedInUserData(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (
      
      email == 'admin@me.com' &&
      password == 123
    ) {
      setCurrentUser({ role: "admin" });
      // setLogggedInUserData(authData.admin);

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin" })
      );
      console.log("this is admin");
    } else if (userData) {
      const employee = userData.find((e) => {
        return e.email == email && e.password == password;
      });
      if (employee) {
        setCurrentUser({ role: "employee" });
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );

        setLogggedInUserData(employee);
        console.log(employee);
      }
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  // setLocalStorage();
  // localStorage.clear();
  return (
    <>
      {!currentUser ? (
        <Login handleLogin={handleLogin} />
      ) : currentUser.role === "admin" ? (
        <AdminDashboard changeUser={setCurrentUser} data={logggedInUserData} />
      ) : (
        <EmployeeDashboard
          changeUser={setCurrentUser}
          data={logggedInUserData}
        />
      )}
    </>
  );
};

export default App;
