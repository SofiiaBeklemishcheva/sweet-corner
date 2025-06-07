import styles from "./orderForm.module.css";
import StepRow from "../StepRow/stepRow.js";
import { useState } from "react";

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
  const [fillingFlavor, setFillingFlavor] = useState(null); // Nowy
  const [creamColor, setCreamColor] = useState(null); // Nowy
  const [creamFlavor, setCreamFlavor] = useState(null); // Nowy

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
      email: "sweeetcornerr@gmail.com",
    };

    fetch("http://localhost:5134/api/MailsSending/cake", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData)
    })
      .then(res => res.json())
      .then(data => alert("Zamówienie wysłane!"))
      .catch(err => console.error("Błąd przy wysyłce:", err));
  };

  const flavors = [
    {
      type: "cakeFilling",
      label: "Wanilia",
      src: "../assets/flavors/vanilla.png", // możesz podmienić na faktyczne pliki
      buttonId: "vanilla",
      style: "small"
    },
    {
      type: "cakeFilling",
      label: "Czekolada",
      src: "../assets/flavors/chocolate.png",
      buttonId: "chocolate",
      style: "small"
    },
    {
      type: "cakeFilling",
      label: "Truskawka",
      src: "../assets/flavors/strawberry.png",
      buttonId: "strawberry",
      style: "small"
    }
  ];
  
  const colors = [
    {
      type: "cakeFilling",
      label: "Biały",
      src: "../assets/colors/white.png",
      buttonId: "white",
      style: "small"
    },
    {
      type: "cakeFilling",
      label: "Różowy",
      src: "../assets/colors/pink.png",
      buttonId: "pink",
      style: "small"
    },
    {
      type: "cakeFilling",
      label: "Niebieski",
      src: "../assets/colors/blue.png",
      buttonId: "blue",
      style: "small"
    }
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
        stepNumber= {"Krok 2"}
        stepDescription= {"Wybierz rodzaj nadzienia"}
        buttons={fillingKinds}
        selectedButton={fillingKind}
        setButton={setFillingKind}
        />
         {fillingKind && (
        <StepRow
          stepNumber="Krok 2.1"
          stepDescription="Wybierz smak nadzienia"
          buttons={flavors}
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

      <button onClick={submitOrder}>Wyślij zamówienie</button>
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
    
      const updateCupcake = (field, value) => {
        const updated = [...cupcakes];
        updated[selectedCupcakeIndex] = {
          ...updated[selectedCupcakeIndex],
          [field]: value
        };
        setCupcakes(updated);
      };
    
      const spongeColors = [
        { type: "cakeFilling", label: "Jasny", src: "../assets/cupcakesColors/cupcake (1).png", buttonId: "lightColor", style: "small" },
        { type: "cakeFilling", label: "Ciemny", src: "../assets/cupcakesColors/cupcake (2).png", buttonId: "darkColor", style: "small" },
        { type: "cakeFilling", label: "Ciemny", src: "../assets/cupcakesColors/cupcake (brown).png", buttonId: "darkColor", style: "small" },
        { type: "cakeFilling", label: "Ciemny", src: "../assets/cupcakesColors/cupcake (green).png", buttonId: "darkColor", style: "small" },
        { type: "cakeFilling", label: "Ciemny", src: "../assets/cupcakesColors/cupcake (navy-blue).png", buttonId: "darkColor", style: "small" },
        { type: "cakeFilling", label: "Ciemny", src: "../assets/cupcakesColors/cupcake (purple).png", buttonId: "darkColor", style: "small" },
        { type: "cakeFilling", label: "Ciemny", src: "../assets/cupcakesColors/cupcake (red).png", buttonId: "darkColor", style: "small" },
        { type: "cakeFilling", label: "Ciemny", src: "../assets/cupcakesColors/cupcake (rose).png", buttonId: "darkColor", style: "small" },
        { type: "cakeFilling", label: "Ciemny", src: "../assets/cupcakesColors/cupcake (turcus).png", buttonId: "darkColor", style: "small" },
        { type: "cakeFilling", label: "Ciemny", src: "../assets/cupcakesColors/cupcake orange.png", buttonId: "darkColor", style: "small" }
      ];
    
      const fillingKinds = [
        {type: "cakeFilling", label: "Konfitura owocowa", src: "../assets/fillingKind/jam.png", buttonId: "jam", style: "small" },
        {type: "cakeFilling", label: "Masa smakowa", src: "../assets/fillingKind/whip-cream.png", buttonId: "flavored", style: "small" },
      ];
    
      const fillingFlavorsByKind = {
        jam: [
          { type: "cakeFilling",  label: "Truskawka", src: "../assets/flavors/strawberry.png", buttonId: "strawberry", style: "small" },
          { type: "cakeFilling",  label: "Malina", src: "../assets/flavors/raspberry.png", buttonId: "raspberry", style: "small" }
        ],
        flavored: [
          { type: "cakeFilling",  label: "Kinder", src: "../assets/flavors/kinder.png", buttonId: "kinder", style: "small" },
          { type: "cakeFilling",  label: "Orzech", src: "../assets/flavors/nut.png", buttonId: "nut", style: "small" }
        ]
      };
    
      const creamKinds = [
        { type: "cakeFilling",  label: "Maślany", src: "../assets/creamKind/butterCream.jpg", buttonId: "butter", style: "small" },
        { type: "cakeFilling",  label: "Śmietankowy", src: "../assets/creamKind/cream.jpg", buttonId: "cream", style: "small" }
      ];
    
      const creamColors = [
        { type: "cakeFilling",  label: "Biały", src: "../assets/colors/white.png", buttonId: "white", style: "small" },
        { type: "cakeFilling",  label: "Różowy", src: "../assets/colors/pink.png", buttonId: "pink", style: "small" }
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
          email: "sweeetcornerr@gmail.com",
        }));
    
        fetch("http://localhost:5134/api/MailsSending/cupcake", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formatted)
        })
          .then(res => res.json())
          .then(() => alert("Zamówienie wysłane!"))
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
    
          <button onClick={submitCupcakeOrder} style={{ marginTop: "20px" }}>
            Wyślij zamówienie
          </button>
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
          email: "sweeetcornerr@gmail.com",
        }));
    
        fetch("http://localhost:5134/api/MailsSending/macaroon", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formatted)
        })
          .then(res => res.json())
          .then(() => alert("Zamówienie wysłane!"))
          .catch(err => console.error("Błąd:", err));
      };

      const spongeColors = [
        { type: "cakeFilling", label: "Jasny", src: "../assets/cupcakesColors/cupcake (1).png", buttonId: "lightColor", style: "small" },
        { type: "cakeFilling", label: "Ciemny", src: "../assets/cupcakesColors/cupcake (2).png", buttonId: "darkColor", style: "small" },
        { type: "cakeFilling", label: "Ciemny", src: "../assets/cupcakesColors/cupcake (brown).png", buttonId: "darkColor", style: "small" },
        { type: "cakeFilling", label: "Ciemny", src: "../assets/cupcakesColors/cupcake (green).png", buttonId: "darkColor", style: "small" },
        { type: "cakeFilling", label: "Ciemny", src: "../assets/cupcakesColors/cupcake (navy-blue).png", buttonId: "darkColor", style: "small" },
        { type: "cakeFilling", label: "Ciemny", src: "../assets/cupcakesColors/cupcake (purple).png", buttonId: "darkColor", style: "small" },
        { type: "cakeFilling", label: "Ciemny", src: "../assets/cupcakesColors/cupcake (red).png", buttonId: "darkColor", style: "small" },
        { type: "cakeFilling", label: "Ciemny", src: "../assets/cupcakesColors/cupcake (rose).png", buttonId: "darkColor", style: "small" },
        { type: "cakeFilling", label: "Ciemny", src: "../assets/cupcakesColors/cupcake (turcus).png", buttonId: "darkColor", style: "small" },
        { type: "cakeFilling", label: "Ciemny", src: "../assets/cupcakesColors/cupcake orange.png", buttonId: "darkColor", style: "small" }
      ];
    
      const fillingKinds = [
        {type: "cakeFilling", label: "Konfitura owocowa", src: "../assets/fillingKind/jam.png", buttonId: "jam", style: "small" },
        {type: "cakeFilling", label: "Masa smakowa", src: "../assets/fillingKind/whip-cream.png", buttonId: "flavored", style: "small" },
      ];
    
      const fillingFlavorsByKind = {
        jam: [
          { type: "cakeFilling",  label: "Truskawka", src: "../assets/flavors/strawberry.png", buttonId: "strawberry", style: "small" },
          { type: "cakeFilling",  label: "Malina", src: "../assets/flavors/raspberry.png", buttonId: "raspberry", style: "small" }
        ],
        flavored: [
          { type: "cakeFilling",  label: "Kinder", src: "../assets/flavors/kinder.png", buttonId: "kinder", style: "small" },
          { type: "cakeFilling",  label: "Orzech", src: "../assets/flavors/nut.png", buttonId: "nut", style: "small" }
        ]
      };
    
      const creamKinds = [
        { type: "cakeFilling",  label: "Maślany", src: "../assets/creamKind/butterCream.jpg", buttonId: "butter", style: "small" },
        { type: "cakeFilling",  label: "Śmietankowy", src: "../assets/creamKind/cream.jpg", buttonId: "cream", style: "small" }
      ];
    
      const creamColors = [
        { type: "cakeFilling",  label: "Biały", src: "../assets/colors/white.png", buttonId: "white", style: "small" },
        { type: "cakeFilling",  label: "Różowy", src: "../assets/colors/pink.png", buttonId: "pink", style: "small" }
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
            <label>Ilość:
              <input
                type="number"
                min="1"
                value={macaroons[selectedMacaroonIndex].quantity}
                onChange={(e) =>
                  updateMacaroon("quantity", parseInt(e.target.value) || 1)
                }
                style={{ marginLeft: "10px", width: "60px" }}
              />
            </label>
  
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
  
        <button onClick={submitMacaroonOrder} style={{ marginTop: "20px" }}>
          Wyślij zamówienie
        </button>
      </div>
    );
  };
  


export default OrderForm;
