import Head from "next/head";
import styles from "../../styles/Home.module.scss";
import NavBar from "../../components/NavBar";

export default function crud() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SHOW OFF</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar></NavBar>
    </div>
  );
}
