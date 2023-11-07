import Background from "@/components/starWars/Background";
import Personagens from "@/components/starWars/Personagens";
import useStarWars from "@/data/hooks/useStarWars";
import Filmes from "@/components/starWars/Filmes";
export default function PaginaStarWars() {
  const { processando, personagens, selecionarPersonagem, filmes, voltar } =
    useStarWars();

  return (
    <div className="relative flex flex-col items-center justify-center h-screen gap-5">
      <Background />

      {processando ? (
        <div>Processando...</div>
      ) : filmes.length > 0 ? (
        <Filmes filmes={filmes} voltar={voltar} />
      ) : personagens.length > 0 ? (
        <Personagens
          personagens={personagens}
          selecionar={selecionarPersonagem}
        />
      ) : (
        <div>Dados não encontrado</div>
      )}
    </div>
  );
}
