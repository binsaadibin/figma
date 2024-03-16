// import ButtonWithIcon from "@/components/ButtonWithIcon";
import ListWithOutUl from "@/components/ListWithOutUl";
import styles from "@/styles/Sections/Projects.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function Project() {
  return (
    <div className={styles.projects}>
      <div className={styles.ListWithOutUl}>
        <ListWithOutUl item="Projects" />
      </div>
      <div className={styles.maindiv}>
        <div className={styles.framework}>
          <div>
            <Image
              src="/svg_files/Individual Project (6).svg"
              alt="Individual Project (3).svg"
              width={50}
              height={50}
              className={styles.frame1}
            />
          </div>
          <div>
            <Image
              src="/svg_files/Individual Project (7).svg"
              alt="Individual Project (4).svg"
              width={50}
              height={50}
              className={styles.frame2}
            />
          </div>
          <div>
            <Image
              src="/svg_files/Individual Project (8).svg"
              alt="Individual Project (5).svg"
              width={50}
              height={50}
              className={styles.frame3}
            />
          </div>
        </div>
      </div>
      <div className={styles.icons}>
      <FontAwesomeIcon icon={faArrowLeft} className={styles.iconTwo} />
      <FontAwesomeIcon icon={faArrowRight} className={styles.iconOne}/>
      </div>
    </div>
  );
}
