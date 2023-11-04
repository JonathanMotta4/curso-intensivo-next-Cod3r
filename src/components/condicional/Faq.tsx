import Pergunta from "./Pergunta";
import { useState } from "react";

export default function Faq() {
  const [ativo, setAtivo] = useState<number>(0);

  function alternarVisibilidade(indice: number) {
    if (indice === ativo) {
      setAtivo(-1);
    } else {
      setAtivo(indice);
    }
  }
  return (
    <div className="flex flex-col gap-2 w-11/12 md:w-3/6">
      <Pergunta
        aberta={ativo === 0}
        indice={0}
        pergunta="hold few grew merely interior ranch unknown"
        resposta="Lorem ipsum dolor sit amet."
        alternarVisibilidade={alternarVisibilidade}
      />
      <Pergunta
        aberta={ativo === 1}
        indice={1}
        pergunta="rod deeply familiar equipment oldest "
        resposta="Lorem ipsum dolor sit amet."
        alternarVisibilidade={alternarVisibilidade}
      />
      <Pergunta
        aberta={ativo === 2}
        indice={2}
        pergunta="both recall broken rabbit full "
        resposta="Lorem ipsum dolor sit amet."
        alternarVisibilidade={alternarVisibilidade}
      />
      <Pergunta
        aberta={ativo === 3}
        indice={3}
        pergunta="require bee changing anyway claws count "
        resposta="Lorem ipsum dolor sit amet."
        alternarVisibilidade={alternarVisibilidade}
      />
    </div>
  );
}
