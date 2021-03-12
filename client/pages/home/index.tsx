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
    api.get('/api/v1/tasks')
      .then((response) => {
        // console.log('response get empresas', response.data);
        setdatalist(response.data.data);
      })
      .catch((error) => {
        console.log('Error!', error)
      });

  }

  const handleDelete = (id) => {
    api.delete(`/api/v1/tasks/${id}`)
      .then((response) => {
        // console.log('response get empresas', response.data);
        loaddata();
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
              <div key={index} className={styles.itemlist}>
                <div className={styles.itemlistcontentleft}>
                  <p>{item.title}</p>
                </div>
                <div className={styles.itemlistcontentright}>
                  <button onClick={() => handleDelete(item._id)}>excluir</button>
                </div>

              </div>
            );
          })}
        </div>

      </main>

    </div>
  );
}

export default Home;