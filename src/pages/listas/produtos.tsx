import ListaProdutos from "@/components/listas/ListaProdutos";
import produtos from "@/constants/produtos";
import ItemCarrinho from "@/model/ItemCarrinho";
import Produto from "@/model/Produto";
import { useContext, useState } from "react";
import Carrinho from "@/components/listas/Carrinho";

import Link from 'next/link';
import CarrinhoContext from '@/data/contexts/CarrinhoContexto';

export default function PaginaProdutos() {
  const {itens,adicionarProduto}=useContext(CarrinhoContext)
  
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-5">
      <Carrinho itens={itens}/>
      <ListaProdutos produtos={produtos} comprar={adicionarProduto} />
      <Link href={'/'}><span>Voltar</span></Link>
    </div>
  );
}
