//importiamo useParams per andare ad estrapolare il parametro "ID" dall'url..menu/id
import { NavLink, useNavigate, useParams } from "react-router-dom";
//importiamo anche useEffect che servirà a gestire la chiamata per il singolo prodotto tramite id
import { useEffect, useState } from "react";
//importiamo axios per gestire la chiamata al server
import axios from "axios";

import { Link } from "react-router-dom";
//importiamo useNavigate per ottenere un reindirizzamento automatico ad un' azione
import { Navigate } from "react-router-dom";
//importiamo i componenti della pagina
import PizzaCard from "./pages-components/PizzaCard";
import BtnDefault from "./pages-components/BtnDefault";

export default function Pizza() {
  //tramite destrutturazione andiamo a prendere l'id grazie all'hook useParams
  const { id } = useParams();
  //inizializziamo una variabile di stato per contenere le informazioni del nostro prodotto
  const [pizza, setPizza] = useState({});

  const navigate = useNavigate();

  //richiamiamo useEffect che ci indirizzerà alla pagina caratterizzata dal'id richiesto
  //gestiamo l'errore 404 con catch usando il navigate per forzarlo ad un url /404 che ci restituirà
  //sempre pagina non trovata, come previsto nelle rotte (con il simbolo "*" includiamo tutte le rotte non previste)
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:3001/pizzas/${id}`)
      .then((res) => {
        setPizza(res.data);
      })
      .catch((error) => {
        if (error.status === 404) {
          console.log("prodotto inesistente errore 404");
          navigate("/404");
        }
      });
  }, [id, navigate]);
  const prevID = pizza.id - 1;
  const nextID = pizza.id + 1;
  console.log(pizza.id, prevID, nextID);
  return (
    <div className="p-8 w-4xl mx-auto flex justify-between items-center gap-6">
      <Link to={`/menu/${prevID}`}>
        <BtnDefault>precedente</BtnDefault>
      </Link>
      <PizzaCard currentPizza={pizza} />
      <Link to={`/menu/${nextID}`}>
        <BtnDefault>prossimo</BtnDefault>
      </Link>
    </div>
  );
}
