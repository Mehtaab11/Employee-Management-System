import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist-container"
      className="h-[55%] py-5 overflow-x-auto flex gap-5 mt-10 px-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"
    >
      {data.tasks &&
        data.tasks.map((task, index) => {
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
