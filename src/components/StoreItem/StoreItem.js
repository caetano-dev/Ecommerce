import styles from "./StoreItem.module.css";

const StoreItem = ({ id, image, name, price, company, rating }) => {
  return (
    <div className={styles.storeItem}>
      <div key={id}>
        <img src={image} alt="item" />
        <h2>
          {name} - {company}
        </h2>
        <p>${price}</p>
        <p>{rating} stars</p>
      </div>
    </div>
  );
};
export default StoreItem;
