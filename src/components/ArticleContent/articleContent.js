import styles from "./articleContent.module.css";

const ArticleContent = ({
    topRowText=[], 
    title, 
    topImg, 
    secondImg,
    secondRowText=[], 
    description=[], 
    conclusion, 
    conclusionSrc,
    onBackClick}) => {

    return (
        <div className={styles.articleContainer}>
            <div className={styles.backButtonContainer}>
                    <button onClick={onBackClick} className={styles.backButton}>← Powrót</button>
                </div>
            <div className={styles.articleTitleContainer}>
                
                <p className={styles.articleTitle}>{title}</p>
            </div>

            <div className={styles.topRowContainer}>
                <div className={styles.imgContainer}>
                    <img src={topImg} className={styles.rowImgContainer}/>
                </div>
                <div className={styles.rowTextContainer}>
                {topRowText.map((item, index) => (
                <p className={styles.text} key={index}>{item.text}</p>
                ))}
                </div>
            </div>

            <div className={styles.topReverseRowContainer}>
                <div className={styles.imgContainer}>
                    <img src={secondImg} className={styles.rowImgContainer}/>
                </div>
                <div className={styles.rowTextContainer}>
                {secondRowText.map((item, index) => (
                <p className={styles.text} key={index}>{item.text}</p>
                ))}
                </div>
            </div>

            <div className={styles.textContainer}>
                {description.map((item, index)=>(
                    <div className={styles.descriptionTextContainer}>
                      <p className={styles.text} key={index}>{item.text}</p>
                      </div>
                ))}
            </div>
            <img className={styles.conclusionImg} src={conclusionSrc}/>
            <div className={styles.descriptionTextContainer}>
            <p className={styles.text}>{conclusion.text}</p>
            </div>
        </div>
    );
};

export default ArticleContent;