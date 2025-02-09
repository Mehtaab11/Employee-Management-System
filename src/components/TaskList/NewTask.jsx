const NewTask = ({ data }) => {
  return (
    <div className="w-[300px] px-5 shrink-0 rounded-xl min-h-[280px] bg-gradient-to-br from-yellow-700 to-yellow-400 shadow-md border border-yellow-600 backdrop-blur-lg text-white transition-all duration-200 hover:shadow-yellow-500/30">
      {/* Header */}
      <div className="flex items-center justify-between py-4">
        <h3 className="px-3 py-1 font-semibold bg-yellow-500/20 text-yellow-300 rounded-md">
          {data.category}
        </h3>
        <p className="text-sm font-medium text-gray-300">{data.date}</p>
      </div>

      {/* Task Title */}
      <h1 className="text-xl font-semibold text-yellow-300">{data.title}</h1>

      {/* Description */}
      <p className="text-gray-200 mt-2 text-sm">{data.description}</p>

      {/* Accept Button */}
      <div className="mt-5">
        <button className="bg-green-700 py-2 px-3 w-full text-white font-medium rounded-md transition-all duration-200 hover:bg-green-600">
          ✅ Accept
        </button>
      </div>
    </div>
  );
};

export default NewTask;
