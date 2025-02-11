import HeaderNav from "./pages-components/HeaderNav";
import Logo from "./pages-components/Logo";

export default function Header() {
  return (
    <header className="bg-purple-600 p-6 shadow-xl">
      <div className="container max-w-5xl mx-auto flex justify-between items-center">
        <Logo />
        <HeaderNav />
      </div>
    </header>
  );
}
