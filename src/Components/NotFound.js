import React from "react";
import { Link } from "react-router-dom";
import NotFoundimg from "../asset/images/error-404-message.png"

const NotFound = () => {
  return (
    <div className="h-screen flex justify-center items-center">
        <div className="card  bg-base-100">
      <figure className="px-10 pt-10">
        <img
          src={NotFoundimg}
          alt="NotFound"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Page Not Found</h2>
        <div className="card-actions">
          <Link to='/' className="btn btn-primary">Goto Home Page</Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default NotFound;
