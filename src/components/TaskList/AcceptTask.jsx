const AcceptTask = ({ data }) => {
  return (
    <div className="w-[300px] px-5 shrink-0 rounded-xl min-h-[280px] bg-gradient-to-br from-blue-900 to-blue-700 shadow-md border border-blue-800 backdrop-blur-lg text-white transition-all duration-200 hover:shadow-blue-500/30">
      {/* Header */}
      <div className="flex items-center justify-between py-4">
        <h3 className="px-3 py-1 font-semibold bg-blue-500/20 text-blue-300 rounded-md">
          {data.category}
        </h3>
        <p className="text-sm font-medium text-gray-300">{data.date}</p>
      </div>

      {/* Task Title */}
      <h1 className="text-xl font-semibold text-blue-300">{data.title}</h1>

      {/* Description */}
      <p className="text-gray-200 mt-2 text-sm">{data.description}</p>

      {/* Action Buttons */}
      <div className="flex justify-between mt-5">
        <button className="bg-green-500 rounded-md cursor-pointer py-2 px-3 text-sm text-black font-medium transition-all duration-200 hover:bg-green-400">
          ✅ Mark as Completed
        </button>
        <button className="bg-red-500 rounded-md cursor-pointer py-2 px-3 text-sm text-black font-medium transition-all duration-200 hover:bg-red-400">
          ❌ Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
