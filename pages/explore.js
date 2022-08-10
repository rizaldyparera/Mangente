import Head from 'next/head';
import Navbar from '../components/Navbar';
import About from '../components/About';



export default function Explore() {
  return (
    <>   
      <Head>
        <title>Mangente - Anything About Maluku</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <About />
    </>

  )
}