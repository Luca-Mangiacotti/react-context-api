import { Link } from "react-router-dom";
import BtnDefault from "./pages-components/BtnDefault";
export default function PageNotFound() {
  return (
    <div className="container w-xl mx-auto text-center items-center">
      <h1 className="font-extrabold pt-5">ERRORE!</h1>
      <h2 className="font-bold">
        <s>PIZZA</s> PAGINA NON TROVATA
      </h2>
      <img
        className="mx-auto"
        src="../../images/pizzanotfound.png"
        alt="not found"
      />
      <div className="flex gap-5 justify-center">
        <div>
          <Link to={`/menu/`}>
            <BtnDefault>TORNA AL MENU</BtnDefault>
          </Link>
        </div>
        <div>
          <Link to={`/`}>
            <BtnDefault>TORNA ALLA HOME</BtnDefault>
          </Link>
        </div>
      </div>
    </div>
  );
}
