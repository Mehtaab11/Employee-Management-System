const FailedTask = ({data}) => {
  return (
    <div>
      <div className="w-[300px] px-5 shrink-0 rounded-xl h-full bg-red-400">
      <div className=" items-center flex justify-between  py-5">
          {" "}
          <h3 className="bg-red-400 px-3 py-1 font-semibold">{data.category}</h3>
          <p className="text-sm font-semibolds">{data.date}</p>
        </div>

        <h1 className="text-2xl font-bold">{data.title}</h1>

        <p>
        {data.description}
        </p>
        <button className="bg-red-800 py-1 px-2 mt-4 w-full">Failed</button>
      </div>
    </div>
  );
};

export default FailedTask;
