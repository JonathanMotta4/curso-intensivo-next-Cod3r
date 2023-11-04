import { IconCircleX } from "@tabler/icons-react";
function CarrinhoVazio() {
  return (
    <div className="flex justify-center text-zinc-500 gap-3">
      <IconCircleX />
      <span>Nenhum item no carrinho</span>
    </div>
  );
}

export default CarrinhoVazio;
