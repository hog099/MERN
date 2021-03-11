import React from 'react';
import Head from 'next/head'
import Link from 'next/link'

// import styles from '../styles/Home.module.css'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>MERN</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h5>Home nextjs Client</h5>

      <Link href="/page02">
        <a rel="noreferrer">
        <p>Ir para pagina 02</p>
        </a>
      </Link>

    </>
  );
}

export default Home;