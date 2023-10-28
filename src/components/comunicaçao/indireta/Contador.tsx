import Display from './Display'
import Botoes from './Botoes'
import { useState } from 'react'
function Contador() {
  const [num, setNum] = useState<number>(0)
 function incrementar(valor:number){
  setNum(num+valor)
 }
 function decrementar(valor:number){
  setNum(num-valor)
 }
  return (
    <div className='flex flex-col border w-72 h-72 border-zinc-400 rounded-md p-2'>
      <Display valor={num} />
      <Botoes inc={incrementar} dec={decrementar}/>
    </div>
  )
}

export default Contador

