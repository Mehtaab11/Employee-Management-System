import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const CreateTask = () => {
  const [title, setTaskTitle] = useState("");
  const [description, setTaskDesc] = useState("");
  const [date, setTaskDate] = useState("");
  const [asignTo, setAsignTo] = useState("");
  const [category, setCategory] = useState("");

  const [task, setTask] = useState({});

  const [userData, setUserData] = useContext(AuthContext);
  
  function submitHandler(e) {
    e.preventDefault();
  
    // Create task object first before updating state
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
  
    // Update the task state
    setTask(newTask);
  
    // Deep copy userData to avoid mutating state directly
    const data = structuredClone(userData); // Alternative: JSON.parse(JSON.stringify(userData))
  
    console.log("Before Update:", data);
  
    (async () => {
      data.forEach((elem) => {
        if (elem.firstName === asignTo) {
          console.log("Found User:", elem);
          elem.tasks.push(newTask); // Use newTask instead of task
  
          // Ensure taskNumbers.newtask is initialized
          elem.taskNumbers.newtask = (elem.taskNumbers.newtask || 0) + 1;
        }
      });
  
      await setUserData(data);
      localStorage.setItem("employee", JSON.stringify(data));
    })();
  
    console.log("After Update:", data);
  
    // Clear input fields
    setTaskTitle("");
    setTaskDesc("");
    setTaskDate("");
    setAsignTo("");
    setCategory("");
  }
  

  return (
    <div className=" bg-[#1c1c1c] p-5 mt-7">
      <form
        onSubmit={(e) => submitHandler(e)}
        className="flex flex-wrap items-start w-full justify-between"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task</h3>
            <input
              value={title}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="bg-transparent outline-none w-4/5 text-sm rounded-md border-[1px] border-gray-400 mb-4 px-2 py-1.5"
              type="text"
              placeholder="Make a sandwich"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={date}
              onChange={(e) => setTaskDate(e.target.value)}
              className="bg-transparent outline-none w-4/5 text-sm rounded-md border-[1px] border-gray-400 mb-4 px-2 py-1.5"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <input
              value={asignTo}
              onChange={(e) => setAsignTo(e.target.value)}
              className="bg-transparent outline-none w-4/5 text-sm rounded-md border-[1px] border-gray-400 mb-4 px-2 py-1.5"
              type="text"
              placeholder="John Doe..."
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="bg-transparent outline-none w-4/5 text-sm rounded-md border-[1px] border-gray-400 mb-4 px-2 py-1.5"
              type="text"
              placeholder="Dev, Design, Marketing..."
            />
          </div>
        </div>

        <div className="w-1/2 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            value={description}
            onChange={(e) => setTaskDesc(e.target.value)}
            className="bg-transparent outline-none w-4/5 text-sm rounded-md border-[1px] border-gray-400 mb-4 p-2"
            cols="30"
            rows="10"
          ></textarea>
          <button className="bg-emerald-500 w-4/5 rounded-md border-[1px] border-emerald-500 py-2 ">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
