//import dei componenti
import HeaderNav from "./pages-components/HeaderNav";
import Logo from "./pages-components/Logo";
//import di useLocation che servirà a restituirci l'url attuale
//tramite il quale imposteremo una condizione per la quale nel momento in cui
//ci troviamo in /menu visulizzeremo la barra di ricerca delle pizze
import { useLocation } from "react-router-dom";
import { useSearchContext } from "../contexts/SearchContext";

export default function Header() {
  const location = useLocation();
  const { search, setSearch } = useSearchContext();

  return (
    <header className="bg-purple-600 p-6 shadow-xl">
      <div className="container max-w-5xl mx-auto flex justify-between items-center">
        <Logo />
        <HeaderNav />
        {location.pathname === "/menu" && (
          <div className="p-2.5">
            <label
              htmlFor="searchBar"
              className="px-2.5 text-[#c9ae2a] font-bold"
            >
              Cerca prodotto
            </label>
            <input
              id="searchBar"
              className="border-4 border-[#c9ae2a] border-double rounded-full p-2 bg-purple-300"
              type="search"
              placeholder="Cerca..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>
        )}
      </div>
    </header>
  );
}
