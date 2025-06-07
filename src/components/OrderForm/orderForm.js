import styles from "./orderForm.module.css";
import StepRow from "../StepRow/stepRow.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const OrderForm = ({ type }) => {

    const formTypeSwitch = (type) => {
        switch(type) {
            case "cake":
                return <Cake />;
            case "cupcake":
                return <Cupcake />;
            case "macaroon":
                return <Macaroon />;
            default:
                return null;
        }
    };

    return (
        <div>
            {formTypeSwitch(type)}
        </div>
    );
};

const Cake = ({  }) => {

  const [selectedSponge, setSelectedSponge] = useState(null);
  const [fillingKind, setFillingKind] = useState(null);
  const [creamKind, setCreamKind] = useState(null);
  const [cakeFrosting, setCakeFrosting] = useState(null);
  const [fillingFlavor, setFillingFlavor] = useState(null); 
  const [creamColor, setCreamColor] = useState(null); 
  const [creamFlavor, setCreamFlavor] = useState(null); 
  const [clientName, setClientName] = useState('');
  const [clientSurname, setClientSurname] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const navigate = useNavigate();


  const [frostingColor, setFrostingColor] = useState(null); 

    const [spongeColor, setSpongeColor] = useState(null);

  const [showSpongeColors, setShowSpongeColors] = useState(false);

  const submitOrder = () => {

    const formatValue = (value) => {
        if (!value) return null;
        return {
          label: value.label,
          buttonId: value.buttonId
        };
      };      


    const orderData = {
      spongeType: selectedSponge?.label ?? "Nie wybrano",
      spongeColor: spongeColor?.label ?? "Nie wybrano",
      fillingKind: fillingKind?.label ?? "Nie wybrano",
      fillingFlavor: fillingFlavor?.label ?? "Nie wybrano",
      creamKind: creamKind?.label ?? "Nie wybrano",
      creamColor: creamColor?.label ?? "Nie wybrano",
      creamFlavor: creamFlavor?.label ?? "Nie wybrano",
      frosting: cakeFrosting?.label ?? "Nie wybrano",
      frostingColor: frostingColor?.label ?? "Nie wybrano",
      email: clientEmail,
    };

    fetch("http://localhost:5000/api/MailsSending/cake", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData)
    })
      .then(res => res.json())
      .then(data => alert("Zamówienie wysłane!"))
      .then(() => navigate("/thank-you"))
      .catch(err => console.error("Błąd przy wysyłce:", err));
  };

  const flavors = [
    { type: "cakeFilling",  label: "Kinder", src: "../assets/fillingKinds/kinder.jpg", buttonId: "kinder", buttonSize: "small" },
    { type: "cakeFilling",  label: "Nutella", src: "../assets/fillingKinds/nutella.jpg", buttonId: "nutella", buttonSize: "small" },
    { type: "cakeFilling",  label: "Biała czekolada z wanilią", src: "../assets/fillingKinds/white_chocolate_vanilla.jpg", buttonId: "white_chocolate_vanilla", buttonSize: "small" },
    { type: "cakeFilling",  label: "Karmel z solą morską", src: "../assets/fillingKinds/salted_caramel.jpg", buttonId: "salted_caramel", buttonSize: "small" },
    { type: "cakeFilling",  label: "Krem pistacjowy", src: "../assets/fillingKinds/pistachio.jpeg", buttonId: "pistachio", buttonSize: "small" },
    { type: "cakeFilling",  label: "Orzech laskowy z praliną", src: "../assets/fillingKinds/hazelnut_praline.jpg", buttonId: "hazelnut_praline", buttonSize: "small" },
    { type: "cakeFilling",  label: "Masa migdałowa (marcepanowa)", src: "../assets/fillingKinds/almond_marzipan.jpg", buttonId: "almond_marzipan", buttonSize: "small" },
    { type: "cakeFilling",  label: "Kokosowo-rumowa", src: "../assets/fillingKinds/coconut_rum.jpg", buttonId: "coconut_rum", buttonSize: "small" },
    { type: "cakeFilling",  label: "Toffi z espresso", src: "../assets/fillingKinds/toffee_espresso.webp", buttonId: "toffee_espresso", buttonSize: "small" }
  ];

  const fillingFlavorsByKind = {
    jam: [
      { type: "cakeFilling",  label: "Truskawka z waniliją", src: "../assets/jams/strawberryVanilla.webp", buttonId: "strawberryVanilla", buttonSize: "small" },
      { type: "cakeFilling",  label: "Malina z różą", src: "../assets/jams/raspberryRose.jpg", buttonId: "raspberryRose", buttonSize: "small" },
      { type: "cakeFilling",  label: "Czarna porzeczka", src: "../assets/jams/blackCurrant.webp", buttonId: "blackCurrant", buttonSize: "small" },
      { type: "cakeFilling",  label: "Pomarańczowa z kardamonem", src: "../assets/jams/orangeCardamom.webp", buttonId: "orangeCardamom", buttonSize: "small" },
      { type: "cakeFilling",  label: "Mango-marakuja", src: "../assets/jams/mangoPassion.jpg", buttonId: "mangoPassion", buttonSize: "small" },
      { type: "cakeFilling",  label: "Jabłkowo-cynamonowa", src: "../assets/jams/appleCinnamon.jpg", buttonId: "appleCinnamon", buttonSize: "small" },
      { type: "cakeFilling",  label: "Gruszka", src: "../assets/jams/pear.webp", buttonId: "pear", buttonSize: "small" },
      { type: "cakeFilling",  label: "Figowa z lawendą", src: "../assets/jams/figLavender.jpg", buttonId: "figLavender", buttonSize: "small" },
      { type: "cakeFilling",  label: "Wiśniowo-amaretto", src: "../assets/jams/cherryAmaretto.jpg", buttonId: "cherryAmaretto", buttonSize: "small" },
      { type: "cakeFilling",  label: "Borówkowo-limonkowa", src: "../assets/jams/blueberryLime.jpg", buttonId: "blueberryLime", buttonSize: "small" }
    ],
    jelly: [
        { type: "cakeFilling",  label: "Truskawka z waniliją", src: "../assets/jams/strawberryVanilla.webp", buttonId: "strawberryVanilla", buttonSize: "small" },
        { type: "cakeFilling",  label: "Malina z różą", src: "../assets/jams/raspberryRose.jpg", buttonId: "raspberryRose", buttonSize: "small" },
        { type: "cakeFilling",  label: "Czarna porzeczka", src: "../assets/jams/blackCurrant.webp", buttonId: "blackCurrant", buttonSize: "small" },
        { type: "cakeFilling",  label: "Pomarańczowa z kardamonem", src: "../assets/jams/orangeCardamom.webp", buttonId: "orangeCardamom", buttonSize: "small" },
        { type: "cakeFilling",  label: "Mango-marakuja", src: "../assets/jams/mangoPassion.jpg", buttonId: "mangoPassion", buttonSize: "small" },
        { type: "cakeFilling",  label: "Jabłkowo-cynamonowa", src: "../assets/jams/appleCinnamon.jpg", buttonId: "appleCinnamon", buttonSize: "small" },
        { type: "cakeFilling",  label: "Gruszka", src: "../assets/jams/pear.webp", buttonId: "pear", buttonSize: "small" },
        { type: "cakeFilling",  label: "Figowa z lawendą", src: "../assets/jams/figLavender.jpg", buttonId: "figLavender", buttonSize: "small" },
        { type: "cakeFilling",  label: "Wiśniowo-amaretto", src: "../assets/jams/cherryAmaretto.jpg", buttonId: "cherryAmaretto", buttonSize: "small" },
        { type: "cakeFilling",  label: "Borówkowo-limonkowa", src: "../assets/jams/blueberryLime.jpg", buttonId: "blueberryLime", buttonSize: "small" }
      ],
    flavored: [
      { type: "cakeFilling",  label: "Kinder", src: "../assets/fillingKinds/kinder.jpg", buttonId: "kinder", buttonSize: "small" },
      { type: "cakeFilling",  label: "Nutella", src: "../assets/fillingKinds/nutella.jpg", buttonId: "nutella", buttonSize: "small" },
      { type: "cakeFilling",  label: "Biała czekolada z wanilią", src: "../assets/fillingKinds/white_chocolate_vanilla.jpg", buttonId: "white_chocolate_vanilla", buttonSize: "small" },
      { type: "cakeFilling",  label: "Karmel z solą morską", src: "../assets/fillingKinds/salted_caramel.jpg", buttonId: "salted_caramel", buttonSize: "small" },
      { type: "cakeFilling",  label: "Krem pistacjowy", src: "../assets/fillingKinds/pistachio.jpeg", buttonId: "pistachio", buttonSize: "small" },
      { type: "cakeFilling",  label: "Orzech laskowy z praliną", src: "../assets/fillingKinds/hazelnut_praline.jpg", buttonId: "hazelnut_praline", buttonSize: "small" },
      { type: "cakeFilling",  label: "Masa migdałowa (marcepanowa)", src: "../assets/fillingKinds/almond_marzipan.jpg", buttonId: "almond_marzipan", buttonSize: "small" },
      { type: "cakeFilling",  label: "Kokosowo-rumowa", src: "../assets/fillingKinds/coconut_rum.jpg", buttonId: "coconut_rum", buttonSize: "small" },
      { type: "cakeFilling",  label: "Toffi z espresso", src: "../assets/fillingKinds/toffee_espresso.webp", buttonId: "toffee_espresso", buttonSize: "small" }
    ]
  };
  
  const colors = [
    { type: "cakeFilling",  label: "Biały", src: "../assets/creamColors/pastry-bag (3).png", buttonId: "white", buttonSize: "small" },
        { type: "cakeFilling",  label: "Różowy", src: "../assets/creamColors/pastry-bag (2).png", buttonId: "pink", buttonSize: "small" },
        { type: "cakeFilling",  label: "Fioletowy", src: "../assets/creamColors/pastry-bag (1).png", buttonId: "purple", buttonSize: "small" },
        { type: "cakeFilling",  label: "Czarny", src: "../assets/creamColors/pastry-bag (4).png", buttonId: "black", buttonSize: "small" },
        { type: "cakeFilling",  label: "Turkusowy", src: "../assets/creamColors/pastry-bag (5).png", buttonId: "turcus", buttonSize: "small" },
        { type: "cakeFilling",  label: "Granatowy", src: "../assets/creamColors/pastry-bag (6).png", buttonId: "navyBlue", buttonSize: "small" },
        { type: "cakeFilling",  label: "Czerwony", src: "../assets/creamColors/pastry-bag (7).png", buttonId: "red", buttonSize: "small" },
        { type: "cakeFilling",  label: "Brązowy", src: "../assets/creamColors/pastry-bag (8).png", buttonId: "brown", buttonSize: "small" },
        { type: "cakeFilling",  label: "Różowy", src: "../assets/creamColors/pastry-bag (9).png", buttonId: "green", buttonSize: "small" },
        { type: "cakeFilling",  label: "Różowy", src: "../assets/creamColors/pastry-bag.png", buttonId: "orange", buttonSize: "small" }
  ];
  

  const spongeColorButtons = [
    {
      type: "cakeFilling",
      label: "Jasny",
      src: "...",
      buttonId: "lightColor",
      style: "small"
    },
    {
      type: "cakeFilling",
      label: "Ciemny",
      src: "...",
      buttonId: "darkColor",
      style: "small"
    }
  ];

    const cakeFrostings = [
        {   type: "cakeFilling",
            label: "Krem maślany",
            src: "../assets/cakeFrosting/butterCream.jpg",
            buttonId: "buttercreamFrosting",
            style: ""
        },
        {   type: "cakeFilling",
            label: "Ganache",
            src: "../assets/cakeFrosting/ganache.webp",
            buttonId: "ganacheFrosting",
            style: ""
        },
        {   type: "cakeFilling",
            label: "Lustrzana glazura",
            src: "../assets/cakeFrosting/lustrzanaGlazura.webp",
            buttonId: "mirrorGlaze",
            style: ""
        },
        {   type: "cakeFilling",
            label: "Masa cukrowa",
            src: "../assets/cakeFrosting/masaCukrowa.jpg",
            buttonId: "fondant",
            style: ""
        },
        {   type: "cakeFilling",
            label: "Zamsz",
            src: "../assets/cakeFrosting/zamsz.jpg",
            buttonId: "velvetEffect",
            style: ""
        },
    ];

    const creamKinds = [
        {   type: "cakeFilling",
            label: "Maślany",
            src: "../assets/creamKind/butterCream.jpg",
            buttonId: "creamButton",
            style: ""
        },
        {   type: "cakeFilling",
            label: "Śmietankowy",
            src: "../assets/creamKind/cream.jpg",
            buttonId: "creamCream",
            style: ""
        },
        {   type: "cakeFilling",
            label: "Ganache",
            src: "../assets/creamKind/ganache.webp",
            buttonId: "creamGanache",
            style: ""
        },
    ];

    const fillingKinds = [
        {   type: "cakeFilling",
            label: "Brak",
            src: "../assets/fillingKind/close.png",
            buttonId: "noFilling",
            style: ""
        },
        {   type: "cakeFilling",
            label: "Konfitura owocowa",
            src: "../assets/fillingKind/jam.png",
            buttonId: "jam",
            style: ""
        },
        {   type: "cakeFilling",
            label: "Galaretka",
            src: "../assets/fillingKind/pudding.png",
            buttonId: "jelly",
            style: ""
        },
        {   type: "cakeFilling",
            label: "Chrupiąca warstwa",
            src: "../assets/fillingKind/crispy.png",
            buttonId: "crispy",
            style: ""
        },
        {   type: "cakeFilling",
            label: "Masa smakowa",
            src: "../assets/fillingKind/whip-cream.png",
            buttonId: "flavoredFilling",
            style: ""
        },
    ];

    const buttonsPropertySpongeType = [
        {   type: "cakeFilling",
            label: "Brak = tort “musowy”",
            src: "../assets/spongeType/mousse.png",
            buttonId: "noSponge",
            style: ""
        },
        {   type: "cakeFilling",
            label: "Tarta",
            src: "../assets/spongeType/egg-tart.png",
            buttonId: "tarte",
            style: ""
        },
        {   type: "cakeFilling",
            label: "Biszkopt",
            src: "../assets/spongeType/sponge-cake.png",
            buttonId: "sponge",
            style: ""
        },
        {   type: "cakeFilling",
            label: "Beza",
            src: "../assets/spongeType/meringue.png",
            buttonId: "meringue",
            style: ""
        }
    ];
    
    const handleSpongeSelect = (value) => {
        setSelectedSponge(value);
        setShowSpongeColors(true); 
    };
    
   return(<div>
        <StepRow
        stepNumber= {"Krok 1"}
        stepDescription= {"Wybierz rodzaj biszkoptu"}
        buttons={buttonsPropertySpongeType}
        selectedButton={selectedSponge}
        setButton={handleSpongeSelect}
        />

        {showSpongeColors && (
            <StepRow
                stepNumber="Krok 1.1"
                stepDescription="Wybierz kolor biszkoptu"
                buttons={spongeColorButtons}
                selectedButton={spongeColor}
                setButton={setSpongeColor}
            />
            )}

        <StepRow
        stepNumber="Krok 2"
        stepDescription="Wybierz rodzaj nadzienia"
        buttons={fillingKinds}
        selectedButton={fillingKind}
        setButton={(val) => {
            setFillingKind(val);
            setFillingFlavor(null); // Resetuj smak po zmianie rodzaju
        }}
        />

        {fillingKind?.buttonId &&
        fillingFlavorsByKind[fillingKind.buttonId] && (
            <StepRow
            stepNumber="Krok 2.1"
            stepDescription="Wybierz smak nadzienia"
            buttons={fillingFlavorsByKind[fillingKind.buttonId]}
            selectedButton={fillingFlavor}
            setButton={setFillingFlavor}
            />
        )}

        <StepRow
        stepNumber= {"Krok 3"}
        stepDescription= {"Wybierz rodzaj kremu"}
        buttons={creamKinds}
        selectedButton={creamKind}
        setButton={setCreamKind}
        />
        {creamKind && (
        <>
          <StepRow
            stepNumber="Krok 3.1"
            stepDescription="Wybierz kolor kremu"
            buttons={colors}
            selectedButton={creamColor}
            setButton={setCreamColor}
          />
          <StepRow
            stepNumber="Krok 3.2"
            stepDescription="Wybierz smak kremu"
            buttons={flavors}
            selectedButton={creamFlavor}
            setButton={setCreamFlavor}
          />
        </>
      )}

        <StepRow
        stepNumber= {"Krok 4"}
        stepDescription= {"Wybierz wykonczenie tortu"}
        buttons={cakeFrostings}
        selectedButton={cakeFrosting}
        setButton={setCakeFrosting}
        />
         {cakeFrosting && (
        <StepRow
          stepNumber="Krok 4.1"
          stepDescription="Wybierz kolor wykończenia"
          buttons={colors}
          selectedButton={frostingColor}
          setButton={setFrostingColor}
        />
      )}

    <div className={styles.clientDataContainer}>
    <h2 className={styles.clientDataTitle}>Podaj swoje dane, abyśmy mogli się skontaktować</h2>
    <input className={styles.clientDataInput} type="text" placeholder="Imię" value={clientName} onChange={(e) => setClientName(e.target.value)} />
    <input className={styles.clientDataInput} type="text" placeholder="Nazwisko" value={clientSurname} onChange={(e) => setClientSurname(e.target.value)} />
    <input className={styles.clientDataInput} type="email" placeholder="Email" value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} />
    <input className={styles.clientDataInput} type="tel" placeholder="Telefon" value={clientPhone} onChange={(e) => setClientPhone(e.target.value)} />
    </div>

      <button className={styles.submitButton} onClick={submitOrder}>Wyślij zamówienie</button>
   </div>); 
};

