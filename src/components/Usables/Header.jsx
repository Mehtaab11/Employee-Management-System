const Header = ({data}) => {
 

  const logOutUser = () => {
    localStorage.setItem("loggedInUser",'');
    window.location.reload();
  }

  

  return (
    <div>
      <div className="flex items-end justify-between ">
        <h1 className="text-2xl font-medium ">
          Hello, <br /> <span className="text-3xl font-semibold">{data.firstName} 👋🏼</span>
        </h1>{" "}
        <button onClick={logOutUser} className="text-white font-semibold rounded-sm bg-red-400 px-5 text-lg py-1">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Header;
