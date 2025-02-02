import TaskList from "../TaskList/TaskList";
import Header from "../Usables/Header";
import TaskListItem from "../Usables/TaskListItem";

const EmployeeDashboard = ({ data }) => {
  console.log(data);
  return (
    <div className="p-10 h-screen bg-[#1c1c1c]">
      <Header data={data} />
      <TaskListItem data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashboard;
