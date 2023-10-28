interface CirculoProps {
  text: string
  quasePerfeito?: boolean
}

export default function Circulo(props: CirculoProps) {
  return (
    <div
      className={`h-24 w-24 bg-violet-500  flex flex-col justify-center items-center text-black text-xl ${
        props.quasePerfeito ? 'rounded-2xl' : 'rounded-full'
      }`}
    >
      {props.text}
    </div>
  )
}
