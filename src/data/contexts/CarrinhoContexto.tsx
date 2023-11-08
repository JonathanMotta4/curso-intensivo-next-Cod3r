import { createContext } from 'react'
import ItemCarrinho from '@/model/ItemCarrinho'
import { useState } from 'react'
import Produto from '@/model/Produto'

interface CarrinhoContextProps {
  itens: ItemCarrinho[]
  adicionarProduto: (produto: Produto) => void
}

 const CarrinhoContext = createContext<CarrinhoContextProps>({} as any)
 export default CarrinhoContext
export function CarrinhoProvider(props: any) {
  const [itens, setItens] = useState<ItemCarrinho[]>([])

  function adicionarProduto(produto: Produto) {
    const itemAtual = itens.find((item) => item.produto.id === produto.id) ?? {
      quantidade: 0,
      produto,
    }
    const novoItem = { ...itemAtual, quantidade: itemAtual.quantidade + 1 }
    const outrosItens = itens.filter((item) => item.produto.id !== produto.id)
    setItens([...outrosItens, novoItem])
  }
  return (
    <CarrinhoContext.Provider value={{itens,adicionarProduto}}>
      {props.children}
    </CarrinhoContext.Provider>
  )
}
