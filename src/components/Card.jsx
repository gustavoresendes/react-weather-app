import React from "react";
import propTypes from "prop-types";

function Card({ data }) {
  const { location, current } = data;

  return (
    <div className="bg-slate-200 mt-7 p-6 rounded-md shadow-xl text-center  min-w-[230px] hover:border-green-500 hover:ring-1 hover:ring-green-500 bg-opacity-20 backdrop-blur-lg hover:scale-[110%] duration-500 ease-in-out">
      <div>
        <span className="block text-green-600 text-3xl">{location.name}</span>
        <span className="text-green-500 font-medium">
          {location.region}, {location.country}
        </span>
      </div>

      <div className="my-3">
        <span className="text-6xl font-bold text-slate-500 dark:text-white">
          {current.temp_c}
        </span>
        <span className="text-slate-500 font-medium dark:text-white">ºC</span>
      </div>

      <div>
        <img src={current.condition.icon} className="m-auto" />
        <span className="text-slate-400 font-medium dark:text-white">
          {current.condition.text}
        </span>
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  data: propTypes.data,
}.isRequired;
