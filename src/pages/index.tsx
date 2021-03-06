
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { SubsribeButton } from '../components/SubscribeButton'
import { stripe } from '../services/stripe'
import styles from './home.module.scss'


interface HomeProps{
  product:{
    priceId: string;
    amount: number;
  }
}
export default function Home({ product }: HomeProps) {
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
            <span>for {product.amount} month</span>
          </p>
          <SubsribeButton priceId={product.priceId}/>
        </section>
 
        <img src='/image/avatar.svg' alt='Girl coding'/>

       </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps =async() =>{
  const price = await stripe.prices.retrieve('price_1LKPx0JWEc1I6Db7iFSvO34Y')
 
  const product ={
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US',{
      style:'currency',
      currency: 'USD', 
  }).format(price.unit_amount /100),
  };

  return{
    props:{
      product,
    }
  }
}