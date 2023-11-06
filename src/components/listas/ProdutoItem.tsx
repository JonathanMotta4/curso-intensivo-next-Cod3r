import Produto from "@/model/Produto";
import Image from "next/image";
import { IconShoppingCart } from "@tabler/icons-react";
import Moeda from "@/utils/Moeda";
interface ProdutoItemProps {
  produto: Produto;
  comprar: (produto: Produto) => void;
}
function ProdutoItem(props: ProdutoItemProps) {
  const { produto } = props;
  return (
    <div className="flex flex-col border border-zinc-300 rounded-md p-1">
      <Image
        src={produto.imagem}
        width={300}
        height={200}
        alt="Imagem do produto"
        className="rounded-md "
      />
      <div className="flex flex-col p-3 gap-3">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-black">{produto.nome}</div>
          <div className="text-green-500 font-bold">
            {Moeda.formatar(produto.preco)}
          </div>
        </div>
        <div className="text-gray-500">{produto.descricao}</div>
        <div>
          <button
            className="botao flex w-full justify-center gap-2"
            onClick={() => props.comprar(produto)}
          >
            <IconShoppingCart />
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProdutoItem;
