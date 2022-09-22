import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";

const Product = ({ burger }) => {
  const [price, setPrice] = useState(burger.prices[0]);
  const [size, setSize] = useState(0);
  const [extras, setExtras] = useState([])
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()

  const changePrice = (number) => {
    setPrice(price + number)
  }

  const handleSize = (sizeIndex) => {
    const difference = burger.prices[sizeIndex] - burger.prices[size]
    setSize(sizeIndex)
    changePrice(difference)
  }

  const handleChange = (e, option) => {
    const checked = e.target.checked


    if (checked) {
      changePrice(option.price)
      setExtras((prev) => [...prev, option])
    } else {
      changePrice(-option.price)
      setExtras(extras.filter((extra) => extra._id !== option._id))
    }
  }

  const handleClick = () => {
    dispatch(addProduct({ ...burger, extras, price, quantity }))
  }


  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={burger.image} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{burger.title}</h1>
        <span className={styles.price}>£{price}</span>
        <p className={styles.description}>{burger.description}</p>
        <h3 className={styles.choose}>Choose Your Burger</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => handleSize(0)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>4TheKids</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(1)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Peckish</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(2)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Largee</span>
          </div>

          <div className={styles.size} onClick={() => handleSize(3)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>X-Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Add Extras</h3>
        <div className={styles.ingredients}>
          {burger.extraOptions.map((option) => (
            <div className={styles.option} key={option._id} >
              <input
                type="checkbox"
                id={option.text}
                name={option.text}
                className={styles.checkbox}
                onChange={(e) => handleChange(e, option)}
              />
              <label htmlFor="double">{option.text}</label>
            </div>
          ))}
        </div>
        <div className={styles.add}>
          <input onChange={(e) => setQuantity(e.target.value)} type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.button} onClick={handleClick}>Add to Cart</button>
        </div>
      </div>
    </div >
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  return {
    props: {
      burger: res.data,
    },
  };
};

export default Product;