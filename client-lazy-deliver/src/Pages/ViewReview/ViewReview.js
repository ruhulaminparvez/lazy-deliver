import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const ViewReview = () => {
  const [reviews, setReviews] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://lazy-deliver-server.vercel.app/review?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  const handleDelete = (review) => {
    console.log(review);
    const deleteReview = window.confirm(
      `Are you sure to delete this review? ${review.serviceName}`
    );
    if (deleteReview) {
      fetch(`https://lazy-deliver-server.vercel.app/delete-review/${review._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Review deleted successfully");
            // display remaining reviews
            const remainingReviews = reviews.filter(
              (r) => r._id !== review._id
            );
            setReviews(remainingReviews);
          }
        });
    }
  }

  return (
    <div className="flex flex-col gap-3 items-center justify-center mt-10">
      {reviews.map((review) => (
        <div
          key={review._id}
          className="card w-96 bg-neutral text-neutral-content"
          data-theme="lofi"
        >
          <div className="card-body items-center text-center">
            <h2 className="card-title">{review.customer}</h2>
            <p>{review.message}</p>
            <div className="card-actions justify-end">
              <Link to={`/edit-review/${review._id}`}>
                <button className="btn btn-primary">Edit</button>
              </Link>
              <button className="btn btn-primary" onClick={() => handleDelete(review)}>Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewReview;
