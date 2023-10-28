export default function Caixa(props:any) {
  return (
    <div className='bg-purple-500  w-64 h-64  p-2 rounded-md text-3xl font-thin flex justify-center items-center'>
      {props.children}
    </div>
  )
}
