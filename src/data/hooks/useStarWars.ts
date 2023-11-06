import useProcessando from "./useProcessando";
import { useState } from "react";

export default function useStarWars() {
  const { processando, iniciarProcessamento, encerrarProcessamento } =
    useProcessando();
  const [personagens, setPersonagens] = useState<any>([]);

  async function obterPersonagens() {
    try {
      iniciarProcessamento();
      const resp = await fetch("https://swapi.dev/api/people");
      const dados = await resp.json();

      setPersonagens(dados.results);
    } finally {
      encerrarProcessamento();
    }
  }
  return {
    personagens,
    obterPersonagens,
    processando,
  };
}
