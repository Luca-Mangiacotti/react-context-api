import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
//Contexts
import { SearchProvider } from "../contexts/SearchContext";

export default function DefaultLayout() {
  return (
    <div>
      <SearchProvider>
        <Header />
        <Outlet />
        <Footer />
      </SearchProvider>
    </div>
  );
}
