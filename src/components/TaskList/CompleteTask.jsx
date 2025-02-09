const CompleteTask = ({ data }) => {
  return (
    <div className="w-[300px] px-5 shrink-0 rounded-xl min-h-[280px] bg-gradient-to-br from-green-900 to-green-700 shadow-md border border-green-800 backdrop-blur-lg text-white transition-all duration-200 hover:shadow-green-500/30">
      {/* Header */}
      <div className="flex items-center justify-between py-4">
        <h3 className="px-3 py-1 font-semibold bg-green-500/20 text-green-300 rounded-md">
          {data.category}
        </h3>
        <p className="text-sm font-medium text-gray-300">{data.date}</p>
      </div>

      {/* Task Title */}
      <h1 className="text-xl font-semibold text-green-300">{data.title}</h1>

      {/* Description */}
      <p className="text-gray-200 mt-2 text-sm">{data.description}</p>

      {/* Button */}
      <button className="bg-green-500 w-full py-2 mt-4 rounded-md text-black font-medium transition-all duration-200 hover:bg-green-400">
        ✅ Completed
      </button>
    </div>
  );
};

export default CompleteTask;
