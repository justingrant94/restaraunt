import Head from "next/head";
// import Image from "next/image";
import Featured from "../components/Featured";
import BurgerList from "../components/BurgerList";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Justin's Burger</title>
        <meta name="description" content="Best Burger shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <BurgerList />
    </div>
  );
}