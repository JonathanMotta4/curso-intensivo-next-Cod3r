import Pai from "./Pai";

interface AvoProps {
  nome: string;
  sobrenome: string;
}
export default function Avo(props: AvoProps) {
  return (
    <div className="flex gap-5 flex-col bg-violet-700 text-zinc-50 border border-white p-5 rounded-md">
      <div className="flex gap-2 items-center justify-center text-2xl">
        <span>Avô</span>
        <span>{props.nome}</span>
        <span>{props.sobrenome}</span>
      </div>
      <div className="flex gap-5 ">
        <Pai nome="Alan" sobrenome={props.sobrenome} />
        <Pai nome="Jonathan" sobrenome={props.sobrenome} />
        <Pai nome="Max" sobrenome={props.sobrenome} />
      </div>
    </div>
  );
}
