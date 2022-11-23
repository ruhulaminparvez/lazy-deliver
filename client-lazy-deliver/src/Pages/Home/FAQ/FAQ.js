import React from "react";
const { useState, useEffect } = React;
const FAQ = () => {
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    fetch("https://lazy-deliver-server.vercel.app/faq")
      .then((res) => res.json())
      .then((data) => setFaq(data));
  }, []);

  return (
    <div className="p-6">
      <div className="mx-auto text-4xl text-black w-fit bg-white my-5 p-2 rounded-sm">
        <h1 className="text-center">FAQ</h1>
      </div>
      <div className="px-16">
        {faq.map((faq) => (
          <div
            tabIndex={0}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-3"
            data-theme="lofi"
            key={faq._id}
          >
            <div className="collapse-title text-xl font-medium">
              {faq.title}
            </div>
            <div className="collapse-content">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
