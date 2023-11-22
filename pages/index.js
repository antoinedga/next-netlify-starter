import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app saying sorry to Andrea!" />
        <p className="description">
          I love you Andrea Bobadilla and then more and then more and then more and then more
        </p>
      </main>

      <Footer />
    </div>
  )
}
