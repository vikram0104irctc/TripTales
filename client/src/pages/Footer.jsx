import { FaGithub, FaYoutube, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export const Footer = () => {
  let navigate = useNavigate();
  return (
    <div className="w-full bg-[#f2f2f2] mt-16">
      <div className="max-w-[1360px] m-auto pt-12 pb-6 px-5">
        <div className="w-full flex justify-center items-center gap-10">
          <Link
            to={"https://www.linkedin.com/in/vikram-kumar-choudhary/"}
            target="_blank"
          >
            <FaLinkedin className="text-black text-2xl md:text-4xl cursor-pointer" />
          </Link>
          <Link to={"https://github.com/vikram0104irctc"} target="_blank">
            <FaGithub className="text-black text-2xl md:text-4xl cursor-pointer" />
          </Link>
          <FaYoutube className="text-black text-2xl md:text-4xl cursor-pointer" />
          <FaTwitter className="text-black text-2xl md:text-4xl cursor-pointer" />
        </div>
        <div className="w-full flex flex-wrap md:flex-nowrap justify-center items-center gap-5 md:gap-7 mt-5">
          <h2
            onClick={() => navigate("/")}
            className="text-black text-md md:text-lg font-semibold cursor-pointer"
          >
            Home
          </h2>
          <h2
            onClick={() => navigate("/pricing")}
            className="text-black text-md md:text-lg font-semibold cursor-pointer"
          >
            Pricing
          </h2>
          <h2 className="text-black text-md md:text-lg font-semibold cursor-pointer">
            About
          </h2>
          <h2 className="text-black text-md md:text-lg font-semibold cursor-pointer">
            Contact Us
          </h2>
        </div>
      </div>
      <div className="w-full bg-gray-300">
        <h2 className="text-black text-center p-1 text-sm font-semibold">
          Designed by Vikram © 2024. All rights reserved.
        </h2>
      </div>
    </div>
  );
};
