import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Inspi360Viewer } from '../components/InspiViewer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <Inspi360Viewer />
    </div>
  );
}
