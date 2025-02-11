import { useAlertContext } from "../../contexts/AlertContext";
export default function Alert() {
  const { alertData, setAlertData } = useAlertContext();
  const { type, message } = alertData;

  const handleAlertClose = () => {
    setAlertData({ type: "", message: "" });
  };

  const types = {
    info: "p-4 bg-blue-300",
    success: "p-4 bg-green-300",
    danger: "p-4 bg-red-300",
  };

  if (!message) return null;
  return (
    <div
      className={`flex justify-between items-center p-4 mx-5${types[type]} `}
    >
      {message}{" "}
      <button
        className="px-1 hover:not-focus:bg-red-600"
        onClick={handleAlertClose}
      >
        X
      </button>
    </div>
  );
}
