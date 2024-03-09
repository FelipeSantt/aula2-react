import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar";

const PageLayout = () => {
    return ( 
        <>
            <Navbar />
            <Outlet />
        </>
     );
}
 
export default PageLayout;