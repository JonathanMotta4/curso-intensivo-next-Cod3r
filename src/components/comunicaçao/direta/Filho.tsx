interface FilhoProps {
  nome: string;
  sobrenome: string;
}
export default function Filho(props: FilhoProps) {
  return (
    <div className="flex justify-center items-center bg-blue-400  text-zinc-50 border border-white rounded-md p-5 ">
      <div className="flex gap-2 items-center justify-center text-xl">
        <span>{props.nome}</span>
        <span>{props.sobrenome}</span>
      </div>
    </div>
  );
}
