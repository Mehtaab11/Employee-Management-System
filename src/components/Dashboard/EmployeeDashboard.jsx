import TaskList from "../TaskList/TaskList";
import Header from "../Usables/Header";
import TaskListItem from "../Usables/TaskListItem";

const EmployeeDashboard = (props) => {
  // console.log(data);
  return (
    <div className="p-10 h-screen bg-[#1c1c1c]">
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskListItem data={props.data} />
      <TaskList data={props.data} />
    </div>
  );
};

export default EmployeeDashboard;
