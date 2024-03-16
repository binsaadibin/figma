import styles from"@/styles/Components/ButtonWithIcon.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ButtonWithIcon = ({ text }) => {
  return (
    <div>
      <button className={styles.button}>
        {text}
        <span className={styles.icon}>
          <FontAwesomeIcon icon={faArrowRight} className={styles.favIcon} />
        </span>
      </button>
    </div>
  );
};

export default ButtonWithIcon;
