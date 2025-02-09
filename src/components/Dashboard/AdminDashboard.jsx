// import TaskList from "../TaskList/TaskList";
import AllTask from "../Usables/AllTask";
import CreateTask from "../Usables/CreateTask";
import Header from "../Usables/Header";

const AdminDashboard = (props) => {
  return (
    <div className="p-10 min-h-screen bg-[#1c1c1c]">
      <Header changeUser={props.changeUser} data={props.data} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
