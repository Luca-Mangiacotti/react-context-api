import { Outlet } from "react-router-dom";
export default function LogLayout() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Outlet />
    </div>
  );
}
