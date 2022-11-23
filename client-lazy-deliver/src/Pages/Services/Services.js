import React from "react";
// import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import { useState, useEffect } from "react";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://lazy-deliver-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

  return (
    <div className="p-6">
      <div className="mx-auto text-4xl text-black w-fit bg-white my-5 p-2 rounded-sm">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="flex items-center justify-center p-5">
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
          {
                services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
          }
        </div>
      </div>
    </div>
  );
};

export default Services;
