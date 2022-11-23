import React from "react";
import { Link } from "react-router-dom";
import LimitServiceCard from "./LimitServiceCard";
import { useState, useEffect } from "react";

const LimitService = () => {
    const [limitServices, setLimitServices] = useState([]);

    useEffect(() => {
        fetch('https://lazy-deliver-server.vercel.app/limited-services')
            .then(res => res.json())
            .then(data => setLimitServices(data))
    }, [])


  return (
    <div className="p-6">
      <div className="mx-auto text-4xl text-black w-fit bg-white my-5 p-2 rounded-sm">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="flex items-center justify-center p-5">
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
          {
                limitServices.map(limitService => <LimitServiceCard key={limitService._id} limitService={limitService}></LimitServiceCard>)
          }
        </div>
      </div>
      <div className="flex items-center justify-center" >
        <Link to="/services">
          <button className="btn btn-primary" data-theme="lofi">See More</button>
        </Link>
      </div>
    </div>
  );
};

export default LimitService;
