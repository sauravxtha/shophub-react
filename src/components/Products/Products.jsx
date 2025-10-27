import styles from "./Products.module.css";
import { productCategories } from "../../data/appData";
import { products } from "../../data/appData";
import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  return (
    <section className={styles.products}>
      <div className={styles.container}>
        <div className={styles.productsHeading}>
          <h2>All Products</h2>
          <p>Browse our complete collection by category</p>
        </div>
        <div className={styles.categoryFilter}>
          {productCategories.map((productCategory) => (
            <button
              key={productCategory.id}
              className={`${styles.categoryBtn} ${
                activeCategory == productCategory.id ? styles.active : ""
              }`}
              onClick={() => setActiveCategory(productCategory.id)}
            >
              <span className={styles.categoryIcon}>
                {productCategory.icon}
              </span>
              {productCategory.name}
            </button>
          ))}
        </div>
        <div className={styles.productsGrid}>
          {products
            .filter(
              (product) =>
                activeCategory == "all" || activeCategory == product.category
            )
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
