import useProcessando from "./useProcessando";
import { useCallback, useEffect, useState } from "react";

export default function useStarWars() {
  const { processando, iniciarProcessamento, encerrarProcessamento } =
    useProcessando();
  const [personagens, setPersonagens] = useState<any>([]);
  const [personagem, setPersonagem] = useState<any[]>([]);
  const [filmes, setFilmes] = useState<any>([]);
  const obterFilmes = useCallback(
    async function (personagem: any) {
      if (!personagem?.films?.length) return;
      try {
        iniciarProcessamento();
        const reqs = personagem.films.map(async (film: string) => {
          const resp = await fetch(film);
          return await resp.json();
        });
        const filmes = await Promise.all(reqs);
        setFilmes(filmes);

        
      } finally {
        encerrarProcessamento();
      }
    },
    [iniciarProcessamento, encerrarProcessamento],
  );
  function voltar() {
    setPersonagem([]);
    setFilmes([]);
  }
  useEffect(() => {
    obterFilmes(personagem);
  }, [personagem, obterFilmes]);
  const obterPersonagens = useCallback(
    async function () {
      try {
        iniciarProcessamento();
        const resp = await fetch("https://swapi.dev/api/people");
        const dados = await resp.json();

        setPersonagens(dados.results);
      } finally {
        encerrarProcessamento();
      }
    },
    [encerrarProcessamento, iniciarProcessamento],
  );
  function selecionarPersonagem(personagem: any) {
    setPersonagem(personagem);
  }
  useEffect(() => {
    obterPersonagens();
  }, [obterPersonagens]);

  return {
    personagens,
    filmes,
    processando,
    selecionarPersonagem,
    voltar,
  };
}
