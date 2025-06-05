import styles from "./specialOfferTile.module.css";

const SpecialOfferTile = ({type}) => {
   
        const specialOfferTile = (type) => {
            switch (type) {
                case "macaroons":
                    return <Macaroons/>;
                case "cupcake":
                    return <Cupcakes/>;
                default:
                    return <Cakes/>;
            }
        };

    return (
        <div>
            {specialOfferTile(type)}
        </div>
    );
};

const Macaroons = ({}) =>{
    return(<div className={styles.tileContainer}>
<div className={styles.topMacaroonContainer}>
            <div className={styles.topMacaroonLeftPartContainer}>
            <div className={styles.columnContainer}>
                    <img src={"../assets/macaroon (1).png"} className={styles.smallerImg}/>
                    <img src={"../assets/macaroon (2).png"} className={styles.smallerImg}/>
                    <img src={"../assets/macaroon (3).png"} className={styles.smallerImg}/>
                    <img src={"../assets/macaroon (4).png"} className={styles.smallerImg}/>
                </div>
                <div className={styles.columnContainer}>
                    <img src={"../assets/macaroon (5).png"} className={styles.smallerImg}/>
                    <img src={"../assets/macaroon (6).png"} className={styles.smallerImg}/>
                    <img src={"../assets/macaroon (7).png"} className={styles.smallerImg}/>
                    <img src={"../assets/macaroon (brown).png"} className={styles.smallerImg}/>  
                </div>
            </div>
            <div className={styles.topMacaroonRightPartContainer}>
                <p className={styles.plus}>+</p>
                <div className={styles.columnContainer}>
                    <img src={"../assets/macaroon (purple).png"} className={styles.smallerImg}/>
                    <img src={"../assets/macaroon (rose).png"} className={styles.smallerImg}/>
                </div>
                <div className={styles.columnContainer}>
                    <img src={"../assets/macaroon (turcus).png"} className={styles.smallerImg}/>
                    <img src={"../assets/macaroon.png"} className={styles.smallerImg}/>
                </div>
            </div>
        </div>
        <div className={styles.bottomContainer}>
            <p className={styles.label}>Macarons Mistery</p>
            <p className={styles.label}>8 ciastek (dowolny smak) + 4 gratis</p>
            <button className={styles.orderButton}>
                Zamów
            </button>
        </div>
    </div>);
};

const Cupcakes = ({}) =>{
    return(<div className={styles.tileContainer}>
  <div className={styles.topCupcakeContainer}>
            <div className={styles.topLeftPartContainer}>
            <div className={styles.rowContainer}>
                    <img src={"../assets/cupcake (1).png"} className={styles.smallerImg}/>
                    <img src={"../assets/cupcake (1).png"} className={styles.smallerImg}/>
                    <img src={"../assets/cupcake (1).png"} className={styles.smallerImg}/>
                    <img src={"../assets/cupcake (1).png"} className={styles.smallerImg}/>
                    <img src={"../assets/cupcake (1).png"} className={styles.smallerImg}/>
                </div>
                <div className={styles.rowContainer}>
                    <img src={"../assets/cupcake (1).png"} className={styles.smallerImg}/>
                    <img src={"../assets/cupcake (1).png"} className={styles.smallerImg}/>
                    <img src={"../assets/cupcake (1).png"} className={styles.smallerImg}/>
                    <img src={"../assets/cupcake (1).png"} className={styles.smallerImg}/>
                    <img src={"../assets/cupcake (1).png"} className={styles.smallerImg}/>
                </div>
            </div>
            <div className={styles.topCupcakeRightPartContainer}>
                <p className={styles.plus}>+</p>
                <div className={styles.rowContainer}>
                    <img src={"../assets/cupcake orange.png"} className={styles.smallerImg}/>
                    <img src={"../assets/cupcake orange.png"} className={styles.smallerImg}/>
                    <img src={"../assets/cupcake orange.png"} className={styles.smallerImg}/>
                    <img src={"../assets/cupcake orange.png"} className={styles.smallerImg}/>
                    <img src={"../assets/cupcake orange.png"} className={styles.smallerImg}/>
                </div>
            </div>
        </div>
        <div className={styles.bottomContainer}>
            <p className={styles.label}>Party Time</p>
            <p className={styles.label}>10 ciastek + 5 gratis</p>
            <button className={styles.orderButton}>
                Zamów
            </button>
        </div>
    </div>);
};

const Cakes = ({}) =>{
    return(<div className={styles.tileContainer}>
        <div className={styles.topContainer}>
            <div className={styles.topLeftPartContainer}>
                <img src={"../assets/cake (1).png"} className={styles.bigImg}/>
            </div>
            <div className={styles.topRightPartContainer}>
                <div className={styles.columnContainer}>
                    <img src={"../assets/cupcake (1).png"} className={styles.smallImg}/>
                    <img src={"../assets/cupcake (1).png"} className={styles.smallImg}/>
                    <img src={"../assets/cupcake (1).png"} className={styles.smallImg}/>
                </div>
                <div className={styles.columnContainer}>
                    <img src={"../assets/cupcake (1).png"} className={styles.smallImg}/>
                    <img src={"../assets/cupcake (1).png"} className={styles.smallImg}/>
                    <img src={"../assets/cupcake (1).png"} className={styles.smallImg}/>
                </div>
            </div>
        </div>
        <div className={styles.bottomContainer}>
            <p className={styles.label}>Sweet-Combo</p>
            <p className={styles.label}>-30% na całe zamówienie</p>
            <button className={styles.orderButton}>
                Zamów
            </button>
        </div>
    </div>);
};

export default SpecialOfferTile;