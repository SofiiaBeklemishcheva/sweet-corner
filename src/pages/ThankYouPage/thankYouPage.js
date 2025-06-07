import styles from "./thankYouPage.module.css";

const ThankYouPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Dziękujemy za Twoje zamówienie!</h1>
      <p className={styles.paragraph}>
        Twoje zamówienie zostało pomyślnie złożone. <br />
        <strong>Co dalej?</strong>
      </p>

      <ul className={styles.list}>
        <li>
          <strong>Potwierdzenie e-mail:</strong> Właśnie wysłaliśmy na Twój adres e-mail szczegóły Twojego zamówienia.
        </li>
        <li>
          <strong>Kontakt z naszej strony:</strong> Nasz zespół przeanalizuje Twoje zamówienie i skontaktuje się z Tobą w najbliższym czasie, aby omówić szczegóły, takie jak dokładna cena i czas realizacji.
        </li>
        <li>
          <strong>Płatność:</strong> Po potwierdzeniu wszystkich szczegółów, otrzymasz możliwość dokonania płatności.
        </li>
      </ul>

      <p className={styles.paragraph}>
        <strong>Masz pytania?</strong><br />
        Jeśli masz jakiekolwiek pytania dotyczące Twojego zamówienia, nie wahaj się skontaktować z nami pod adresem <a href="mailto:kontakt@sweetcorner.pl">kontakt@sweetcorner.pl</a> lub telefonicznie pod numerem <a href="tel:+48123456789">+48 123 456 789</a>.
      </p>

      <p className={styles.thankYouNote}>
        Dziękujemy, że wybrałeś <span className={styles.brand}>SweetCorner</span> do stworzenia swojego wyjątkowego deseru!
      </p>
    </div>
  );
};

export default ThankYouPage;
