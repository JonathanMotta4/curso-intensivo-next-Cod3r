import ContadorContext from '@/data/contexts/ContadorContext'
import Link from 'next/link'
import { useContext } from 'react'
function Contador() {
  const {numero,incrementar,decrementar}=useContext(ContadorContext)
 
  return (
    <div className='flex flex-col items-center gap-5'>
      
      <span className='text-3xl font-bold'>{numero}</span>
      <div className='flex gap-5'>
        <button className='botao' onClick={decrementar}>
          -
        </button>
        <button className='botao' onClick={incrementar}>
          +
        </button>
      </div>
      <Link href={'/'}><span>Voltar</span></Link>
    </div>
  )
}

export default Contador
