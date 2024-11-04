import { Button } from "@/components/ui/button";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { IoIosSend } from "react-icons/io";

const FinalTrip = () => {
  let { tripid } = useParams();
  const [plan, setPlan] = useState();
  const [imageURL, setImageURL] = useState("");
  let defaultImage =
    "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D";

  useEffect(() => {
    if (tripid) {
      axios
        .get(`http://localhost:3000/generateitinerary/${tripid}`)
        .then((res) => {
          setPlan(res.data.data);
          console.log(res.data.data);
          fetchHotelImages("place", res.data.data?.prefences?.destination);
        })
        .catch((err) => {
          toast.error("Something went wrong");
        });
    }
  }, [tripid]);

  const fetchHotelImages = async (type, location) => {
    const apiKey = import.meta.env.VITE_PEXELS_API_KEY;
    try {
      const response = await axios.get(
        `https://api.pexels.com/v1/search?query=${type}+${location}&per_page=1`,
        {
          headers: {
            Authorization: apiKey,
          },
        }
      );
      const imgURL = response.data.photos[0]?.src.original;
      setImageURL(imgURL);
    } catch (error) {
      toast.error("Failed to fetch hotel images");
    }
  };

  return (
    <div className="max-w-[1360px] m-auto mt-[80px]">
      <div className="px-4 h-[250px] md:h-[450px]">
        <img
          className="object-cover rounded-md h-[100%] w-full"
          src={imageURL ? imageURL : defaultImage}
          alt="Hotel"
        />
      </div>
      <div className="px-6 flex justify-between items-center">
        <div>
          <div>
            <h2 className="text-2xl font-bold mt-5">
              {plan?.prefences?.destination}
            </h2>
            <div className="flex gap-2 flex-wrap md:flex-nowrap mt-3">
              <p className="px-3 py-1 bg-gray-500 text-white rounded-xl">
                📅 {plan?.prefences?.days} Days
              </p>
              <p className="px-3 py-1 bg-gray-500 text-white rounded-xl">
                💰 {plan?.prefences?.budget}
              </p>
              <p className="px-3 py-1 bg-gray-500 text-white rounded-xl">
                🧑🏼‍🤝‍🧑🏼 {plan?.prefences?.people}
              </p>
            </div>
          </div>
        </div>
        <div>
          <Button>
            <IoIosSend />
          </Button>
        </div>
      </div>

      <div className="px-6">
        <h2 >Hotel Recommendation</h2>
      </div>



    </div>
  );
};

export default FinalTrip;
