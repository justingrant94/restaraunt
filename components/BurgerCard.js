import Image from "next/image";
import styles from "../styles/BurgerCard.module.css";

const BurgerCard = ({ burger }) => {
  return (
    <div className={styles.container}>
      <Image src={burger.image} alt="" width="500" height="500" />
      <h1 className={styles.title}>{burger.title}</h1>
      <span className={styles.price}>£{burger.prices[0]}</span>
      <p className={styles.desc}>{burger.description}</p>
    </div>
  );
};

export default BurgerCard;