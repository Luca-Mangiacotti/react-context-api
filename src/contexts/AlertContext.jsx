import Alert from "../pages/pages-components/Alert";
import { createContext, useContext, useState } from "react";

//creazione del contesto
const AlertContext = createContext();

//creazione del componente custom provider
function AlertProvider({ children }) {
  const [alertData, setAlertData] = useState({
    type: "",
    message: "",
  });

  return (
    <AlertContext.Provider value={{ alertData, setAlertData }}>
      <Alert />
      {children}
    </AlertContext.Provider>
  );
}

//definizione di una hook per richiamare il consumo del contesto
function useAlertContext() {
  const context = useContext(AlertContext);
  return context;
}

export { AlertProvider, useAlertContext };