const Cupcake = ({}) => {
    const initialCupcakes = Array.from({ length: 7 }, (_, index) => ({
        id: index + 1,
        spongeColor: null,
        fillingKind: null,
        fillingFlavor: null,
        creamKind: null,
        creamColor: null,
        quantity: 7 // domyślnie 7 sztuk
      }));
    
      const [cupcakes, setCupcakes] = useState(initialCupcakes);
      const [selectedCupcakeIndex, setSelectedCupcakeIndex] = useState(null);
      const [clientName, setClientName] = useState('');
        const [clientSurname, setClientSurname] = useState('');
        const [clientEmail, setClientEmail] = useState('');
        const [clientPhone, setClientPhone] = useState('');
        const navigate = useNavigate();


    
      const updateCupcake = (field, value) => {
        const updated = [...cupcakes];
        updated[selectedCupcakeIndex] = {
          ...updated[selectedCupcakeIndex],
          [field]: value
        };
        setCupcakes(updated);
      };
    
      const spongeColors = [
        { type: "cakeFilling", label: "Jasny", src: "../assets/cupcakesColors/cupcake (1).png", buttonId: "lightColor", buttonSize: "small" },
        { type: "cakeFilling", label: "Ciemny", src: "../assets/cupcakesColors/cupcake (2).png", buttonId: "darkColor", buttonSize: "small" },
        { type: "cakeFilling", label: "Ciemny", src: "../assets/cupcakesColors/cupcake (brown).png", buttonId: "darkColor", buttonSize: "small" },
        { type: "cakeFilling", label: "Ciemny", src: "../assets/cupcakesColors/cupcake (green).png", buttonId: "darkColor", buttonSize: "small" },
        { type: "cakeFilling", label: "Ciemny", src: "../assets/cupcakesColors/cupcake (navy-blue).png", buttonId: "darkColor", buttonSize: "small" },
        { type: "cakeFilling", label: "Ciemny", src: "../assets/cupcakesColors/cupcake (purple).png", buttonId: "darkColor", buttonSize: "small" },
        { type: "cakeFilling", label: "Ciemny", src: "../assets/cupcakesColors/cupcake (red).png", buttonId: "darkColor", buttonSize: "small" },
        { type: "cakeFilling", label: "Ciemny", src: "../assets/cupcakesColors/cupcake (rose).png", buttonId: "darkColor", buttonSize: "small" },
        { type: "cakeFilling", label: "Ciemny", src: "../assets/cupcakesColors/cupcake (turcus).png", buttonId: "darkColor", buttonSize: "small" },
        { type: "cakeFilling", label: "Ciemny", src: "../assets/cupcakesColors/cupcake orange.png", buttonId: "darkColor", buttonSize: "small" }
      ];
    
      const fillingKinds = [
        {type: "cakeFilling", label: "Konfitura owocowa", src: "../assets/fillingKind/jam.png", buttonId: "jam", buttonStyles: "" },
        {type: "cakeFilling", label: "Masa smakowa", src: "../assets/fillingKind/whip-cream.png", buttonId: "flavored", buttonStyles: "" },
      ];
    
      const fillingFlavorsByKind = {
        jam: [
            { type: "cakeFilling",  label: "Truskawka z waniliją", src: "../assets/jams/strawberryVanilla.webp", buttonId: "strawberryVanilla", buttonSize: "small" },
            { type: "cakeFilling",  label: "Malina z różą", src: "../assets/jams/raspberryRose.jpg", buttonId: "raspberryRose", buttonSize: "small" },
            { type: "cakeFilling",  label: "Czarna porzeczka", src: "../assets/jams/blackCurrant.webp", buttonId: "blackCurrant", buttonSize: "small" },
            { type: "cakeFilling",  label: "Pomarańczowa z kardamonem", src: "../assets/jams/orangeCardamom.webp", buttonId: "orangeCardamom", buttonSize: "small" },
            { type: "cakeFilling",  label: "Mango-marakuja", src: "../assets/jams/mangoPassion.jpg", buttonId: "mangoPassion", buttonSize: "small" },
            { type: "cakeFilling",  label: "Jabłkowo-cynamonowa", src: "../assets/jams/appleCinnamon.jpg", buttonId: "appleCinnamon", buttonSize: "small" },
            { type: "cakeFilling",  label: "Gruszka", src: "../assets/jams/pear.webp", buttonId: "pear", buttonSize: "small" },
            { type: "cakeFilling",  label: "Figowa z lawendą", src: "../assets/jams/figLavender.jpg", buttonId: "figLavender", buttonSize: "small" },
            { type: "cakeFilling",  label: "Wiśniowo-amaretto", src: "../assets/jams/cherryAmaretto.jpg", buttonId: "cherryAmaretto", buttonSize: "small" },
            { type: "cakeFilling",  label: "Borówkowo-limonkowa", src: "../assets/jams/blueberryLime.jpg", buttonId: "blueberryLime", buttonSize: "small" }
        ],
        flavored: [
            { type: "cakeFilling",  label: "Kinder", src: "../assets/fillingKinds/kinder.jpg", buttonId: "kinder", buttonSize: "small" },
            { type: "cakeFilling",  label: "Nutella", src: "../assets/fillingKinds/nutella.jpg", buttonId: "nutella", buttonSize: "small" },
            { type: "cakeFilling",  label: "Biała czekolada z wanilią", src: "../assets/fillingKinds/white_chocolate_vanilla.jpg", buttonId: "white_chocolate_vanilla", buttonSize: "small" },
            { type: "cakeFilling",  label: "Karmel z solą morską", src: "../assets/fillingKinds/salted_caramel.jpg", buttonId: "salted_caramel", buttonSize: "small" },
            { type: "cakeFilling",  label: "Krem pistacjowy", src: "../assets/fillingKinds/pistachio.jpeg", buttonId: "pistachio", buttonSize: "small" },
            { type: "cakeFilling",  label: "Orzech laskowy z praliną", src: "../assets/fillingKinds/hazelnut_praline.jpg", buttonId: "hazelnut_praline", buttonSize: "small" },
            { type: "cakeFilling",  label: "Masa migdałowa (marcepanowa)", src: "../assets/fillingKinds/almond_marzipan.jpg", buttonId: "almond_marzipan", buttonSize: "small" },
            { type: "cakeFilling",  label: "Kokosowo-rumowa", src: "../assets/fillingKinds/coconut_rum.jpg", buttonId: "coconut_rum", buttonSize: "small" },
            { type: "cakeFilling",  label: "Toffi z espresso", src: "../assets/fillingKinds/toffee_espresso.webp", buttonId: "toffee_espresso", buttonSize: "small" }
        ]
      };
    
      const creamKinds = [
        { type: "cakeFilling",  label: "Maślany", src: "../assets/creamKind/butterCream.jpg", buttonId: "butter", buttonStyles: "" },
        { type: "cakeFilling",  label: "Śmietankowy", src: "../assets/creamKind/cream.jpg", buttonId: "cream", buttonStyles: "" }
      ];
    
      const creamColors = [
        { type: "cakeFilling",  label: "Biały", src: "../assets/creamColors/pastry-bag (3).png", buttonId: "white", buttonSize: "small" },
        { type: "cakeFilling",  label: "Różowy", src: "../assets/creamColors/pastry-bag (2).png", buttonId: "pink", buttonSize: "small" },
        { type: "cakeFilling",  label: "Fioletowy", src: "../assets/creamColors/pastry-bag (1).png", buttonId: "purple", buttonSize: "small" },
        { type: "cakeFilling",  label: "Czarny", src: "../assets/creamColors/pastry-bag (4).png", buttonId: "black", buttonSize: "small" },
        { type: "cakeFilling",  label: "Turkusowy", src: "../assets/creamColors/pastry-bag (5).png", buttonId: "turcus", buttonSize: "small" },
        { type: "cakeFilling",  label: "Granatowy", src: "../assets/creamColors/pastry-bag (6).png", buttonId: "navyBlue", buttonSize: "small" },
        { type: "cakeFilling",  label: "Czerwony", src: "../assets/creamColors/pastry-bag (7).png", buttonId: "red", buttonSize: "small" },
        { type: "cakeFilling",  label: "Brązowy", src: "../assets/creamColors/pastry-bag (8).png", buttonId: "brown", buttonSize: "small" },
        { type: "cakeFilling",  label: "Różowy", src: "../assets/creamColors/pastry-bag (9).png", buttonId: "green", buttonSize: "small" },
        { type: "cakeFilling",  label: "Różowy", src: "../assets/creamColors/pastry-bag.png", buttonId: "orange", buttonSize: "small" }
      ];
    
      const submitCupcakeOrder = () => {
        if (cupcakes.some(c => c.quantity < 7)) {
          alert("Każdy cupcake musi mieć przynajmniej 7 sztuk.");
          return;
        }
    
        const formatted = cupcakes.map((c) => ({
          spongeColor: c.spongeColor?.label ?? "Nie wybrano",
          fillingKind: c.fillingKind?.label ?? "Nie wybrano",
          fillingFlavor: c.fillingFlavor?.label ?? "Nie wybrano",
          creamKind: c.creamKind?.label ?? "Nie wybrano",
          creamColor: c.creamColor?.label ?? "Nie wybrano",
          email: clientEmail,
        }));
    
        fetch("http://localhost:5000/api/MailsSending/cupcake", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formatted)
        })
          .then(res => res.json())
          .then(() => alert("Zamówienie wysłane!"))
          .then(() => navigate("/thank-you"))
          .catch(err => console.error("Błąd:", err));
      };
    
      const formatValue = (value) => value ? { label: value.label, buttonId: value.buttonId } : null;
      console.log("Krok 2: selected fillingKind:", cupcakes[selectedCupcakeIndex]?.fillingKind);

      return (
        <div>
          <h2>Wybierz cupcake do edycji</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {cupcakes.map((cupcake, index) => (
              <button
                key={index}
                onClick={() => setSelectedCupcakeIndex(index)}
                style={{
                  border: selectedCupcakeIndex === index ? "2px solid green" : "1px solid #ccc",
                  borderRadius: "8px",
                  padding: "8px",
                  width: "100px",
                  textAlign: "center"
                }}
              >
                Cupcake {index + 1}
              </button>
            ))}
          </div>
    
          {selectedCupcakeIndex !== null && (
            <div style={{ marginTop: "20px" }}>
              <StepRow
                stepNumber="Krok 1"
                stepDescription="Wybierz kolor ciasta"
                buttons={spongeColors}
                selectedButton={cupcakes[selectedCupcakeIndex].spongeColor}
                setButton={(val) => updateCupcake("spongeColor", val)}
              />
              <StepRow
                stepNumber="Krok 2"
                stepDescription="Wybierz rodzaj nadzienia"
                buttons={fillingKinds}
                selectedButton={cupcakes[selectedCupcakeIndex].fillingKind}
                setButton={(val) => {
                    const updated = {
                      ...cupcakes[selectedCupcakeIndex],
                      fillingKind: val,
                      fillingFlavor: null
                    };
                    const all = [...cupcakes];
                    all[selectedCupcakeIndex] = updated;
                    setCupcakes(all);
                  }}
                  
              />
              {cupcakes[selectedCupcakeIndex]?.fillingKind?.buttonId &&
  fillingFlavorsByKind[cupcakes[selectedCupcakeIndex].fillingKind.buttonId] && (
    <StepRow
      stepNumber="Krok 2.1"
      stepDescription="Wybierz smak nadzienia"
      buttons={fillingFlavorsByKind[cupcakes[selectedCupcakeIndex].fillingKind.buttonId]}
      selectedButton={cupcakes[selectedCupcakeIndex].fillingFlavor}
      setButton={(val) => updateCupcake("fillingFlavor", val)}
    />
)}

              <StepRow
                stepNumber="Krok 3"
                stepDescription="Wybierz rodzaj kremu"
                buttons={creamKinds}
                selectedButton={cupcakes[selectedCupcakeIndex].creamKind}
                setButton={(val) => updateCupcake("creamKind", val)}
              />
              {cupcakes[selectedCupcakeIndex].creamKind && (
                <StepRow
                  stepNumber="Krok 3.1"
                  stepDescription="Wybierz kolor kremu"
                  buttons={creamColors}
                  selectedButton={cupcakes[selectedCupcakeIndex].creamColor}
                  setButton={(val) => updateCupcake("creamColor", val)}
                />
              )}
            </div>
          )}
    
    <div className={styles.clientDataContainer}>
    <h2 className={styles.clientDataTitle}>Podaj swoje dane, abyśmy mogli się skontaktować</h2>
    <input className={styles.clientDataInput} type="text" placeholder="Imię" value={clientName} onChange={(e) => setClientName(e.target.value)} />
    <input className={styles.clientDataInput} type="text" placeholder="Nazwisko" value={clientSurname} onChange={(e) => setClientSurname(e.target.value)} />
    <input className={styles.clientDataInput} type="email" placeholder="Email" value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} />
    <input className={styles.clientDataInput} type="tel" placeholder="Telefon" value={clientPhone} onChange={(e) => setClientPhone(e.target.value)} />
    </div>

      <button className={styles.submitButton} onClick={submitCupcakeOrder}>Wyślij zamówienie</button>
        </div>
      );
};

