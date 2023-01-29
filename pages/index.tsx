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
                <meta name="author" content="Lyzer Merck Bautista" />
                <meta
                    name="description"
                    content="Generate, Create and Deploy your NFTs with our NFT Generator.A No-Code Tool for Businesses, Artists, Designers and Creators to build, create and generate NFT Collections."
                />

                <meta property="og:site_name" content="Generate Labs" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://generate-labs-nextjs.vercel.app/" />
                <meta property="og:title" content="Generate Labs" />
                <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/generate-labs-f25b7.appspot.com/o/gen-labs-banner.png?alt=media&token=8b3f3ede-2f0d-47c1-81bb-831452735d2c" />
                <meta
                    name="og:description"
                    content="Generate, Create and Deploy your NFTs with our NFT Generator.A No-Code Tool for Businesses, Artists, Designers and Creators to build, create and generate NFT Collections."
                />

                <meta property="twitter:site" content="@generatelabs" />
                <meta property="twitter:handler" content="@generatelabs" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:description"
                    content="Generate, Create and Deploy your NFTs with our NFT Generator.A No-Code Tool for Businesses, Artists, Designers and Creators to build, create and generate NFT Collections."
                />
                <meta name="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/generate-labs-f25b7.appspot.com/o/gen-labs-banner.png?alt=media&token=8b3f3ede-2f0d-47c1-81bb-831452735d2c" />

                <link rel="icon" href="/favicon.ico" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png"/>
                <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png"/>
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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
