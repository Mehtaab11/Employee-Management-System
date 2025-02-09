import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const CreateTask = () => {
  const [title, setTaskTitle] = useState("");
  const [description, setTaskDesc] = useState("");
  const [date, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const [task, setTask] = useState({});
  const [userData, setUserData] = useContext(AuthContext);

  function submitHandler(e) {
    e.preventDefault();

    const newTask = {
      title,
      description,
      date,
      category,
      newtask: true,
      active: false,
      completed: false,
      failed: false,
    };

    setTask(newTask);

    const data = structuredClone(userData);

    console.log("Before Update:", data);

    (async () => {
      data.forEach((elem) => {
        if (elem.firstName === assignTo) {
          console.log("Found User:", elem);
          elem.tasks.push(newTask);
          elem.taskNumbers.newtask = (elem.taskNumbers.newtask || 0) + 1;
        }
      });

      await setUserData(data);
      localStorage.setItem("employee", JSON.stringify(data));
    })();

    console.log("After Update:", data);

    setTaskTitle("");
    setTaskDesc("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
  }

  return (
    <div className="bg-[#1a1a1a] p-6 mt-7 rounded-lg shadow-lg">
      <form
        onSubmit={(e) => submitHandler(e)}
        className="flex flex-wrap justify-between"
      >
        {/* Left Column */}
        <div className="w-1/2">
          {/* Task Title */}
          <div>
            <h3 className="text-sm text-gray-400 mb-1">Task</h3>
            <input
              value={title}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="bg-transparent outline-none w-4/5 text-sm rounded-md border border-gray-600 px-3 py-2 focus:border-emerald-400 transition-all duration-200"
              type="text"
              placeholder="Make a sandwich"
            />
          </div>

          {/* Date */}
          <div className="mt-3">
            <h3 className="text-sm text-gray-400 mb-1">Date</h3>
            <input
              value={date}
              onChange={(e) => setTaskDate(e.target.value)}
              className="bg-transparent outline-none w-4/5 text-sm rounded-md border border-gray-600 px-3 py-2 focus:border-emerald-400 transition-all duration-200"
              type="date"
            />
          </div>

          {/* Assign To */}
          <div className="mt-3">
            <h3 className="text-sm text-gray-400 mb-1">Assign to</h3>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="bg-transparent outline-none w-4/5 text-sm rounded-md border border-gray-600 px-3 py-2 focus:border-emerald-400 transition-all duration-200"
              type="text"
              placeholder="John Doe..."
            />
          </div>

          {/* Category */}
          <div className="mt-3">
            <h3 className="text-sm text-gray-400 mb-1">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="bg-transparent outline-none w-4/5 text-sm rounded-md border border-gray-600 px-3 py-2 focus:border-emerald-400 transition-all duration-200"
              type="text"
              placeholder="Dev, Design, Marketing..."
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="w-1/2 flex flex-col items-start">
          <h3 className="text-sm text-gray-400 mb-1">Description</h3>
          <textarea
            value={description}
            onChange={(e) => setTaskDesc(e.target.value)}
            className="bg-transparent outline-none w-4/5 text-sm rounded-md border border-gray-600 px-3 py-2 h-28 focus:border-emerald-400 transition-all duration-200"
          ></textarea>

          <button className="bg-emerald-500 w-4/5 mt-5 rounded-md border border-emerald-500 py-2 font-semibold text-white transition-all duration-200 hover:bg-emerald-600">
            ✅ Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
