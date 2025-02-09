const AcceptTask = ({ data }) => {
  return (
    <div>
      <div className="w-[300px] px-5 shrink-0 rounded-xl h-full bg-blue-500">
        <div className=" items-center flex justify-between  py-5">
          {" "}
          <h3 className="bg-red-400 px-3 py-1 font-semibold">{data.category}</h3>
          <p className="text-sm font-semibolds">{data.date}</p>
        </div>

        <h1 className="text-2xl font-bold">{data.title}</h1>

        <p>
        {data.description}
        </p>
        <div className="flex justify-between mt-5">
          <button className="bg-green-700 rounded-md cursor-pointer py-1 px-2 text-xs">
            Mark as Completed
          </button>
          <button className="bg-red-400 rounded-md cursor-pointer py-1 px-2 text-xs">
            Mark as failed
          </button>
        </div>
      </div>
    </div>
  );
};

export default AcceptTask;
