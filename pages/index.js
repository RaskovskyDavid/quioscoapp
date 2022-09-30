import { PrismaClient } from '@prisma/client'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../layout/Layout.js'
export default function Home() {
  // console.log(categorias)

  return (
    <>
    <h1>Next j1 </h1>
    <Layout pagina="Menu">
      
    </Layout>
    </>
    
  )
}
// export const getServerSideProps = async () => {
//   const prisma = new PrismaClient()
//   const categorias = await prisma.categoria.findMany()
//   return {
//     props: {
//       categorias,
//     }
//   }
// }