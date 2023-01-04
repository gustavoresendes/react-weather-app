import React, { useState } from "react";
import fetchData from "./services/api";
import Card from "./components/Card";
import Switcher from "./components/Switcher";
import initialState from "./helpers/inititalState";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData(city)
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col w-full h-screen items-center justify-center dark:bg-slate-900 dark:text-gray-100 duration-100">
      <Switcher />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Cidade"
          pattern="[^\d]*"
          required
          onChange={({ target: { value } }) => setCity(value)}
          value={city}
          className="p-3 rounded-md focus:outline-none bg-slate-100 focus:border-green-500 focus:ring-1 focus:ring-green-500
          invalid:border-pink-500 invalid:text-pink-600 dark:text-slate-700
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500 shadow-md ease-in-out duration-300"
        />
        <button
          type="submit"
          className="text-md text-white drop-shadow-md shadow-md bg-green-500 p-3 ml-3 rounded-lg hover:scale-[110%] duration-500 ease-in-out "
        >
          Pesquisar
        </button>
      </form>

      <Card data={data} />
    </div>
  );
}

export default App;
