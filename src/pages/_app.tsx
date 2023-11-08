import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ContadorProvider } from '@/data/contexts/ContadorContext'
import { CarrinhoProvider } from '@/data/contexts/CarrinhoContexto'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <CarrinhoProvider>
      <ContadorProvider>
        <Component {...pageProps} />
      </ContadorProvider>
    </CarrinhoProvider>
  )
}
