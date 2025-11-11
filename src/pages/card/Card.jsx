import React from "react";
import { Link, useLoaderData } from "react-router";

export default function Card({ data }) {
  //console.log(data);
  const {serviceId} = data;
  return (
    <div>
      <div className="grid grid-cols-3">
        <div className="card bg-base-100 w-98 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
          <figure className="h-52 overflow-hidden rounded-t-xl">
            <img
              src={data.image}
              alt={data.serviceName}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </figure>
          <div className="card-body p-4">
            <h2 className="card-title text-lg font-semibold text-gray-800">
              {data.serviceName}
            </h2>

            <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
              <span className="font-medium">Price: ${data.price}</span>
              <div className="flex items-center gap-1 text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <span>{data.rating}</span>
              </div>
            </div>

            <div className="card-actions justify-end mt-4">
              <Link to={`/card-details/${serviceId}`}>
                <button className="btn btn-sm btn-primary rounded-lg px-4">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
