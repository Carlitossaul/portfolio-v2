// creo el contexto
import { createContext, useState } from "react";

export const ModeLightContext = createContext();

// creo provider
export const ModeLightProvider = ({ children }) => {
  const [modeLight, setModeLight] = useState(false);

  return (
    <ModeLightContext.Provider value={{ modeLight, setModeLight }}>
      {children}
    </ModeLightContext.Provider>
  );
};
