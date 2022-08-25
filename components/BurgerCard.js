import Image from "next/image";
import styles from "../styles/BurgerCard.module.css";

const BurgerCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/burger.webp" alt="" width="500" height="500" />
      <h1 className={styles.title}>Cheetos Burgerrr</h1>
      <span className={styles.price}>£19.90</span>
      <p className={styles.desc}>
        Our Specials
      </p>
    </div>
  );
};

export default BurgerCard;