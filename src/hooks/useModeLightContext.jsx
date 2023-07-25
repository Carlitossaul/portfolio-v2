import { useContext } from "react";
import { ModeLightContext } from "../context/ThemeLight";

export const useModeLightContext = () => {
  const context = useContext(ModeLightContext);

  if (!context) {
    console.log("not found!");
  }

  return context;
};
