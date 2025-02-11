export default function BtnDefault({ children }) {
  return (
    <button className="p-2 font-extrabold bg-purple-600 rounded-full text-[#c9ae2a] shadow-purple-300 hover:not-focus:bg-purple-300 hover:not-focus:text-purple-600">
      {children}
    </button>
  );
}
