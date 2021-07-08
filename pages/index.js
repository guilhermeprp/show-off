import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import NavBar from "./components/navbar/NavBar.jsx";
import Slides from "./components/slides/Slides.jsx";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SHOW OFF</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar></NavBar>
      <Slides></Slides>
    </div>
  );
}
