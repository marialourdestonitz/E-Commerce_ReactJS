import { Outlet } from "react-router-dom";
import Directory from "../../component/directory/Directory";

const Home = () => {
  return (
    <div>
    <Directory/>
    <Outlet/>
    </div>
  );
};

export default Home