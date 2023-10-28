import Avo from '@/components/comunicaçao/direta/Avo'
export default function direta() {
  return <div className='flex flex-col justify-center items-center h-screen '>
    <h1 className='text-5xl mb-10'>Comunicação Direta</h1>
    <Avo nome='Jeff' sobrenome='Parker'/>
    <Avo nome='Larry' sobrenome='Page'/>
  </div>
}
