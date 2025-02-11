//importiamo il pacchetto per gestire i percorsi delle nostre pagine
import { BrowserRouter, Route, Routes } from "react-router-dom";

//qui l'import dei layouts
import DefaultLayout from "./pages/DefaultLayout";
import LogLayout from "./pages/Layouts/LogLayout";

//qui gli import delle pagine principali
import Homepage from "./pages/Homepage";
import Menu from "./pages/Menu";
import Pizza from "./pages/Pizza";
import AboutUS from "./pages/AboutUs";
import PageNotFound from "./pages/PageNotFound";

//Admin Pages
import Login from "./pages/Admin/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:id" element={<Pizza />} />
          <Route path="/about-us" element={<AboutUS />} />
        </Route>
        <Route element={<LogLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
