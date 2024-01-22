import Main from "../../Component/Main/Main";
import Leftbar from "../../Component/Leftbar/Left";
import "../Home/Home.css";
import Rightbar from "../../Component/Rightbar/Rightbar";

const Home = () => {
  return (
    <div className="home">
      <Leftbar />
      <Main />
      <Rightbar />
    </div>
  );
};

export default Home;
