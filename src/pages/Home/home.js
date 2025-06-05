import styles from "./home.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CarouselTile from "../../components/CarouselTile/carouselTile";
import PriceTile from "../../components/PriceTile/priceTile";
import SpecialOfferTile from "../../components/SpecialOfferTile/specialOfferTile";

const Home = () => {

  const cakes = [
      { src: "/assets/czarna czekolada+chili.jpg", altText: "Słodycze", label: ""},
      { src: "/assets/grapfrut+ser pleśniowy.jpg", altText: "Słodycze", label: ""},
      { src: "/assets/gruszka-gorgonzola.jpg", altText: "Słodycze", label: ""},
      { src: "/assets/kawa-biała czekolada.jpg", altText: "Słodycze", label: ""},
      { src: "/assets/limonchello.jpg", altText: "Słodycze", label: ""},
      { src: "/assets/malina-pistacja.jpg", altText: "Słodycze", label: ""},
      { src: "/assets/malina+biała czekolada.jpg", altText: "Słodycze", label: ""},
      { src: "/assets/mięta-czekolada.jpg", altText: "Słodycze", label: ""},
      { src: "/assets/orzechy i słony karmel.jpg", altText: "Słodycze", label: ""},
      { src: "/assets/pomarańcza+cynamon.jpg", altText: "Słodycze", label: ""},
      { src: "/assets/słony karmel 2.jpg", altText: "Słodycze", label: ""},
      { src: "/assets/słony karmel.jpg", altText: "Słodycze", label: ""},
      { src: "/assets/śmietanka-truskawka.jpg", altText: "Słodycze", label: ""},
      { src: "/assets/Tort 1.jpg", altText: "Słodycze", label: ""},
      { src: "/assets/tort 3.jpg", altText: "Słodycze", label: ""},
      { src: "/assets/tort 4.jpg", altText: "Słodycze", label: ""},
      { src: "/assets/tort 5.jpg", altText: "Słodycze", label: ""},
      { src: "/assets/tort 6.jpg", altText: "Słodycze", label: ""},
      { src: "/assets/tort2.jpg", altText: "Słodycze", label: ""},
      { src: "/assets/tuskawka+bazylia.jpg", altText: "Słodycze", label: ""},
      { src: "/assets/wiśnia-czarna czekolada.jpg", altText: "Słodycze", label: ""},
      { src: "/assets/Пирожное 1.jpg", altText: "Słodycze", label: ""},
      { src: "/assets/Пирожное 2.jpg", altText: "Słodycze", label: ""},
      { src: "/assets/Пирожное 3.jpg", altText: "Słodycze", label: ""},
      { src: "/assets/Пирожное 4.jpg", altText: "Słodycze", label: ""},
      { src: "/assets/Торт 1.jpg", altText: "Słodycze", label: ""},
      { src: "/assets/Торт 2.jpg", altText: "Słodycze", label: ""},
      { src: "/assets/Торт 3.jpg", altText: "Słodycze", label: ""},
      { src: "/assets/Торт 4.jpg", altText: "Słodycze", label: ""}
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };
  return (
    <div>
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
        <div className={styles.specialOfferTilesContainer}>
          <SpecialOfferTile />
          <SpecialOfferTile type={"cupcake"}/>
          <SpecialOfferTile type={"macaroons"}/>
        </div>
    </div>
  );
};

export default Home;