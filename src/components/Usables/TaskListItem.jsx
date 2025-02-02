const TaskListItem = ({ data }) => {
  console.log(data);
  return (
    <div className="flex justify-between mt-10 gap-5">
      
      <div className="h-32 w-[45%] rounded-md px-4 py-10 bg-yellow-500">
        <h2 className="text-2xl">{data.taskNumbers.newtask}</h2>
        <h3 className="text-lg">New Task</h3>
      </div>
      <div className="h-32 w-[45%] rounded-md px-4 py-10 bg-blue-500">
        <h2 className="text-2xl">{data.taskNumbers.active}</h2>
        <h3 className="text-lg">Active Task</h3>
      </div>
      <div className="h-32 w-[45%] rounded-md px-4 py-10 bg-green-400">
        <h2 className="text-2xl">{data.taskNumbers.completed}</h2>
        <h3 className="text-lg">Complete Task</h3>
      </div>
      <div className="h-32 w-[45%] rounded-md px-4 py-10 bg-red-500">
        <h2 className="text-2xl">{data.taskNumbers.failed}</h2>
        <h3 className="text-lg">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListItem;
