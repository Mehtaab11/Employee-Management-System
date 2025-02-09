import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ data }) => {
  console.log(data);
  return (
    <div
      id="tasklist-container"
      className="h-[55%] py-5 overflow-x-auto flex justify-between gap-5 mt-10"
    >
      {data.tasks && data.tasks.map((task, index) => {
        if (task.active) {
          return <AcceptTask data={task} key={task.title || index} />;
        }
        if (task.completed) {
          return <CompleteTask data={task} key={task.title || index} />;
        }
        if (task.failed) {
          return <FailedTask data={task} key={task.title || index} />;
        }
        if (task.newtask) {
          return <NewTask data={task} key={task.title || index} />;
        }
      })}
    </div>
  );
};

export default TaskList;
