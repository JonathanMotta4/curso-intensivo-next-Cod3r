import { IconCheck } from "@tabler/icons-react";
interface PersonagensProps {
  personagens: any[];
  selecionar: (personagem: any) => void;
}
export default function Personagens(props: PersonagensProps) {
  return (
    <table className="w-3/5 overflow-hidden text-xl rounded-lg opacity-80">
      <thead>
        <tr className="bg-zinc-900">
          <th className="p-2 font-bold">Nome</th>
          <th className="p-2 font-bold">Altura</th>
          <th className="p-2 font-bold">Peso</th>
          <th className="p-2 font-bold">Ações</th>
        </tr>
      </thead>
      <tbody>
        {props.personagens.map((p: any, i: number) => (
          <tr
            className={` text-center ${
              i % 2 === 0 ? "bg-zinc-700" : "bg-zinc-800"
            }`}
            key={p.name}
          >
            <td className="p-2">{p.name}</td>
            <td className="p-2">{p.height}</td>
            <td className="p-2">{p.mass}</td>
            <td className="p-2">
              <button
                className="botao"
                onClick={() => {
                  props.selecionar(p);
                }}
              >
                <IconCheck size={20} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
