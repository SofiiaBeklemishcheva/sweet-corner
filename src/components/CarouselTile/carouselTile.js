import styles from "./carouselTile.module.css";

const CarouselTile = ({src,
    altText,
    label}) => {
   

    return (
        <div className={styles.tileContainer}>
        <img src = {src} alt={altText} className={styles.tileImg}/>
        <p className={styles.tileLabel}>{label}</p>
        </div>
    );
};

export default CarouselTile;