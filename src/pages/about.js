import Image from "next/image";
import styles from "@/styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque tempore
        iure fugit, eligendi eaque voluptatum optio natus, cupiditate enim quod
        beatae ut eum nulla culpa voluptate? Similique harum ab fuga?
      </p>
      <Image
        src={"/images/charizard.png"}
        width={300}
        height={300}
        alt="Charizard"
      />
    </div>
  );
}
