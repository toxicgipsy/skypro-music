"use client";
import Head from "next/head";
import Link from "next/link";
import Menu from "../components/Menu/Menu";
import Centerblock from "../components/Centerblock/Centerblock";
import ProgressBar from "../components/Player/Player";
import styles from "./page.module.css";
import Sidebar from "../components/Sidebar/Sidebar";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Link rel="stylesheet" href="/css/style.css" />
        <title>Skypro</title>
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <main className={styles.main}>
            <Menu />
            <Centerblock />
            <Sidebar />
          </main>
          <footer className={styles.footer} />
        </div>
        <ProgressBar />
      </div>
    </>
  );
}
