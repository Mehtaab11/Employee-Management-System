const FailedTask = ({ data }) => {
  return (
    <div className="w-[300px] px-5 shrink-0 rounded-xl min-h-[280px] bg-gradient-to-br from-red-900 to-red-700 shadow-md border border-red-800 backdrop-blur-lg text-white transition-all duration-200 hover:shadow-red-500/30">
      {/* Header */}
      <div className="flex items-center justify-between py-4">
        <h3 className="px-3 py-1 font-semibold bg-red-500/20 text-red-300 rounded-md">
          {data.category}
        </h3>
        <p className="text-sm font-medium text-gray-300">{data.date}</p>
      </div>

      {/* Task Title */}
      <h1 className="text-xl font-semibold text-red-300">{data.title}</h1>

      {/* Description */}
      <p className="text-gray-200 mt-2 text-sm">{data.description}</p>

      {/* Failed Button */}
      <button className="bg-red-800 py-2 px-3 mt-4 w-full text-white font-medium rounded-md transition-all duration-200 hover:bg-red-700">
        ❌ Failed
      </button>
    </div>
  );
};

export default FailedTask;
