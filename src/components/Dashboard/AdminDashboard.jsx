// import TaskList from "../TaskList/TaskList";
import AllTask from "../Usables/AllTask";
import CreateTask from "../Usables/CreateTask";
import Header from "../Usables/Header";

const AdminDashboard = ({data}) => {
  return (
    <div className="p-10 h-screen bg-[#1c1c1c]">
      <Header data={data} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
