import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h className={styles.title}>Yuezhang Chen</h>
      <div className={styles.gray}>I am a student at <Link href={"/dku"}>DKU</Link>.</div>
      <Image src="/image1.jpg" width={100} height={100}></Image>
    </div>
  )
}
