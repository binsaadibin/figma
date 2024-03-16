import ListWithOutUl from "@/components/ListWithOutUl";
import StackCardsSlider from "@/components/stacksCards/StackCardsSlider";
import styles from "@/styles/Sections/Stacks.module.scss";
// import Image from "next/image";

function Stacks() {
  return (
    <div className={styles.stacks}>
        <div className={styles.ListWithOutUl}>
            <ListWithOutUl item="Stacks"/>
        </div>
    <h1>Cutting-edge tools and frameworks that power our innovations for exceptional results.</h1>
    <div className={styles.marque}>
      <StackCardsSlider/>
    </div>
    </div>
  )
}

export default Stacks
