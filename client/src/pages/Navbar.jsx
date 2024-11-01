import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/clerk-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { isSignedIn } = useUser();
  let navigate = useNavigate();
  // console.log(user?.emailAddresses[0]?.emailAddress);
  return (
    <div className="w-full fixed top-0 left-0 shadow-md z-50 bg-white">
      <div className="max-w-[1400px] m-auto flex justify-between items-center py-4 px-4">
        <div
          onClick={() => navigate("/")}
          className="flex gap-1 items-center cursor-pointer"
        >
          <img width={50} src="./logo.svg" />
          <h2 className="font-bold text-xl leading-3 cursor-pointer">
            TripTales
          </h2>
        </div>
        {isSignedIn ? (
          <div className="flex gap-5 md:gap-10">
            <div>
              <p
                onClick={() => navigate("/pricing")}
                className="border py-1 px-3 rounded-lg cursor-pointer border-gray-800"
              >
                Pricing
              </p>
            </div>
            <div className="flex items-center transform scale-150">
              <UserButton />
            </div>
          </div>
        ) : (
          <Link to={"/auth"}>
            <Button className="py-2">Login</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
