import styles from "../styles/Home.module.css";
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <Header /> */}
      <Navbar />
    </div>
  );
}
