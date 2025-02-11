export default function BtnHeadFoot({ children }) {
  return (
    <button className="p-2 font-extrabold bg-[#c9ae2a] rounded-full text-purple-600 shadow-[#c9ae2a] hover:not-focus:bg-amber-100 hover:not-focus:text-[#c9ae2a]">
      {children}
    </button>
  );
}
