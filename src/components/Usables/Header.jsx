const Header = (props) => {
 

  const logOutUser = () => {
    // localStorage.setItem("loggedInUser",'');
    localStorage.removeItem("loggedInUser");
    props.changeUser('');
  }
console.log(props.data);
  

  return (
    <div>
      <div className="flex items-end justify-between ">
        <h1 className="text-2xl font-medium ">
          Hello, <br /> <span className="text-3xl font-semibold">{props.data?.firstName ? props.data.firstName : "Admin"} 👋🏼</span>
        </h1>{" "}
        <button onClick={logOutUser} className="text-white font-semibold rounded-sm bg-red-400 px-5 text-lg py-1">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Header;
