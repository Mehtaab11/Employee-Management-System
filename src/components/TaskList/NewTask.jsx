const NewTask = ({ data }) => {
  return (
    <div>
      <div className="w-[300px] px-5 shrink-0 rounded-xl h-full bg-yellow-500">
        <div className=" items-center flex justify-between  py-5">
          {" "}
          <h3 className="bg-red-400 px-3 py-1 font-semibold">High</h3>
          <p className="text-sm font-semibolds">20 Feb 2025</p>
        </div>

        <h1 className="text-2xl font-bold">Task Title</h1>

        <p>
          boldipsum, dolor sit amet consectetur adipisicing elit. Qui aspernatur
          quos nesciunt, temporibus consequatur debitis?
        </p>
        <div className=" mt-5">
          <button className="bg-green-700 rounded-md cursor-pointer py-1 px-2 text-xs">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewTask;
