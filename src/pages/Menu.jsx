import { useState, useEffect } from "react";
import axios from "axios";

//import componenti
import PizzaCard from "./pages-components/PizzaCard";

export default function Menu() {
  const initialState = {
    id: "",
    name: "",
    image: ``,
    ingredients: [""],
  };

  const [PizzasList, setPizzasList] = useState([]);

  const fetchPizzas = () => {
    axios.get("http://127.0.0.1:3001/pizzas").then(function (res) {
      setPizzasList(res.data);
      // console.log(res.data);
    });
  };

  useEffect(fetchPizzas, []);

  return (
    <div className="container max-w-5xl mx-auto p-8">
      <h2 className="text-purple-600 font-bold text-4xl my-3.5">
        Menu delle pizze
      </h2>
      <ul className="grid grid-cols-3 gap-4 mb-3.5">
        {PizzasList.map((currentPizza) => (
          <PizzaCard key={currentPizza.id} currentPizza={currentPizza} />
        ))}
      </ul>
    </div>
  );
}
