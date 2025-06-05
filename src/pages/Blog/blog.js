import styles from "./blog.module.css";
import { useState } from "react";
import BlogRow from "../../components/BlogRow/blogRow.js";
import ArticleContent from "../../components/ArticleContent/articleContent.js";

const Blog = () => {
  const [selectedArticleIndex, setSelectedArticleIndex] = useState(null);

  const articles = [
    {
    type: "", 
    src: "../../assets/grapfrut+ser pleśniowy.jpg", 
    title: "Odkryj Nowe Smaki: Niezwykłe Połączenia Smakowe dla Macaroników",
    description: "Zanurz się w świecie macaroników i odkryj niezwykłe połączenia smakowe, które przeniosą Twoje kubki smakowe w podróż pełną niespodzianek i przyjemności. Poznaj nasze ulubione kombinacje smaków i dowiedz się, jak stworzyć własne kolorowe i aromatyczne delicje!"
  },
    {
      type: "reverse",
      src: "../../assets/orzechy i słony karmel.jpg",
      title: "Torty z Klasą: Wybór Rodzajów Kremów i Ich Zastosowanie",
      description: "Zanurz się w świat doskonałych tortów i poznaj różnorodność rodzajów kremów, które nadają im niepowtarzalny smak i konsystencję. Od delikatnych kremów masłowych po lekkie musy i kremy na bazie serków - odkryj, jakie kremy pasują do różnych rodzajów ciast i jak je najlepiej wykorzystać w swoich wypiekach."
    },
    {
      type: "",
      src: "../../assets/gruszka-gorgonzola.jpg",
      title: "Słodkie Odkrycia: Nowe Pomysły na Nadzienia dla Cupcake'ów",
      description: "Przygotuj się na ekscytującą podróż smakową z naszymi nowymi nadzieniami dla cupcake'ów! Odkryj niezwykłe połączenia smakowe, które sprawią, że Twoje cupcake'y staną się prawdziwymi gwiazdami każdego przyjęcia. Od klasycznych smaków po innowacyjne kombinacje - czas na nowe odkrycia w świecie słodkości!"
    }
  ];

  const articleContent = [
    {
      topRowText: [
        {text: "Czy jesteś gotowy na niezwykłą podróż kulinarnej ekscytacji? Dziś zapraszamy Cię do odkrycia niezwykłych połączeń smakowych dla macaroników - tych delikatnych i kolorowych francuskich wypieków, które rozpływają się w ustach, zostawiając po sobie uczucie prawdziwego niebiańskiego smaku."},
        {text: "Macaroniki to znacznie więcej niż tylko słodkie ciasteczka - to prawdziwe dzieła sztuki, które mogą zaskoczyć Cię swoją różnorodnością smaków i aromatów. Dzięki swojej elastyczności i subtelności, macaroniki są idealnym nośnikiem dla najbardziej wyrafinowanych i niekonwencjonalnych połączeń smakowych."}
      ],
      title: "Odkryj Nowe Smaki: Niezwykłe Połączenia Smakowe dla Macaroników",
      topImg: "../../assets/grapfrut+ser pleśniowy.jpg",
      secondImg: "../../assets/czarna czekolada+chili.jpg",
      secondRowText: [
        {text: "A więc, co powiesz na małą eskapadę w świat kulinarnych przygód? Oto kilka nietypowych i kreatywnych pomysłów na połączenia smakowe dla Twoich macaroników:"},
        {text: "Truskawka z Bazylią: Klasyczna słodycz truskawki spotyka się z wyrazistym aromatem bazylii, tworząc harmonijną symfonię smaków - słodką, lekko kwaśną nutą owocu i świeżością ziołowej bazylii."},
        {text: "Karmel i Sól Morska: Kontrastujące smaki słodkiego karmelu i delikatnej soli morskiej tworzą zaskakująco zbalansowaną kompozycję, która podbije Twoje podniebienie i rozbudzi zmysły."}
      ],
      description: [
        {text: "Limoncello: Świeży i orzeźwiający smak cytryny z nutą likieru limoncello to doskonałe połączenie dla tych, którzy kochają delikatną kwasowość i intensywny aromat cytrusów."},
        {text: "Kawa Espresso z Czekoladą: Energetyzująca moc kawy espresso spotyka się z głębokim smakiem gorzkiej czekolady, tworząc intensywną i aromatyczną kombinację, która zadowoli nawet najbardziej wymagające podniebienia."},
        {text: "Malina z Lawendą: Słodka malina przełamana subtelnością i delikatnością lawendy to niezwykłe połączenie, które przeniesie Cię w świat sielskiego uroku i przyjemności."}
      ],
      conclusion: {text: "Gotowy na przygodę? Wybierz swoje ulubione połączenia smakowe, zanurz się w świecie macaroników i pozwól sobie na odrobinę kulinarnego szaleństwa. Odkryj nowe smaki i uczucia, które tylko one mogą zapewnić!"},
      conclusionSrc: "../../assets/macaroons.jpg"
    },
    {
      topRowText: [
        {text: "Tort to nie tylko ciasto – to manifest stylu i smaku. Aby jednak osiągnąć kulinarną perfekcję, potrzebny jest nie tylko doskonały biszkopt, ale również idealnie dobrany krem."},
        {text: "W tym artykule przedstawiamy różnorodne rodzaje kremów do tortów – od klasycznych po nowoczesne – które nadadzą Twoim wypiekom wyjątkowy charakter i smakową głębię."}
      ],
      title: "Torty z Klasą: Wybór Rodzajów Kremów i Ich Zastosowanie",
      topImg: "../../assets/orzechy i słony karmel.jpg",
      secondImg: "../../assets/tort 1.jpg",
      secondRowText: [
        {text: "Masło czy śmietana? A może ser mascarpone? Sprawdź, jaki krem najlepiej sprawdzi się do Twojego wypieku:"},
        {text: "Krem Maślany: Tradycyjny i stabilny, idealny do dekoracji. Może być wzbogacony o kakao, wanilię lub likiery."},
        {text: "Krem na Bazie Mascarpone: Lekki, aksamitny i mniej słodki. Świetny do owocowych tortów i letnich przyjęć."}
      ],
      description: [
        {text: "Krem Czekoladowy z Ganache: Intensywny smak i luksusowa konsystencja. Często stosowany w tortach dla dorosłych."},
        {text: "Musy Owocowe: Delikatne i lekkie, często z dodatkiem żelatyny. Doskonale komponują się z biszkoptami i galaretką."},
        {text: "Kremy Śmietanowe: Lekkie i uniwersalne. Można je łatwo modyfikować dodatkami smakowymi, jak nutella czy owoce leśne."}
      ],
      conclusion: {text: "Dobór odpowiedniego kremu to klucz do sukcesu każdego tortu. Niezależnie od okazji – postaw na smak, konsystencję i estetykę. Eksperymentuj i znajdź swój ulubiony duet!" },
      conclusionSrc: "../../assets/torty.jpg"
    },
    {
      topRowText: [
        {text: "Cupcake'i to nie tylko piękne miniaturowe babeczki – to prawdziwe pole do popisu dla kreatywnych smaków i odważnych kulinarnych eksperymentów."},
        {text: "W tym artykule przedstawiamy nietuzinkowe i zaskakujące nadzienia, które zmienią Twoje wypieki w wyjątkowe doświadczenia smakowe – dla tych, którzy nie boją się wyjść poza klasykę."}
      ],
      title: "Słodkie Odkrycia: Nowe Pomysły na Nadzienia dla Cupcake'ów",
      topImg: "../../assets/gruszka-gorgonzola.jpg",
      secondImg: "../../assets/tuskawka+bazylia.jpg",
      secondRowText: [
        {text: "Zaskocz swoich gości i siebie samego – oto propozycje nadzień, które są tak nieoczywiste, że aż genialne:"},
        {text: "Gruszka z Gorgonzolą: Delikatna słodycz dojrzałej gruszki z ostrym, kremowym serem pleśniowym tworzy eleganckie i niebanalne wnętrze babeczki."},
        {text: "Pomarańcza z Cynamonem i Tymiankiem: Świeżość cytrusów, ciepło przypraw i aromatyczny ziołowy akcent – idealne na chłodniejsze dni."}
      ],
      description: [
        {text: "Truskawka z Bazylią: Słodycz dojrzałych truskawek przełamana świeżym, ziołowym akcentem bazylii tworzy wyrafinowane, letnie połączenie – lekkie, a zarazem pełne charakteru."},
        {text: "Krem z Matchy i Czarnego Sezamu: Japońska inspiracja – ziemisty smak zielonej herbaty i orzechowa nuta sezamu zaskoczą każdego fana kuchni fusion."},
        {text: "Karmelizowany Banan z Rumem i Solą Morską: Tropikalna dekadencja z odrobiną pikanterii i nutką luksusu."}
      ],
      conclusion: {text: "Odważ się na nieznane! Te nietypowe nadzienia to idealny sposób, by nadać cupcake'om charakteru i sprawić, że staną się niezapomnianym punktem każdej okazji – lub codziennym smakołykiem z nutą szaleństwa." },
      conclusionSrc: "../../assets/cupcakes.jpg"
    }
  ];

  return (
    <div>
      {selectedArticleIndex === null ? (
         <div className={styles.articlesListContainer}>
         {articles.map((article, index) =>(
           <BlogRow
           key={index}
           type={article.type}
           src = {article.src}
           title = {article.title}
           description = {article.description}
           onClick={() => setSelectedArticleIndex(index)}
         />
         ))}
         </div>
      ) : (
      <div className={styles.articleContentContainer}>
        <ArticleContent
          topRowText={articleContent[selectedArticleIndex].topRowText}
          title={articleContent[selectedArticleIndex].title}
          topImg={articleContent[selectedArticleIndex].topImg}
          secondImg={articleContent[selectedArticleIndex].secondImg}
          secondRowText={articleContent[selectedArticleIndex].secondRowText}
          description={articleContent[selectedArticleIndex].description}
          conclusion={articleContent[selectedArticleIndex].conclusion}
          conclusionSrc={articleContent[selectedArticleIndex].conclusionSrc}
          onBackClick={() => setSelectedArticleIndex(null)}
  />
      </div>
      )
    }
    </div>
  );
};

export default Blog;