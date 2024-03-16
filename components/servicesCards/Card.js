// Card.js

import styles from './card.module.scss';
import Image from 'next/image';
import { MdDeveloperMode } from "react-icons/md";

const Card = ({ title, content }) => {
  return (
    <div className={styles.cardSet}>
      <div>
        <MdDeveloperMode className={styles.additionalIcon} />
      </div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.content}>{content}</p>
      <div className={styles.buttonContainer}>
        <button className={styles.cardBtn}>View More</button>
        <div className={styles.cardIcon}>
          <Image src="/svg_files/christmas-stars 1 (Traced) (1).svg" width={50} height={50} className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default Card;
