import styles from "./Rating.module.css";

const Rating = ({ rating = 0 }) => {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStars ? 1 : 0);
  return (
    <div className={styles.stars}>
      {[...Array(fullStars)].map((_, index) => (
        <span key={`full-${index}`} className={styles.fullstar}>
          ⭐
        </span>
      ))}
      {halfStars && <span className={styles.halfStar}>☆</span>}

      {[...Array(emptyStars)].map((_, index) => (
        <span key={`empty-${index}`} className={styles.emptyStars}>
          ☆
        </span>
      ))}
    </div>
  );
};

export default Rating;
