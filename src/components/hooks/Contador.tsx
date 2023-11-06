import { useCallback, useEffect, useState } from "react";

export default function Contador() {
  const [valor, setValor] = useState(1);
  const [delta, setDelta] = useState(0);
  const [mult, setMult] = useState(0);

  const calcularValorMult5 = useCallback((valor:number) => {
    return valor * 5;
  }, []);
  useEffect(() => {
    console.log("executando use effect");

    const mult20 = calcularValorMult5(valor);
    setMult(mult20);
  }, [valor, calcularValorMult5]);

  return (
    <div className="flex flex-col items-center gap-5 ">
      <span className="text-3xl">{valor}</span>
      <span className="text-3xl text-zinc-500">{mult}</span>
      <span className="text-sm text-zinc-500">{delta}</span>
      <div className="flex gap-5">
        <button
          className="botao"
          onClick={() => {
            setValor(valor - delta);
          }}
        >
          -
        </button>
        <button
          className="botao"
          onClick={() => {
            setValor((valorAtual) => valorAtual + delta);
          }}
        >
          +
        </button>
      </div>
      <input
        type="number"
        value={delta}
        onChange={(e) => setDelta(+e.target.value)}
        className="bg-zinc-900 py-2 px-3 rounded-md"
      />
    </div>
  );
}
