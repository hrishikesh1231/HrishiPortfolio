import React from "react";

const Forever = () => {
  return (
    <div className="container p-5 text-center mt-5">
      <h1 className="mb-4">Forever – E-commerce Website</h1>

      <img
        src="media/forever.png" // update this path to match your actual image location
        style={{ width: "50rem", borderRadius: "1rem", marginTop: "2rem" }}
        alt="Forever E-commerce Screenshot"
      />

      <p
        style={{
          marginTop: "4rem",
          fontSize: "1.1rem",
          lineHeight: "2rem",
        }}
      >
        Forever is a full-stack online clothing e-commerce platform that allows
        users to browse fashion products, add them to a cart, and place orders.
        The application provides a smooth shopping experience with a product
        listing page, product details, cart management, and order checkout. It
        is built using <strong>React.js</strong> for the frontend and
        <strong> Node.js, Express.js, and MongoDB</strong> for the backend, with
        a fully responsive layout using <strong>HTML</strong> and{" "}
        <strong>CSS</strong>. This project demonstrates integration of RESTful
        APIs and basic authentication for order access. The platform is deployed
        online for public use and demonstration.
      </p>

      
    </div>
  );
};

export default Forever;
