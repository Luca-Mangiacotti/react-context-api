import { useState, useEffect } from "react";
import axios from "axios";

//import del context search
import { useSearchContext } from "../contexts/SearchContext";

//import componenti
import PizzaCard from "./pages-components/PizzaCard";

export default function Menu() {
  const [PizzasList, setPizzasList] = useState([]);
  //andiamo ad estrapolare il contenuto di search per filtrarlo ed ottenere il contenuto desiderato nella ricerca
  const { search } = useSearchContext();

  const fetchPizzas = () => {
    axios.get("http://127.0.0.1:3001/pizzas").then(function (res) {
      setPizzasList(res.data);
      // console.log(res.data);
    });
  };

  useEffect(fetchPizzas, []);

  // andiamo a filtrare la nostra lista di pizze per cercare una corrispondenza con la ricerca
  const menuFiltered = PizzasList.filter((pizza) =>
    pizza.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container max-w-5xl mx-auto p-8">
      <h2 className="text-purple-600 font-bold text-4xl my-3.5">
        Menu delle pizze
      </h2>
      <ul className="grid grid-cols-3 gap-4 mb-3.5">
        {menuFiltered.length ? (
          menuFiltered.map((currentPizza) => (
            <PizzaCard key={currentPizza.id} currentPizza={currentPizza} />
          ))
        ) : (
          <h2>No Pizza Found :/ </h2>
        )}
      </ul>
    </div>
  );
}
