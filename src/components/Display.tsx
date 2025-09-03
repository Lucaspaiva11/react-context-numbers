import type { CSSProperties } from "react";
import Ball from "./Ball";
import { useContext } from "react";
import { NumerosContext } from "../context/NumerosContext";

export default function Display() {
  const { entrada } = useContext(NumerosContext);

  const numeros = entrada
    .trim()
    .split(" ")
    .filter((n) => n !== "") 
    .slice(0, 6); 

  if (numeros.length === 0) {
    return <div style={mensagemSld}>Sem entrada</div>;
  }

  return (
    <div style={containerSld}>
      {numeros.map((num, idx) => (
        <Ball key={idx} value={num} />
      ))}
    </div>
  );
}

const containerSld: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  borderRadius: "10px",
  border: "1px solid #fff",
  padding: "20px",
  gap: "20px"
};

const mensagemSld: CSSProperties = {
  fontSize: "20px",
  fontWeight: "bold",
  color: "#fff",
  textAlign: "center"
};
