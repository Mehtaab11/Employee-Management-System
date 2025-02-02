const CreateTask = () => {
  return (
    <div className=" bg-[#1c1c1c] p-5 mt-7">
      <form className="flex flex-wrap items-start w-full justify-between">
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task</h3>
            <input
              className="bg-transparent outline-none w-4/5 text-sm rounded-md border-[1px] border-gray-400 mb-4 px-2 py-1.5"
              type="text"
              placeholder="Make a sandwich"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              className="bg-transparent outline-none w-4/5 text-sm rounded-md border-[1px] border-gray-400 mb-4 px-2 py-1.5"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <input
              className="bg-transparent outline-none w-4/5 text-sm rounded-md border-[1px] border-gray-400 mb-4 px-2 py-1.5"
              type="text"
              placeholder="John Doe..."
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              className="bg-transparent outline-none w-4/5 text-sm rounded-md border-[1px] border-gray-400 mb-4 px-2 py-1.5"
              type="text"
              placeholder="Dev, Design, Marketing..."
            />
          </div>
        </div>

        <div className="w-1/2 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            className="bg-transparent outline-none w-4/5 text-sm rounded-md border-[1px] border-gray-400 mb-4 p-2"
            cols="30"
            rows="10"
          >
            
          </textarea>
          <button className="bg-emerald-500 w-4/5 rounded-md border-[1px] border-emerald-500 py-2 ">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
