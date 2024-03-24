import Header from "./Header";
import errorIMG from "../assets/errorIMG.png"

const Errorpage = () => {
  return (
    <div>
      <Header />
      <div className="h-screen w-12/12 flex justify-center items-center flex-col bg-gray-900 bg-gradient-to-b from-black">
        <img
          className="xl:w-80 lg:w-72 md:w-64 sm:-48 w-42"
          alt="WORKING"
          src={errorIMG}
        ></img>
        <h1 className="font-semibold lg:text-xl text-white mt-2 pt-2">
          STILL WORKING ON THIS ROUTE...
        </h1>
      </div>
    </div>
  );
};
export default Errorpage;
