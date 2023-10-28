import Caixa from '@/components/basicos/Caixa'
export default function caixas() {
  return (
    <div className='flex gap-7 p-7'>
      <Caixa >pressure</Caixa>
      <Caixa >ever</Caixa>
      <Caixa ><ul className='list-disc'>
        <li>finally</li>
        <li>quick</li>
        <li>enough</li>
      </ul></Caixa>
    </div>
  )
}
