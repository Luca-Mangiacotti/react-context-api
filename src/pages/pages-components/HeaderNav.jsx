import { Link, NavLink } from "react-router-dom";
import BtnHeadFoot from "./BtnHeadFoot";
export default function HeaderNav() {
  return (
    <div className="flex justify-between p-2.5 gap-1.5">
      <NavLink
        className="border-4 border-[#c9ae2a] border-double rounded-full"
        to="/"
      >
        <BtnHeadFoot>HOME</BtnHeadFoot>
      </NavLink>
      <NavLink
        className="border-4 border-[#c9ae2a] border-double rounded-full"
        to="/menu"
      >
        <BtnHeadFoot>MENU</BtnHeadFoot>
      </NavLink>
      <NavLink
        className="border-4 border-[#c9ae2a] border-double rounded-full"
        to="/about-us"
      >
        <BtnHeadFoot>INFO</BtnHeadFoot>
      </NavLink>
    </div>
  );
}
