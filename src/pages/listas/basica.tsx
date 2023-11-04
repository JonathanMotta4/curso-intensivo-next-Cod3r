import Lista from "@/components/listas/Lista";
function PaginaListaBasica() {
  const lista = [
    "Jonathan Wallace",
    "Millie Obrien",
    "George Roberson",
    "Roy Lambert",
    "Carolyn Bridges",
    "Dean Cole",
    "Dora French",
    "Jeffrey Salazar",
    "Lucy Ford",
    "Evelyn Barrett",
  ];
  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <h1 className="text-5xl font-bold">Lista</h1>
      <Lista nomes={lista} />
    </div>
  );
}

export default PaginaListaBasica;
