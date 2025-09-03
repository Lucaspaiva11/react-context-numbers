import { createContext, useState } from "react";
import type { ReactNode } from "react";

interface NumerosContextType {
  entrada: string;
  setEntrada: (value: string) => void;
}

export const NumerosContext = createContext<NumerosContextType>({
  entrada: "",
  setEntrada: () => {}
});

export function NumerosProvider({ children }: { children: ReactNode }) {
  const [entrada, setEntrada] = useState("");
  return (
    <NumerosContext.Provider value={{ entrada, setEntrada }}>
      {children}
    </NumerosContext.Provider>
  );
}
