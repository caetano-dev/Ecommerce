import styles from "./StoreItem.module.css";

const storeItem = ({ id, image, name, price, company, rating }) => {
  return (
    <div className={styles.storeItem}>
      <div key={id}>
        <img src={image} alt="item" />
        <h2>{name}</h2>
        <p>${price}</p>
        <p>{company}</p>
        <p>{rating}</p>
      </div>
    </div>
  );
};
export default storeItem;
