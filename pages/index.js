import {useEffect, useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  const [message, setMessage] = useState()
  const [yourName, setYourName] = useState()


  const url = 'https://python-tests-b9p828tz8-sirbenchalot757.vercel.app/'
  const sub= '/api/runPython'
  useEffect(()=>{
    const path = message ? `${sub}?name=${message}` : sub
    fetch(path)
    .then(res => res)
    .then(data => {
      setMessage(data.message)
    }
    )
  }, [message])


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the name God
        </h1>

        <p className={styles.description}>
          Tell me your name and I will use the magic of snake language to tell you your name

          <code className={styles.code}>pages/index.js</code>

        </p>
        <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)}/>

        <div className={styles.grid}>

          {!message &&  <h2>Please enter a name &rarr;</h2>}

         {message && <div className={styles.card}>
            <h2>The snake gods say that your name is &rarr;</h2>
            <p>{yourName}</p>
          </div>}

         
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
