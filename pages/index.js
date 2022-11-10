import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../Components/Navbar'
import Main from '../Components/Main'
import About from '../Components/About'
import Skills from '../Components/Skills'
import Projects from '../Components/Projects'
import Contact from '../Components/Contact'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Thierry | Fullstack developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <About/>
      <Skills />
      <Projects />
      <Contact />

    </div>
  )
}
