import styles from './MainButton.module.scss';
import { Link } from 'react-router-dom';

type MainButtonProps = {
    text: string;
    addedClass: string;
    location: string;
    
}

export function MainButton({ text, addedClass, location } : MainButtonProps) {
    return (
      <Link className={`${styles.circle}  ${styles[`${addedClass}`]}`} to={location}>
        <p className={styles.circle__text}>{text}</p>
      </Link>
    )
}