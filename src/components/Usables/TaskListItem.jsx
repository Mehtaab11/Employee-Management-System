const TaskListItem = ({ data }) => {
  return (
    <div className="grid grid-cols-2 gap-6 mt-10">
      {[
        { label: "New Task", value: data.taskNumbers.newtask, color: "bg-yellow-500", text: "text-yellow-200", glow: "shadow-yellow-400/50" },
        { label: "Active Task", value: data.taskNumbers.active, color: "bg-blue-500", text: "text-blue-200", glow: "shadow-blue-500/50" },
        { label: "Completed Task", value: data.taskNumbers.completed, color: "bg-green-500", text: "text-green-200", glow: "shadow-green-400/50" },
        { label: "Failed Task", value: data.taskNumbers.failed, color: "bg-red-500", text: "text-red-200", glow: "shadow-red-500/50" },
      ].map((task, index) => (
        <div
          key={index}
          className={`h-36 flex flex-col justify-center items-center ${task.color} border border-white/20 rounded-xl shadow-md p-6 transition duration-300 hover:scale-[1.03] hover:${task.glow} backdrop-blur-md bg-opacity-90`}
        >
          <h2 className={`text-3xl font-bold ${task.text} drop-shadow-md`}>{task.value}</h2>
          <h3 className="text-lg font-semibold text-white">{task.label}</h3>
        </div>
      ))}
    </div>
  );
};

export default TaskListItem;
  