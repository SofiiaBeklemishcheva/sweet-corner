import styles from "./footer.module.css";
import footerMock from "../../mock/footerMock.js";
import { useState } from "react";
import InputComponent from "../../components/InputComponent/inputComponent";

const Footer = () => {
    const [name, setName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [email, setEmail] = useState();
    const [notes, setNotes] = useState();
    const [agreement, setAgreement] = useState();

    const handleSubmit = (e) => {
        e.preventDefault(); 

        console.log({
          name,
          phoneNumber,
          email,
          notes,
          agreement,
        });
      };
      

    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerInnerContainer}>
                <div className={styles.left}>
                    <img className={styles.logoImg} src="../assets/logo/logo.png"/>
                    <p className={styles.text}>{footerMock[0].text}</p>
                    <p className={styles.text}>{footerMock[1].text}</p>

                    <div className={styles.contactInformationRowContainer}>
                        <img className={styles.contactInformationImg} src={"../assets/icons/telephone.png"}/>
                        <p className={styles.contactInformationText}>234 567 098</p>
                    </div>

                    <div className={styles.contactInformationRowContainer}>
                        <img className={styles.contactInformationImg} src={"../assets/icons/email.png"}/>
                        <p className={styles.contactInformationText}>sweetcorner@gmail.com</p>
                    </div>

                    <div className={styles.contactInformationRowContainer}>
                        <a href="sweet-corner-tik-tok">
                        <img className={styles.contactInformationImg} src={"../assets/icons/tik-tok.png"}/>
                        </a>
                        <a href="sweet-corner-facebook">
                        <img className={styles.contactInformationImg} src={"../assets/icons/facebook.png"}/>
                        </a>
                        <a href="sweet-corner-instagram">
                        <img className={styles.contactInformationImg} src={"../assets/icons/instagram.png"}/>
                        </a>
                    </div>
                </div>

                <form className={styles.right} onSubmit={handleSubmit}>
                    <InputComponent
                        label="Firma/Imię"
                        type="text"
                        name="name"
                        value={name}
                        onChange={setName}
                    />
                    <InputComponent
                        label="Numer telefonu"
                        type="phone"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={setPhoneNumber}
                    />
                    <InputComponent
                        label="Email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={setEmail}
                    />
                    <InputComponent
                        label="Wiadomość"
                        type="textarea"
                        name="notes"
                        value={notes}
                        onChange={setNotes}
                    />
                    <InputComponent
                        label="Wyrażam zgodę na przetwarzanie danych osobowych"
                        type="checkbox"
                        name="agreement"
                        value={agreement}
                        required
                        onChange={setAgreement}
                    />
                    <div className={styles.submitButtonContainer}>
                        <button className={styles.submitButton} type="submit">Wyślij</button>
                    </div>
                </form>

            </div>
        </div>
    );
};


export default Footer;
