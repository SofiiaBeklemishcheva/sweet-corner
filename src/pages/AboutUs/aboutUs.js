import styles from "./aboutUs.module.css";
import aboutUsInformation from "../../mock/aboutUsMock";

const AboutUs = () => {
    console.log("aboutUsInformation", aboutUsInformation);

  return (
    <div className={styles.pageContent}>

        <div className={styles.rowContainer}>
            <img src="../assets/Kitchen.jpg" className={styles.lineImg}/>
            <div className={styles.textContainer}>
                <div className={styles.fullScreenText}>{aboutUsInformation[0].text}</div>
                <div className={styles.fullScreenText}>{aboutUsInformation[1].text}</div>
            </div>
        </div>

        <div className={styles.rowContainer}>
            <div className={styles.textContainer}>
                <div className={styles.fullScreenText}>{aboutUsInformation[2].text}</div>
                <div className={styles.fullScreenText}>{aboutUsInformation[3].text}</div>
            </div>
            <img src="../assets/Kitchen 2.jpg" className={styles.lineImg}/>
        </div>

        <div className={styles.rowWithPhotoContainer}>
            <div className={styles.photoContainerLeft}>
              <img src="../assets/certificate.jpg" className={styles.noTextImg}/>
            </div>
            <div className={styles.photoContainerRight}>
              <img src="../assets/confectioner.jpg" className={styles.noTextImg}/>
            </div>
        </div>

            <div className={styles.justTextRow}>
            <div className={styles.justText}>{aboutUsInformation[4].text}</div>
            <div className={styles.justText}>{aboutUsInformation[5].text}</div>
            <div className={styles.justText}>{aboutUsInformation[6].text}</div>
            </div>

        <div className={styles.rowWithPhotoContainer}>
            <div className={styles.photoContainerLeft}>
              <img src="../assets/cookies 2.jpg" className={styles.noTextSmallImg}/>
            </div>
            <div className={styles.photoContainerMiddle}>
              <img src="../assets/tort 3.jpg" className={styles.noTextSmallImg}/>
            </div>
            <div className={styles.photoContainerRight}>
              <img src="../assets/Tort 1.jpg" className={styles.noTextSmallImg}/>
            </div>
        </div>

        <div className={styles.justTextRow}>
        <div className={styles.justTextNoIndent}>{aboutUsInformation[7].text}</div>
            <ul className={styles.justTextUl}>{aboutUsInformation[8].text}</ul>
            <ul className={styles.justTextUl}>{aboutUsInformation[9].text}</ul>
            <ul className={styles.justTextUl}>{aboutUsInformation[10].text}</ul>
            </div>

        <div className={styles.rowWithPhotoContainer}>
          <div className={styles.photoContainerRight}>
              <img src="../assets/tort2.jpg" className={styles.noTextImg}/>
          </div>
          <div className={styles.photoContainerLeft}>
              <img src="../assets/tort 5.jpg" className={styles.noTextImg}/>
          </div>
        </div> 

          <div className={styles.justTextRow}>
            <div className={styles.justText}>{aboutUsInformation[11].text}</div>
          </div>

            <div className={styles.rowWithPhotoContainer}>
          <div className={styles.photoContainerLeft}>
              <img src="../assets/tort 6.jpg" className={styles.noTextImg}/>
          </div>
          <div className={styles.photoContainerRight}>
              <img src="../assets/tort 4.jpg" className={styles.noTextImg}/>
          </div>
        </div> 

        <div className={styles.justTextRow}>
            <div className={styles.justText}>{aboutUsInformation[12].text}</div>
            <div className={styles.justText}>{aboutUsInformation[13].text}</div>
            <div className={styles.justText}>{aboutUsInformation[14].text}</div>
            <div className={styles.justText}>{aboutUsInformation[15].text}</div>
          </div>
    </div>
  );
};

export default AboutUs;