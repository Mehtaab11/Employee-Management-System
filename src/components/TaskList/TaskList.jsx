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
      {data.tasks.map((task, index) => {
        if (task.active) {
          return <AcceptTask key={task.title || index} />;
        }
        if (task.completed) {
          return <CompleteTask key={task.title || index} />;
        }
        if (task.failed) {
          return <FailedTask key={task.title || index} />;
        }
        if (task.new) {
          return <NewTask key={task.title || index} />;
        }
      })}
    </div>
  );
};

export default TaskList;
