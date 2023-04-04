import styles from "@/styles/Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        <Link href={"https://github.com/FilipeGabrielRocha/projeto-next-react-pokenext"} target="_blank">
          <span>PokeNext</span> &copy; 2023
        </Link>
      </p>
    </footer>
  );
}
