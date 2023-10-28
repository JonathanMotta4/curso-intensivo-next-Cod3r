import Filho from './Filho'
interface PaiProps {
  nome: string
  sobrenome: string
}
export default function Pai(props:PaiProps){
  return   <div className='flex gap-5 flex-col bg-violet-500 text-zinc-50 border border-white p-5 rounded-md'>
  <div className='flex gap-2 items-center justify-center text-xl'>
    <span>Pai</span>
    <span>{props.nome}</span>
    <span>{props.sobrenome}</span>
  </div>
  <div className='flex gap-5 '>
    <Filho nome='Lida' sobrenome={props.sobrenome}/>
    <Filho nome='Tillie' sobrenome={props.sobrenome}/>
    <Filho nome='Derrick' sobrenome={props.sobrenome}/>
  </div>
</div>

}