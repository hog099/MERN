import React from 'react';
import Head from 'next/head'
import Link from 'next/link'
import api from '../../services/axios'

import styles from '../../styles/pages/Home.module.css'

const Home: React.FC = () => {

  const [ismounted, setismounted] = React.useState(false);
  const [datalist, setdatalist] = React.useState(null);


  React.useEffect(() => {
    if (!ismounted) {
      loaddata();
      setismounted(true);
    }
  }, [ismounted])


  const loaddata = () => {
    api.get('/api/v1/home')
      .then((response) => {
        // console.log('response get empresas', response.data);
        setdatalist(response.data);
      })
      .catch((error) => {
        console.log('Error!', error)
      });

  }



  return (
    <div className={styles.container}>
      <Head>
        <title>MERN | NextJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h5 className={styles.title}>Home Client</h5>

        <Link href="/page02">
          <a rel="noreferrer" className={styles.buttonlink}>
            <p>Página 02</p>
          </a>
        </Link>

        <div>
          {datalist && datalist.map((item, index) => {
            return (
              <div key={index}>
                <p>{item.name}</p>
              </div>
            );
          })}
        </div>
        
      </main>

    </div>
  );
}

export default Home;