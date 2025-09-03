import { useContext, type CSSProperties } from "react";
import { NumerosContext } from "../context/NumerosContext";

export default function Input() {
  const { entrada, setEntrada } = useContext(NumerosContext);

  return (
    <input
      style={inputSld}
      value={entrada}
      onChange={(e) => setEntrada(e.target.value)}
      placeholder="Digite números separados por espaço"
    />
  );
}

const inputSld: CSSProperties = {
  display: "flex",
  padding: "10px",
  fontSize: "18px",
  borderRadius: "10px",
  border: "1px solid #fff"
};
