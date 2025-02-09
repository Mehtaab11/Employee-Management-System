import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const AllTask = () => {
  const [userData] = useContext(AuthContext);
  console.log(userData);

  return (
    <div className="bg-[#111] mt-5 flex flex-col gap-3 h-96 p-6 rounded-lg shadow-lg border border-emerald-700">
      {/* Table Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-lg flex justify-between rounded-md px-5 py-4 font-semibold text-white shadow-md">
        <h2 className="text-yellow-300">Name</h2>
        <h3 className="text-purple-300">New Task</h3>
        <h4 className="text-blue-300">Active Task</h4>
        <h4 className="text-green-300">Completed</h4>
        <h4 className="text-red-300">Failed</h4>
      </div>

      {/* Task List (No Scrollbar) */}
      <div id="admin-task" className="flex overflow-y-auto flex-col gap-4">
        {userData.map((e) => (
          <div
            key={e.id}
            className="border border-emerald-500 flex justify-between items-center rounded-md px-5 py-4 bg-[#222] text-white transition-all duration-200 hover:bg-[#2a2a2a] hover:shadow-lg"
          >
            <h2 className="text-lg font-semibold text-yellow-400">{e.firstName}</h2>
            <h2 className="text-lg font-semibold text-purple-400">{e.taskNumbers.newtask}</h2>
            <h2 className="text-lg font-semibold text-blue-400">{e.taskNumbers.active}</h2>
            <h2 className="text-lg font-semibold text-green-400">{e.taskNumbers.completed}</h2>
            <h2 className="text-lg font-semibold text-red-400">{e.taskNumbers.failed}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
