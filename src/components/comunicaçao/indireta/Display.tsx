interface DisplayProps {
  valor: number;
}
function Display(props: DisplayProps) {
  return (
    <div className="flex  flex-1 justify-center items-center text-5xl font-thin bg-zinc-800 rounded-md p-5">
      {props.valor}
    </div>
  );
}

export default Display;
