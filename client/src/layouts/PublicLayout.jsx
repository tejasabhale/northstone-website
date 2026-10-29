import { Outlet } from "react-router-dom";
import Navbar from "../components/pageLayout/Navbar";
import Footer from "../components/pageLayout/Footer";

const PublicLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default PublicLayout;
