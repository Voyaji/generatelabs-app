import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import BuildCreateGenerate from '../sections/BuildCreateGenerate'

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Generate Labs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <BuildCreateGenerate />


    </main>
  )
}

export default Home
