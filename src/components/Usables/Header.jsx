const Header = (props) => {
  const logOutUser = () => {
    localStorage.removeItem("loggedInUser");
    props.changeUser("");
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg shadow-lg border border-white/20 rounded-xl px-8 py-5 flex items-center justify-between">
      <h1 className="text-xl md:text-2xl font-medium text-gray-200">
        Hello, <br />
        <span className="text-2xl md:text-3xl font-semibold text-blue-400 drop-shadow-md">
          {props.data?.firstName ? props.data.firstName : "Admin"} 👋🏼
        </span>
      </h1>

      <button
        onClick={logOutUser}
        className="bg-red-500 text-white font-semibold rounded-lg px-6 py-2 text-lg transition duration-300 shadow-md hover:bg-red-600 hover:shadow-red-500/50"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
