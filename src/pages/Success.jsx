import React from "react";
import { Link } from "react-router-dom";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function Success() {
  return (
    <div>
      <NavBar />
      <Announcement />
      <div className="px-10 py-5 flex flex-col items-center justify-center h-[50vh] md:h-[60vh] bg-[#fcf1ed]">
        <span className="text-3xl font-medium">Successful. Your order is being prepared...</span>
        <Link to="/">
          <button className="px-5 py-2 bg-primary rounded-md mt-5 text-lg">
            Go to Homepage
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Success;
