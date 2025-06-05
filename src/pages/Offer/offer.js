import styles from "./offer.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CarouselTile from "../../components/CarouselTile/carouselTile";
import PriceTile from "../../components/PriceTile/priceTile";
import Button from "../../components/Button/button";

const Offer = () => {
  const cakes = [
    { src: "/assets/śmietanka-truskawka.jpg", altText: "Tort - śmietana z truskawką.", label: "Śmietanka z truskawką" },
    { src: "/assets/kawa-biała czekolada.jpg", altText: "Tort - kawa z białą czekoladą.", label: "Kawa z białą czekoladą" },
    { src: "/assets/malina-pistacja.jpg", altText: "Tort - malina z pistacją.", label: "Malina z pistacją" },
    { src: "/assets/orzechy i słony karmel.jpg", altText: "Tort - orzechy i słony karmel.", label: "Orzechy i słony karmel" },
  ];

  const labels = [
    {label: "Torty"},
    {label: "Ciasteczka"},
    {label: "Macaroons"},
    {label: "Cennik"},
    {label: "Kreowanie własnego tortu"},
  ];

  const cupcakes = [
    { src: "/assets/pomarańcza+cynamon.jpg", altText: "Ciasteczko - pomarańcza z cynamonem", label: "Pomarańcza z cynamonem" },
    { src: "/assets/tuskawka+bazylia.jpg", altText: "Ciasteczko - truskawka z bazylią", label: "Truskawka z bazylią" },
    { src: "/assets/słony karmel 2.jpg", altText: "Ciasteczko - słony karmel", label: "Słony karmel" },
    { src: "/assets/gruszka-gorgonzola.jpg", altText: "Ciasteczko - gruszka z gorgonzolą", label: "Gruszka z gorgonzolą" },
  ];

  const macaroons = [
    { src: "/assets/czarna czekolada+chili.jpg", altText: "Macaroon - ciemna czekolada z chili", label: "Ciemna czekolada z chili" },
    { src: "/assets/grapfrut+ser pleśniowy.jpg", altText: "Macaroon - grapfrut z serem pleśniowym", label: "Grapfrut z serem pleśniowym" },
    { src: "/assets/limonchello.jpg", altText: "Macaroon - limonchello", label: "Limonchello" },
    { src: "/assets/słony karmel.jpg", altText: "Macaroon - słony karmel", label: "Słony karmel" },
  ];

  const ownDesertDescription = [
    {label: "W naszej cukierni Sweet Corner dajemy naszym klientom możliwość stworzenia swojego wymarzonego tortu, dopasowanego do ich indywidualnych upodobań i potrzeb. "},
    {label: "Z naszym zespołem doświadczonych cukierników możesz stworzyć tort, który będzie idealnie odpowiadał Twoim oczekiwaniom. "},
    {label: "Możesz wybierać spośród różnych rodzajów ciasta, takich jak biszkoptowy, tarty lub musowy."},
    {label: "W zakresie smaków mamy dla Ciebie szeroki wybór - od klasycznych, takich jak wanilia, czekolada, truskawka, malina, karmel, po bardziej innowacyjne połączenia, na przykład cytryna z lawendą, karmel z solą morską czy truskawka z bazylią. Możesz także wybierać dodatki i nadzienia według własnego gustu, jak muse malinowy, krem waniliowy, bite śmietany czy owoce sezonowe."},
    {label: "Jeśli chodzi o dekorację, możliwości są nieograniczone. Możesz spersonalizować swój tort poprzez nadruk zdjęcia, napisu lub dekoracji z marcepanu lub czekolady. Wybierz styl dekoracji, który najlepiej odzwierciedli charakter okazji, np. klasyczną elegancję, dziecięcą urodę lub minimalistyczną nowoczesność."},
    {label: "Cena uzależniona jest od użytych składników oraz stopnia skomplikowania dekoracji, zaczynając od 80 zł/kg. Minimalna waga zamówienia wynosi 1 kg."},
    {label: "Kreowanie własnego tortu w Sweet Corner to nie tylko możliwość stworzenia wyjątkowej słodkości, ale także unikalna szansa na wyrażenie siebie poprzez smak i wygląd. Skontaktuj się z nami już dziś, aby zrealizować swoje tortowe marzenie!"}
  ];

  const smallCakesPrices = [
    {label: "Średnica:", price: "20 cm."},
    {label: "Ilość porcji:", price: "6-8 porcji"},
    {label: "Waga:", price: "ok. 1,2 kg"},
    {label: "Cena", price: "90 zł."}
  ];

  const middleCakesPrices = [
    {label: "Średnica:", price: "24 cm."},
    {label: "Ilość porcji:", price: "10-12 porcji"},
    {label: "Waga:", price: "ok. 1,8 kg"},
    {label: "Cena", price: "140 zł."}
  ];

  const bigCakesPrices = [
    {label: "Średnica:", price: "28 cm."},
    {label: "Ilość porcji:", price: "14-16 porcji"},
    {label: "Waga:", price: "ok. 2,5 kg"},
    {label: "Cena", price: "190 zł."}
  ];

  const cupCake = [
    {label: "Minimalna wielkość zamówienia", price: "7 szt."},
    {label: "Waga:", price: "ok. 70g/szt"},
    {label: "Cena:", price: "4,5zł/szt."}
  ];

  const macaroon = [
    {label: "Minimalna wielkość zamówienia", price: "7 szt."},
    {label: "Waga:", price: "ok. 15g/szt"},
    {label: "Cena:", price: "4 zł/szt."}
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageInnerContainer}>
        <div className={styles.labelContainer}>
            <p className={styles.label}>{labels[0].label}</p>
        </div>
        <div className={styles.sliderWrapper}>
          <Slider {...settings}>
            {cakes.map((cake, index) => (
              <CarouselTile
                key={index}
                src={cake.src}
                altText={cake.altText}
                label={cake.label}
              />
            ))}
          </Slider>
        </div>


        <div className={styles.labelContainer}>
            <p className={styles.label}>{labels[1].label}</p>
        </div>
        <div className={styles.sliderWrapper}>
          <Slider {...settings}>
            {cupcakes.map((cupcake, index) => (
              <CarouselTile
                key={index}
                src={cupcake.src}
                altText={cupcake.altText}
                label={cupcake.label}
              />
            ))}
          </Slider>
        </div>


        <div className={styles.labelContainer}>
            <p className={styles.label}>{labels[2].label}</p>
        </div>
        <div className={styles.sliderWrapper}>
          <Slider {...settings}>
            {macaroons.map((macaroon, index) => (
              <CarouselTile
                key={index}
                src={macaroon.src}
                altText={macaroon.altText}
                label={macaroon.label}
              />
            ))}
          </Slider>
        </div>

        <div className={styles.labelContainer}>
            <p className={styles.label}>{labels[3].label}</p>
        </div>

        <div className={styles.priceListContainer}>
            <PriceTile
              src = {"../assets/cake (1).png"}
              altText ={"Mały tort"}
              label = {"Mały"}
              imgSize = {"small"}
              cakePrices = {smallCakesPrices}
            />
            <PriceTile
              src = {"../assets/cake (1).png"}
              altText ={"Średni tort"}
              label = {"Średni"}
              imgSize = {"middle"}
              cakePrices = {middleCakesPrices}
            />
            <PriceTile
              src = {"../assets/cake (1).png"}
              altText ={"Duży tort"}
              label = {"Duży"}
              imgSize = {"big"}
              cakePrices = {bigCakesPrices}
            />
              <PriceTile
              src = {"../assets/cupcake (1).png"}
              altText ={"cupCakes"}
              label = {"Ciasteczka"}
              cakePrices = {cupCake}
              type={"cupcake"}
            />
              <PriceTile
              src = {"../assets/macaroon (4).png"}
              altText ={"Macaroons"}
              label = {"Macaroons"}
              cakePrices = {macaroon}
              type={"cupcake"}
            />
        </div>

        <div className={styles.labelContainer}>
            <p className={styles.label}>{labels[4].label}</p>
        </div>

        <div className={styles.textContainer}>
            <p className={styles.description}>{ownDesertDescription[0].label}</p>
            <p className={styles.description}>{ownDesertDescription[1].label}</p>
            <p className={styles.description}>{ownDesertDescription[2].label}</p>
            <p className={styles.description}>{ownDesertDescription[3].label}</p>
            <p className={styles.description}>{ownDesertDescription[4].label}</p>
            <p className={styles.description}>{ownDesertDescription[5].label}</p>
            <p className={styles.description}>{ownDesertDescription[6].label}</p>
        </div>

        <div className={styles.buttonContainer}>
          <Button
            type = {"green"}
            label = {"Stwórz własny deser"}
            routePath = {"http://localhost:3000/ownDesert"}
          />
        </div>
  </div>


    </div>
  );
};

export default Offer;
