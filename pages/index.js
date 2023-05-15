import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from './header'
import Main from './main'
import Footer from './footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
   <Header></Header>
   <Main></Main>
   <Footer></Footer>
   </>
  )
}
