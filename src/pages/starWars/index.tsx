import Background from "@/components/starWars/Background";
import Personagens from "@/components/starWars/Personagens";
import useStarWars from "@/data/hooks/useStarWars";
export default function PaginaStarWars() {
  const { processando, personagens, obterPersonagens } = useStarWars();
  return (
    <div className="flex gap-5 flex-col justify-center items-center h-screen">
      <Background />
      <button onClick={obterPersonagens} className="bg-orange-500 p-2">
        Obter
      </button>
      {processando ? (
        <div>Processando...</div>
      ) : personagens.length > 0 ? (
        <Personagens personagens={personagens} />
      ) : (
        <div>Nenhum personagem encontrado</div>
      )}
    </div>
  );
}
