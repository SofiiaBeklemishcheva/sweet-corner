import styles from "./priceTile.module.css";

const PriceTile = ({type, src,
    altText,
    label, 
    imgSize, cakePrices}) => {
   
        const priceTileKind = (type) => {
            switch (type) {
                case "cupcake":
                    return <Cupcake src={src} altText={altText} label={label} cakePrices={cakePrices}/>;
                default:
                    return <Cake imgSize={imgSize} src={src} altText={altText} label={label} cakePrices={cakePrices}/>;
            }
        };
        
    return (
        <div className={styles.tileContainer}>
       {priceTileKind(type)}
        </div>
    );
};

const Cake = ({imgSize, src, altText, label, cakePrices}) => {
    return (
        <div className={styles.tileInnerContainer}>
            <div className={styles.imgContainer}>
                <img src={src} altText={altText} className={imgSize === "small" 
                                                            ? styles.imgSmall 
                                                            : imgSize === "middle" 
                                                            ? styles.imgMiddle 
                                                            : imgSize === "big" 
                                                            ? styles.imgBig 
                                                            : styles.displayNone}/>
            </div>
            <p className={styles.cakePriceLabel}>{label}</p>
            <div className={styles.offerDescriptionContainer}>
                <div className={styles.rowContainerLeft}>
                    <p className={styles.label}>{cakePrices?.[0]?.label}</p>
                    <p className={styles.label}>{cakePrices?.[1]?.label}</p>
                    <p className={styles.label}>{cakePrices?.[2]?.label}</p>
                    <p className={styles.label}>{cakePrices?.[3]?.label}</p>
                </div>

                <div className={styles.rowContainerRight}>
                    <p className={styles.label}>{cakePrices?.[0]?.price}</p>
                    <p className={styles.label}>{cakePrices?.[1]?.price}</p>
                    <p className={styles.label}>{cakePrices?.[2]?.price}</p>
                    <p className={styles.label}>{cakePrices?.[3]?.price}</p>
                </div>

            </div>
        </div>
    );
};

const Cupcake = ({src, altText, label, cakePrices}) => {
    return (
        <div className={styles.tileInnerContainer}>
            <div className={styles.imgContainer}>
                <img src={src} altText={altText} className={styles.imgSmall}/>
            </div>
            <p className={styles.cakePriceLabel}>{label}</p>
            <div className={styles.offerDescriptionContainer}>
                <div className={styles.rowContainerLeftInCupcake}>
                    <p className={styles.labelCupcake}>{cakePrices?.[0]?.label}</p>
                    <p className={styles.labelCupcake}>{cakePrices?.[1]?.label}</p>
                    <p className={styles.labelCupcake}>{cakePrices?.[2]?.label}</p>
                </div>

                <div className={styles.rowContainerRightInCupcake}>
                    <p className={styles.labelCupcake}>{cakePrices?.[0]?.price}</p>
                    <p className={styles.labelCupcake}>{cakePrices?.[1]?.price}</p>
                    <p className={styles.labelCupcake}>{cakePrices?.[2]?.price}</p>
                </div>

            </div>
        </div>
    );
};
export default PriceTile;