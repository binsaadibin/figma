import ListWithOutUl from "@/components/ListWithOutUl";
import styles from "@/styles/Sections/About.module.scss";
import Image from "next/image";

export default function About() {
  return (
    <div className={styles.AboutUs}>
      <div className={styles.menueButton}>
        <ListWithOutUl item="About Us"/>
      </div>
         <div className={styles.flexBox}>
          <div className={styles.boxOne}>
          <Image src="/svg_files/image (3).svg" alt=" image (4).png"  width={50} height={50} className={styles.image}/>

          </div>
          <div className={styles.boxTwo}>
        <h6>What are we?</h6>
        <h1>
        Barq is a team of professionals with over 5+ years demonstrated competence in IT, focuses on delivering integrated, reliable, resilient and cost-effective solutions and regards it as a privilege to ensure 100% customer satisfaction.
        </h1>
          </div>
          </div>
    </div>
  )
}