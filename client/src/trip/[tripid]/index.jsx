import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const FinalTrip = () => {
  let { tripid } = useParams();
  const [plan, setPlan] = useState();
  useEffect(() => {
    if (tripid) {
      axios
        .get(`http://localhost:3000/generateitinerary/${tripid}`)
        .then((res) => {
          setPlan(res.data.data);
        })
        .catch((err) => {
          toast.error("Something went wrong");
        });
    }
  },[]);
  console.log(plan);
  return <div>FinalTrip</div>;
};

export default FinalTrip;
