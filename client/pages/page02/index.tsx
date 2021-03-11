import React from 'react';
import Head from 'next/head'
import api from '../../services/axios'

import styles from '../../styles/pages/Home.module.css'

const Page02: React.FC = () => {


  const [ismounted, setismounted] = React.useState(false);
  const [datalist, setdatalist] = React.useState(null);


  React.useEffect(() => {
    if (!ismounted) {
      loaddata();
      setismounted(true);
    }
  }, [ismounted])


  const loaddata = () => {
    api.get('/api/v1/page02')
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
        <title>MERN | Página 02</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h5 className={styles.title}>Página 02</h5>

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

export default Page02;