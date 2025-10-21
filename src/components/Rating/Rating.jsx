import styles from "./Rating.module.css";

const Rating = ({ rating = 0 }) => {
  const fullStars = Math.trunc(rating);
  const halfStars = rating % 1 !== 0;
  const decimalHafl = parseFloat((rating - fullStars).toFixed(2));
  const emptyStars = 5 - fullStars - (halfStars ? 1 : 0);
  return (
    <div className={styles.stars}>
      {[...Array(fullStars)].map((_, index) => (
        <span key={`full-${index}`} className={styles.fullstar}>
          ⭐
        </span>
      ))}
      {halfStars && (
        <span
          className={`halfStar ${styles.halfStar}`}
          style={{ "--rating": decimalHafl }}
        >
          ☆
        </span>
      )}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={`empty-${index}`} className={styles.emptyStars}>
          ☆
        </span>
      ))}
    </div>
  );
};

export default Rating;
