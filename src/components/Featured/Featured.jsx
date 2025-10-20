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
        {featuredProducts.map((featuredProduct) => (
          <div className={styles.productsGrid} key={featuredProduct.id}>
            <div className={styles.productCard}>
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
              </div>
            </div>
          </div>
        ))}
        <div className={styles.viewAll}></div>
      </div>
    </section>
  );
};

export default Featured;
