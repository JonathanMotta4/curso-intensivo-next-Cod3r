import Contador from '@/components/contador/Contador'
import { ContadorProvider } from '@/data/contexts/ContadorContext'
function contador() {
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-5'>
        <Contador />
    </div>
  )
}

export default contador
