import Logo from "./pages-components/Logo";
import BtnHeadFoot from "./pages-components/BtnHeadFoot";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-purple-600 p-6 shadow-xl">
      <div className="container max-w-5xl mx-auto flex justify-between items-center">
        <Link
          className="border-4 border-[#c9ae2a] border-double rounded-full"
          to="/login"
        >
          <BtnHeadFoot>LOGIN</BtnHeadFoot>
        </Link>
        <Logo />
      </div>
    </footer>
  );
}
