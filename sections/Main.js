import ButtonWithIcon from "@/components/ButtonWithIcon";
import styles from "@/styles/Sections/Main.module.scss";
import Image from "next/image";

export default function Main() {
  return (
    <div className={styles.heroSection}>
      <h1>DevOps & Cloud Solutions service provider</h1>
      <div className={styles.flexBox}>
      <div className={styles.boxOne}>
      <Image src="/svg_files/bolt (3).svg" alt="bolt (3).svg"  width={50} height={50} className={styles.boltSvg}/>
      </div>
      <div className={styles.boxTwo}>
        <h3>Innovation at every turn</h3>
        <h1>We provide successful
implementation strategy of
software development solutions and innovative solutions for any challenges you face</h1>
<div className={styles.ButtonWithIcon}>
<ButtonWithIcon text="Let's Talk"/>
</div>
      </div>
      </div>
      
    </div>
  )
}