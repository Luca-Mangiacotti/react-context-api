import { useEffect } from "react";
import { useAlertContext } from "../contexts/AlertContext";
export default function AboutUS() {
  const { setAlertData } = useAlertContext();

  useEffect(() => {
    setAlertData({
      type: "info",
      message:
        "servizio clienti in ascolto tutti i giorni dalle 8 alle 20 tranne sabato e domenica ",
    });
  }, [setAlertData]);

  return (
    <div className="container max-w-5xl mx-auto">
      <h2>sezione about us</h2>
    </div>
  );
}
