import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Head>
      <div className={styles.container}>
        <div className="p-6 space-y-4 shadow bg-white rounded-lg h-18">
          <h1>Hello World</h1>
        </div>
      </div>
    </Head>
  );
}
