import Head from 'next/head'
import { SubsribeButton } from '../components/SubscribeButton'
import styles from './home.module.scss'



export default function Home() {
  return (
    <>
      <Head>
          <title> Home | News</title>
      </Head>

       <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>🖖🏻 Hey, Welcome </span>
          <h1> News about the <span>React</span> world.</h1> <br />
          <p>
            Get access to all the publications <br/>
            <span>for $10.90 month</span>
          </p>
          <SubsribeButton/>
        </section>

        <img src='/image/avatar.svg' alt='Girl coding'/>

       </main>
    </>
  )
}
