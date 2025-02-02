const CompleteTask = () => {
  return (
    <div>
      <div className="w-[300px] px-5 shrink-0 rounded-xl h-full bg-green-700">
        <div className=" items-center flex justify-between  py-5">
          {" "}
          <h3 className="bg-red-500 px-3 py-1 font-semibold">High</h3>
          <p className="text-sm font-semibolds">20 Feb 2025</p>
        </div>

        <h1 className="text-2xl font-bold">Task Title</h1>

        <p>
          boldipsum, dolor sit amet consectetur adipisicing elit. Qui aspernatur
          quos nesciunt, temporibus consequatur debitis?
        </p>
      </div>
    </div>
  );
};

export default CompleteTask;
