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
                    content="Generate Labs is ... some description"
                />

                <meta property="og:site_name" content="Generate Labs" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://generate-labs-nextjs.vercel.app/" />
                <meta property="og:title" content="Generate Labs" />
                <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/generate-labs-f25b7.appspot.com/o/generate-labs-banner-min.png?alt=media&token=8fc559f0-b164-4ad5-ae01-6541cbb35cee" />

                <meta property="twitter:site" content="@generatelabs" />
                <meta property="twitter:handler" content="@generatelabs" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta name="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/generate-labs-f25b7.appspot.com/o/generate-labs-banner-min.png?alt=media&token=8fc559f0-b164-4ad5-ae01-6541cbb35cee" />

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
