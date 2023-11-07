import { IconArrowBack } from "@tabler/icons-react";
interface FilmesProps {
  filmes: any[];
  voltar: () => void;
}
export default function Filmes(props: FilmesProps) {
  return (
    <div className="flex flex-col items-center w-full gap-5">
      <button className="botao" onClick={props.voltar}>
        <IconArrowBack size={20} />
      </button>

      <table className="w-3/5 overflow-hidden text-xl rounded-lg opacity-80">
        <thead>
          <tr className="bg-zinc-900">
            <th className="p-2 font-bold">Titulo</th>
            <th className="p-2 font-bold">Episódio</th>
            <th className="p-2 font-bold">Data de lançamento</th>
          </tr>
        </thead>
        <tbody>
          {props.filmes.map((filme: any, i: number) => (
            <tr
              className={` text-center ${
                i % 2 === 0 ? "bg-zinc-700" : "bg-zinc-800"
              }`}
              key={filme.title}
            >
              <td className="p-2">{filme.title}</td>
              <td className="p-2">{filme.episode_id}</td>
              <td className="p-2">
                {new Date(filme.release_date).toLocaleDateString("pt-BR")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
