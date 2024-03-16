import styles from "@/styles/Sections/Services.module.scss";
import ListWithOutUl from "@/components/ListWithOutUl";
import Image from "next/image";
import CardList from "@/components/servicesCards/CardList";
import ButtonWithIcon from "@/components/ButtonWithIcon";

export default function Services() {
  return (
    <div className={styles.Services}>
      <div className={styles.menueButton}>
        <ListWithOutUl item="Services"/>
      </div>
      <div className={styles.mainDiv}>
      <h1>We create without the need for coding to give ambitious brands the upper hand</h1>
      <div className={styles.flexBox}>
     <CardList/>
      </div>
      </div>
      <div className={styles.ButtonWithIcon}>
            <ButtonWithIcon text="Let's Talk"/>
          </div>
          
    </div>
  )
}
