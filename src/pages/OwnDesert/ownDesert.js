import styles from "./ownDesert.module.css";
import Button from "../../components/Button/button";
import OrderForm from "../../components/OrderForm/orderForm";
import { useState } from "react";

const OwnDesert = () => {
  const [dessertType, setDessertType] = useState(null);

  const kindsOfDesert = [
    { type: "desertType", label: "Tort", src: "../../assets/cake%20(1).png", desertType: "cake" },
    { type: "desertType", label: "Cupcake", src: "../../assets/cupcake (1).png", desertType: "cupcake" },
    { type: "desertType", label: "Macaroon", src: "../../assets/macaroon (4).png", desertType: "macaroon" }
  ];

  return (
    <div className={styles.ownDesertContainer}>
      <div className={styles.pageHeadContainer}>
        <div className={styles.pageHead}>
          <p className={styles.pageHeadText}>Stwórz własny deser</p>
        </div>
      </div>

      <div className={styles.selectTypeSection}>
        {kindsOfDesert.map((item, index) => (
          <Button
            key={index}
            type={item.type}
            label={item.label}
            buttonId={index}
            src={item.src}
            onClick={() => setDessertType(item.desertType)}
            state={dessertType === item.desertType ? 1 : 0}
          />
        ))}
      </div>

      {dessertType && (
        <OrderForm type={dessertType} />
      )}
    </div>
  );
};

export default OwnDesert;
