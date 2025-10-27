import styles from "./ProductCard.module.css";
import Rating from "../Rating/Rating";
const ProductCard = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.productImage}>
        <img src={product.image} alt={product.name} />
        <div className={styles.productOverlay}>
          <button className={styles.quickViewBtn}>Quick View</button>
          <button className={styles.addToCartBtn}>Add to Cart</button>
        </div>
      </div>
      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{product.name}</h3>
        <div className={styles.productRating}>
          <Rating rating={product.rating} />
          <span className={styles.rating}>({product.rating})</span>
        </div>
        <div className={styles.productPrice}>${product.price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
