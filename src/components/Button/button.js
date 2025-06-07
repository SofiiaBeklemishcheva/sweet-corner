import styles from "./button.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Button = ({ type, label, routePath, src, onClick, state, buttonId, selectedButton, setButton, buttonSize }) => {
    
    const buttonTypeSwitch = (type) => {
        switch(type) {
            case "nav":
                return <NavigationButton label={label} routePath={routePath} />;
            case "green":
                return <GreenButton label={label} routePath={routePath} />;
            case "desertType":
                return <DerertTypeButton label={label} src={src} onClick={onClick} state={state} buttonId={buttonId}/>;
            case "cakeFilling":
                return <DerertTypeButtonRounded label={label} src={src} onClick={onClick} state={state} buttonId={buttonId} selectedButton={selectedButton} setButton={setButton} buttonSize={buttonSize}/>;
            case "rectangled":
                return <RectangledButton label={label} src={src} onClick={onClick} state={state} buttonId={buttonId}/>; 
            default:
                return null;
        }
    };

    return (
        <div>
            {buttonTypeSwitch(type)}
        </div>
    );
};

const NavigationButton = ({ label, routePath }) => (
    <Link to={routePath} className={styles.buttonContainer}>
        <p className={styles.buttonLabel}>{label}</p>
    </Link>
);

const GreenButton = ({label, routePath}) => {
    return(
            <Link to={routePath} className={styles.greenButtonContainer}>
                <p className={styles.greenButtonLabel}>{label}</p>
            </Link>
    );
};

const DerertTypeButton = ({label, src, onClick, state, buttonId}) => {
    const setButtonStyle = (state) => {
        if (state === 1) {
            return styles.activeButton;
        } else {
            return styles.desertKindButton;
        }
    };
    
    return(
            <button className={styles.desertKindButtonContainer} onClick={onClick}>
                <div className={setButtonStyle(state)}>
                    <img className={styles.desertKindButtonImg} src={src} alt={label}/>
                </div>
            </button>
    );
};

const DerertTypeButtonRounded = ({label, src, onClick, buttonId, buttonSize, state, selectedButton, setButton}) => {
    console.log('selectedButton:', selectedButton, 'buttonId:', buttonId);

    const setButtonStyle = () => {
        const isActive = selectedButton?.buttonId === buttonId;
        const isSmall = buttonSize === "small";
      
        if (isActive && isSmall) return styles.activeButtonRoundedSmall;
        if (isActive) return styles.activeButtonRounded;
        if (isSmall) return styles.desertKindSmallButtonRounded;
        return styles.desertKindButtonRounded;
      };
      
      
    return(
            <button className={buttonSize === "small" ? styles.desertKindSmallButtonContainer : styles.desertKindButtonContainerRounded} id={buttonId} onClick={() => setButton({ label, src, buttonId, buttonSize })}>
                <div className={setButtonStyle()}>
                    <div className={buttonSize === "small" ? styles.buttonRoundedInnerSmallContainer : styles.buttonRoundedInnerContainer}>
                        <img className={buttonSize === "small" ? styles.desertKindSmallButtonImg : styles.desertKindButtonImgRounded} src={src} alt={label}/>
                    </div>
                </div>
                <div className={buttonSize === "small" ? styles.smallRoundedButtonLabel : styles.roundedButtonLabel}>{label}</div>
            </button>
    );
};

    const RectangledButton = ({}) => {
        return(<div>
            
        </div>);
    };
export default Button;
