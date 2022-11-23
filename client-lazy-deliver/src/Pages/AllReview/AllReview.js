import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import AllRow from "./AllRow";

const AllReview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://lazy-deliver-server.vercel.app/review?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  return (
    <div className="p-6">
      <div className="mx-auto text-4xl text-black w-fit bg-white my-5 p-2 rounded-sm">
        <h1 className="text-center">My Reviews</h1>
      </div>
      <h2 className="text-5xl text-center my-2">
        You have {reviews.length} Review
      </h2>
      <div className="overflow-x-auto w-full p-6">
        <table className="table w-full text-center" data-theme="lofi">
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer Name</th>
              <th>Service Name</th>
              <th>Review</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <AllRow key={review._id} review={review}></AllRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllReview;
