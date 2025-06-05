import styles from "./blogRow.module.css";

const BlogRow = ({type, src, title, description, onClick}) => {
    const rowType = (type) => {
        switch (type) {
            case "reverse":
                return <ReverseRow src={src} title={title} description={description} onClick={onClick}/>;
            default:
                return <DefaultRow src={src} description={description} title={title} onClick={onClick}/>;
        }
    };

    return (
        <div>
        {rowType(type)}
        </div>
    );
};

const ReverseRow = ({src, title, description, onClick}) => {
    return(
    <div className={styles.reverseRowContainer}>
        <div className={styles.imgContainerReverse }>
            <img className={styles.img} src={src} altText={"desert"}/>    
        </div>
        <div className={styles.textContainerReverse}>
            <div className={styles.titleContainerReverse}>
                <p className={styles.title}>{title}</p>    
            </div>    
            <div className={styles.descriptionContainer}>
                <p className={styles.descriptionText}>{description}</p>
            </div>
            <div className={styles.moreButtonContainer}>
                <button className={styles.button} onClick={onClick}>
                    Czytaj więcej
                </button>    
            </div>            
        </div>    
    </div>);
}
const DefaultRow = ({src, title, description, onClick}) => {
    return(
    <div className={styles.rowContainer}>
        <div className={styles.imgContainerDefault}>
            <img className={styles.img} src={src} altText={"desert"}/>    
        </div>  
        <div className={styles.textContainer}>
            <div className={styles.titleContainer}>
                <p className={styles.title}>{title}</p>    
            </div>    
            <div className={styles.descriptionContainer}>
                <p className={styles.descriptionText}>{description}</p>
            </div>
                <div className={styles.moreButtonContainer}>
                    <button className={styles.button} onClick={onClick}>
                        Czytaj więcej
                    </button>    
               </div>
        </div>  
    </div>);
}
export default BlogRow;