import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  console.log(userData);
  

  return (
    <div
      id="admin-task"
      className="bg-[#1c1c1c] mt-5 flex flex-col  gap-3 h-96 p-5"
    >
      <div className="bg-emerald-600 border text-lg flex justify-between rounded-md px-4 py-4">
        <h2>Name</h2>
        <h3>New Task </h3>
        <h4>Active Task</h4>
        <h4>Completed Task</h4>
        <h4>Failed Task</h4>
      </div>

      <div id="admin-task" className="overflow-y-auto h-96 flex flex-col gap-5">
        {userData.map((e) => (
          <div
            key={e.id}
            className="border-emerald-600 border-2 flex justify-between rounded-md px-4 py-4"
          >
            <h2 className="text-lg">{e.firstName}</h2>
            <h2 className="text-lg">{e.taskNumbers.newtask}</h2>
            <h2 className="text-lg">{e.taskNumbers.active}</h2>
            <h2 className="text-lg text-blue-600">{e.taskNumbers.completed}</h2>
            <h2 className="text-lg text-red-500">{e.taskNumbers.failed}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
