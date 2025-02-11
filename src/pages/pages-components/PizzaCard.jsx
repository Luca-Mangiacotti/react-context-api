import { Link } from "react-router-dom";
//importiamo useParams per gestire la condizione sul bottone per la visualizzazione
import { useParams } from "react-router-dom";

import BtnDefault from "./BtnDefault";
export default function PizzaCard({ currentPizza }) {
  const { id } = useParams();

  return (
    <div
      key={currentPizza.id}
      className="border-4 border-purple-600 border-double p-1.5 rounded-xl overflow-hidden h-full"
    >
      <h3 className="text-xl font-bold text-purple-800 py-1.5">
        &#127829; {currentPizza.name} &#x1F47D;
      </h3>
      <img
        className="aspect-video shadow-2xl rounded-2xl"
        src={currentPizza.image}
        alt={currentPizza.name}
      />
      {currentPizza.ingredients && (
        <ul className="flex flex-wrap gap-1 py-1.5">
          {currentPizza.ingredients.map((elm) => (
            <li key={elm}>{elm}</li>
          ))}
        </ul>
      )}
      {id ? (
        <Link to={`/menu`}>
          <BtnDefault>torna al menu</BtnDefault>
        </Link>
      ) : (
        <Link to={`/menu/${currentPizza.id}`}>
          <BtnDefault>visualizza pizza</BtnDefault>
        </Link>
      )}
    </div>
  );
}
