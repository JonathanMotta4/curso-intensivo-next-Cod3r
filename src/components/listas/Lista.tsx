interface ListaProps {
  nomes: string[];
}

function Lista(props: ListaProps) {
  /* const itens: any[] = [];
  for (let i = 0; i < props.nomes.length; i++) {
    itens.push(
      <li key={props.nomes[i]} className="text-xl list-disc">
        {props.nomes[i]}
      </li>,
    );
  } */

  const itens = props.nomes.map((nome, i) => {
    return (
      <li
        key={nome}
        className={`text-xl  list-disc ${
          i % 2 === 0 ? "text-blue-500" : "text-yellow-400"
        }`}
      >
        {nome}
      </li>
    );
  });

  return <ul>{itens}</ul>;
}

export default Lista;
