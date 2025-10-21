import styles from "./Featured.module.css";
import { products } from "../../data/appData.js";
import Rating from "../Rating/Rating.jsx";

const Featured = () => {
  const featuredProducts = products.slice(0, 4);
  return (
    <section className={styles.featured}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>Featured Products</h2>
          <p>Discover our handpicked selection of trending items</p>
        </div>
        <div className={styles.productsGrid}>
          {featuredProducts.map((featuredProduct) => (
            <div className={styles.productCard} key={featuredProduct.id}>
              <div className={styles.productImage}>
                <img src={featuredProduct.image} alt={featuredProduct.name} />
              </div>
              <div className={styles.productInfo}>
                <h3 className={styles.productTitle}>{featuredProduct.name}</h3>
                <div className={styles.productRating}>
                  <span className={styles.stars}>
                    <Rating rating={featuredProduct.rating} />
                  </span>
                  <span className={styles.rating}>
                    ({featuredProduct.rating})
                  </span>
                </div>
                <div className={styles.productPrice}>
                  ${featuredProduct.price}
                </div>
                <button className={styles.addToCartBtn}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.viewAll}>
          <button className={styles.viewAllBtn}>View All Products</button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
