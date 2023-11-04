import ItemCarrinho from "@/model/ItemCarrinho";
import Moeda from "@/utils/Moeda";

function CarrinhoItem(props: ItemCarrinho) {
  return (
    <div className="flex gap-2 items-center rounded-full bg-blue-500 ">
      <span className="flex justify-center items-center w-7 h-7 p-2 bg-blue-700 rounded-full">
        {props.quantidade}
      </span>
      <span>{props.produto.nome}</span>
      <span className="pr-5">
        {Moeda.formatar(props.produto.preco * props.quantidade)}
      </span>
    </div>
  );
}

export default CarrinhoItem;