const Macaroon = ({}) => {
    const initialMacaroons = Array.from({ length: 7 }, (_, index) => ({
        id: index + 1,
        spongeColor: null,
        fillingKind: null,
        fillingFlavor: null,
        creamKind: null,
        creamColor: null,
        quantity: 7
      }));
  
    const [macaroons, setMacaroons] = useState(initialMacaroons);
    const [selectedMacaroonIndex, setSelectedMacaroonIndex] = useState(null);
    const [clientName, setClientName] = useState('');
    const [clientSurname, setClientSurname] = useState('');
    const [clientEmail, setClientEmail] = useState('');
    const [clientPhone, setClientPhone] = useState('');
    const navigate = useNavigate();

    const updateMacaroon = (field, value) => {
      const updated = [...macaroons];
      updated[selectedMacaroonIndex] = {
        ...updated[selectedMacaroonIndex],
        [field]: value
      };
      setMacaroons(updated);
    };
  
    const formatValue = (value) =>
      value ? { label: value.label, buttonId: value.buttonId } : null;
  
    const submitMacaroonOrder = () => {
        if (macaroons.some(m => m.quantity < 7)) {
          alert("Każdy macaroon musi mieć przynajmniej 7 sztuk.");
          return;
        }
    
        const formatted = macaroons.map((m) => ({
          spongeColor: m.spongeColor?.label ?? "Nie wybrano",
          fillingKind: m.fillingKind?.label ?? "Nie wybrano",
          fillingFlavor: m.fillingFlavor?.label ?? "Nie wybrano",
          creamKind: m.creamKind?.label ?? "Nie wybrano",
          creamColor: m.creamColor?.label ?? "Nie wybrano",
          email: clientEmail,
        }));
    
        fetch("http://localhost:5000/api/MailsSending/macaroon", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formatted)
        })
          .then(res => res.json())
          .then(() => alert("Zamówienie wysłane!"))
          .then(() => navigate("/thank-you"))
          .catch(err => console.error("Błąd:", err));
      };

      const spongeColors = [
        { type: "cakeFilling", label: "Naturalny", src: "../assets/macaroonsColors/macaroon (3).png", buttonId: "natural", buttonSize: "small" },
        { type: "cakeFilling", label: "Czarny", src: "../assets/macaroonsColors/macaroon (4).png", buttonId: "black", buttonSize: "small" },
        { type: "cakeFilling", label: "Brązowy", src: "../assets/macaroonsColors/macaroon (brown).png", buttonId: "brown", buttonSize: "small" },
        { type: "cakeFilling", label: "Zielony", src: "../assets/macaroonsColors/macaroon (1).png", buttonId: "green", buttonSize: "small" },
        { type: "cakeFilling", label: "Granatowy", src: "../assets/macaroonsColors/macaroon (navy-blue).png", buttonId: "navyBlue", buttonSize: "small" },
        { type: "cakeFilling", label: "Fioletowy", src: "../assets/macaroonsColors/macaroon (purple).png", buttonId: "purple", buttonSize: "small" },
        { type: "cakeFilling", label: "Czerwony", src: "../assets/macaroonsColors/macaroon (6).png", buttonId: "red", buttonSize: "small" },
        { type: "cakeFilling", label: "Różowy", src: "../assets/macaroonsColors/macaroon (rose).png", buttonId: "rose", buttonSize: "small" },
        { type: "cakeFilling", label: "Turkusowy", src: "../assets/macaroonsColors/macaroon (turcus).png", buttonId: "turcus", buttonSize: "small" },
        { type: "cakeFilling", label: "Pomarańczowy", src: "../assets/macaroonsColors/macaroon (2).png", buttonId: "dorange", buttonSize: "small" }
      ];
    
      const fillingKinds = [
        {type: "cakeFilling", label: "Konfitura owocowa", src: "../assets/fillingKind/jam.png", buttonId: "jam", buttonSize: "" },
        {type: "cakeFilling", label: "Masa smakowa", src: "../assets/fillingKind/whip-cream.png", buttonId: "flavored", buttonSize: "" },
      ];
    
      const fillingFlavorsByKind = {
        jam: [
          { type: "cakeFilling",  label: "Truskawka z waniliją", src: "../assets/jams/strawberryVanilla.webp", buttonId: "strawberryVanilla", buttonSize: "small" },
          { type: "cakeFilling",  label: "Malina z różą", src: "../assets/jams/raspberryRose.jpg", buttonId: "raspberryRose", buttonSize: "small" },
          { type: "cakeFilling",  label: "Czarna porzeczka", src: "../assets/jams/blackCurrant.webp", buttonId: "blackCurrant", buttonSize: "small" },
          { type: "cakeFilling",  label: "Pomarańczowa z kardamonem", src: "../assets/jams/orangeCardamom.webp", buttonId: "orangeCardamom", buttonSize: "small" },
          { type: "cakeFilling",  label: "Mango-marakuja", src: "../assets/jams/mangoPassion.jpg", buttonId: "mangoPassion", buttonSize: "small" },
          { type: "cakeFilling",  label: "Jabłkowo-cynamonowa", src: "../assets/jams/appleCinnamon.jpg", buttonId: "appleCinnamon", buttonSize: "small" },
          { type: "cakeFilling",  label: "Gruszka", src: "../assets/jams/pear.webp", buttonId: "pear", buttonSize: "small" },
          { type: "cakeFilling",  label: "Figowa z lawendą", src: "../assets/jams/figLavender.jpg", buttonId: "figLavender", buttonSize: "small" },
          { type: "cakeFilling",  label: "Wiśniowo-amaretto", src: "../assets/jams/cherryAmaretto.jpg", buttonId: "cherryAmaretto", buttonSize: "small" },
          { type: "cakeFilling",  label: "Borówkowo-limonkowa", src: "../assets/jams/blueberryLime.jpg", buttonId: "blueberryLime", buttonSize: "small" }
        ],
        flavored: [
          { type: "cakeFilling",  label: "Kinder", src: "../assets/fillingKinds/kinder.jpg", buttonId: "kinder", buttonSize: "small" },
          { type: "cakeFilling",  label: "Nutella", src: "../assets/fillingKinds/nutella.jpg", buttonId: "nutella", buttonSize: "small" },
          { type: "cakeFilling",  label: "Biała czekolada z wanilią", src: "../assets/fillingKinds/white_chocolate_vanilla.jpg", buttonId: "white_chocolate_vanilla", buttonSize: "small" },
          { type: "cakeFilling",  label: "Karmel z solą morską", src: "../assets/fillingKinds/salted_caramel.jpg", buttonId: "salted_caramel", buttonSize: "small" },
          { type: "cakeFilling",  label: "Krem pistacjowy", src: "../assets/fillingKinds/pistachio.jpeg", buttonId: "pistachio", buttonSize: "small" },
          { type: "cakeFilling",  label: "Orzech laskowy z praliną", src: "../assets/fillingKinds/hazelnut_praline.jpg", buttonId: "hazelnut_praline", buttonSize: "small" },
          { type: "cakeFilling",  label: "Masa migdałowa (marcepanowa)", src: "../assets/fillingKinds/almond_marzipan.jpg", buttonId: "almond_marzipan", buttonSize: "small" },
          { type: "cakeFilling",  label: "Kokosowo-rumowa", src: "../assets/fillingKinds/coconut_rum.jpg", buttonId: "coconut_rum", buttonSize: "small" },
          { type: "cakeFilling",  label: "Toffi z espresso", src: "../assets/fillingKinds/toffee_espresso.webp", buttonId: "toffee_espresso", buttonSize: "small" }
        ]
      };
    
      const creamKinds = [
        {   type: "cakeFilling",
            label: "Maślany",
            src: "../assets/creamKind/butterCream.jpg",
            buttonId: "creamButton",
            buttonSize: ""
        },
        {   type: "cakeFilling",
            label: "Śmietankowy",
            src: "../assets/creamKind/cream.jpg",
            buttonId: "creamCream",
            buttonSize: ""
        },
        {   type: "cakeFilling",
            label: "Ganache",
            src: "../assets/creamKind/ganache.webp",
            buttonId: "creamGanache",
            buttonSize: ""
        },
    ];
    
      const creamColors = [
        { type: "cakeFilling",  label: "Biały", src: "../assets/creamColors/pastry-bag (3).png", buttonId: "white", buttonSize: "small" },
        { type: "cakeFilling",  label: "Różowy", src: "../assets/creamColors/pastry-bag (2).png", buttonId: "pink", buttonSize: "small" },
        { type: "cakeFilling",  label: "Fioletowy", src: "../assets/creamColors/pastry-bag (1).png", buttonId: "purple", buttonSize: "small" },
        { type: "cakeFilling",  label: "Czarny", src: "../assets/creamColors/pastry-bag (4).png", buttonId: "black", buttonSize: "small" },
        { type: "cakeFilling",  label: "Turkusowy", src: "../assets/creamColors/pastry-bag (5).png", buttonId: "turcus", buttonSize: "small" },
        { type: "cakeFilling",  label: "Granatowy", src: "../assets/creamColors/pastry-bag (6).png", buttonId: "navyBlue", buttonSize: "small" },
        { type: "cakeFilling",  label: "Czerwony", src: "../assets/creamColors/pastry-bag (7).png", buttonId: "red", buttonSize: "small" },
        { type: "cakeFilling",  label: "Brązowy", src: "../assets/creamColors/pastry-bag (8).png", buttonId: "brown", buttonSize: "small" },
        { type: "cakeFilling",  label: "Różowy", src: "../assets/creamColors/pastry-bag (9).png", buttonId: "green", buttonSize: "small" },
        { type: "cakeFilling",  label: "Różowy", src: "../assets/creamColors/pastry-bag.png", buttonId: "orange", buttonSize: "small" }
      ];
  
    return (
      <div>
        <h2>Wybierz macaroon do edycji</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {macaroons.map((macaroon, index) => (
            <button
              key={index}
              onClick={() => setSelectedMacaroonIndex(index)}
              style={{
                border: selectedMacaroonIndex === index ? "2px solid green" : "1px solid #ccc",
                borderRadius: "8px",
                padding: "8px",
                width: "100px",
                textAlign: "center"
              }}
            >
              Macaroon {index + 1}
            </button>
          ))}
        </div>
  
        {selectedMacaroonIndex !== null && (
          <div style={{ marginTop: "20px" }}>
  
            <StepRow
              stepNumber="Krok 1"
              stepDescription="Wybierz kolor ciasta"
              buttons={spongeColors}
              selectedButton={macaroons[selectedMacaroonIndex].spongeColor}
              setButton={(val) => updateMacaroon("spongeColor", val)}
            />
  
            <StepRow
              stepNumber="Krok 2"
              stepDescription="Wybierz rodzaj nadzienia"
              buttons={fillingKinds}
              selectedButton={macaroons[selectedMacaroonIndex].fillingKind}
              setButton={(val) => {
                const updated = {
                  ...macaroons[selectedMacaroonIndex],
                  fillingKind: val,
                  fillingFlavor: null
                };
                const all = [...macaroons];
                all[selectedMacaroonIndex] = updated;
                setMacaroons(all);
              }}
            />
  
            {macaroons[selectedMacaroonIndex]?.fillingKind?.buttonId &&
              fillingFlavorsByKind[macaroons[selectedMacaroonIndex].fillingKind.buttonId] && (
                <StepRow
                  stepNumber="Krok 2.1"
                  stepDescription="Wybierz smak nadzienia"
                  buttons={fillingFlavorsByKind[macaroons[selectedMacaroonIndex].fillingKind.buttonId]}
                  selectedButton={macaroons[selectedMacaroonIndex].fillingFlavor}
                  setButton={(val) => updateMacaroon("fillingFlavor", val)}
                />
            )}
  
            <StepRow
              stepNumber="Krok 3"
              stepDescription="Wybierz rodzaj kremu"
              buttons={creamKinds}
              selectedButton={macaroons[selectedMacaroonIndex].creamKind}
              setButton={(val) => updateMacaroon("creamKind", val)}
            />
  
            {macaroons[selectedMacaroonIndex].creamKind && (
              <StepRow
                stepNumber="Krok 3.1"
                stepDescription="Wybierz kolor kremu"
                buttons={creamColors}
                selectedButton={macaroons[selectedMacaroonIndex].creamColor}
                setButton={(val) => updateMacaroon("creamColor", val)}
              />
            )}
          </div>
        )}
  
  <div className={styles.clientDataContainer}>
    <h2 className={styles.clientDataTitle}>Podaj swoje dane, abyśmy mogli się skontaktować</h2>
    <input className={styles.clientDataInput} type="text" placeholder="Imię" value={clientName} onChange={(e) => setClientName(e.target.value)} />
    <input className={styles.clientDataInput} type="text" placeholder="Nazwisko" value={clientSurname} onChange={(e) => setClientSurname(e.target.value)} />
    <input className={styles.clientDataInput} type="email" placeholder="Email" value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} />
    <input className={styles.clientDataInput} type="tel" placeholder="Telefon" value={clientPhone} onChange={(e) => setClientPhone(e.target.value)} />
    </div>

      <button className={styles.submitButton} onClick={submitMacaroonOrder}>Wyślij zamówienie</button>
      </div>
    );
  };
  


export default OrderForm;
