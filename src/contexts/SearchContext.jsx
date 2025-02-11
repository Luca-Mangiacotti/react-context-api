import { createContext, useState, useContext } from "react";

//creazione del contesto
const SearchContext = createContext();

//creazione del componente custom provider
function SearchProvider({ children }) {
  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
}

//definizione di un hook custom per per permettere il consumo del context
function useSearchContext() {
  const context = useContext(SearchContext);
  return context;
}

export { SearchProvider, useSearchContext };
