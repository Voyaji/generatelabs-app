import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Brands from '../sections/Brands'
import BuildCreateGenerate from '../sections/BuildCreateGenerate'
import Characters from '../sections/Characters'
import Design from '../sections/Design'
import Development from '../sections/Development'
import Faq from '../sections/Faq'
import Newsletter from '../sections/Newsletter'

const Home: NextPage = () => {
    return (
        <main>
            <Head>
                <title>Generate Labs</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <BuildCreateGenerate />
            <Characters />
            <Design />
            <Development />
            <Faq />
            <Brands />
            <Newsletter />

        </main>
    )
}

export default Home
