import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import useSWR, { mutate } from "swr";

const Home: NextPage = () => {
  const router = useRouter();

  const { data } = useSWR([`a`, `b`, { a: 1 }]);

  const handleClick = async () => {
    await mutate([`a`, `b`, { a: 1 }], +new Date(), false);
  };

  return (
    <div className={styles.container}>
      {data}
      <button onClick={handleClick}>Mutate</button>
    </div>
  );
};

export default Home;
