import Link from 'next/link'
export default function Home() {
  return (
    <div>
      <h1>OK</h1>
      <div className='flex flex-col underline'>
        <Link href={'/contexto/contador'}>
          <span>Contador</span>
        </Link>
        <Link href={'/listas/produtos'}>
          <span>Produtos</span>
        </Link>
      </div>
    </div>
  )
}
