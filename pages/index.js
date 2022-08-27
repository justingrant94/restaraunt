import Head from "next/head";
import axios from "axios";
import Image from "next/image";
import Featured from "../components/Featured";
import BurgerList from "../components/BurgerList";
import styles from "../styles/Home.module.css";

export default function Home({ burgerList }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Justins Burger</title>
        <meta name="description" content="Best Burger shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <BurgerList burgerList={burgerList} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products")
  return {
    props: {
      burgerList: res.data,
    }
  }
}