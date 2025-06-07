import styles from "./stepRow.module.css";
import Button from "../Button/button";

const StepRow = ({ buttons, stepNumber, stepDescription, type, selectedButton, setButton}) => {
    const rowType = (type) => {
        switch(type) {
            case "rectangledButtons":
                return <RowWithRectangledButtons buttons={buttons}
                stepNumber={stepNumber}
                stepDescription={stepDescription} />;
    
            default:
                return <RowWithRoundedButtons buttons={buttons}
                stepNumber={stepNumber}
                stepDescription={stepDescription} selectedButton={selectedButton} setButton={setButton}/>;
        }
    };

    return (<div>
        {rowType(type)}
    </div>);
};

const RowWithRectangledButtons = ({buttons, stepNumber, stepDescription}) => {


    return(<div className={styles.rowContainer}>
        <div className={styles.stepDescriptionContainer}>

            <p className={styles.stepDescriptionTitle}>{stepNumber}</p>
            <p className={styles.stepDescriptionText}>{stepDescription}</p>
            
        </div>
        <div className={styles.buttonsRow}>
        {buttons?.map((button, index) =>
            <Button
            key={index}
            type = {button.type}
            label = {button.label}
            routePath = {button.routePath}
            src = {button.src}
            onClick = {button.onClick}
            state = {button.state}
            buttonId = {button.buttonId}
            buttonSize={button.buttonSize}
            />
        )}
        </div>
    </div>);
};

const RowWithRoundedButtons = ({buttons, stepNumber, stepDescription, selectedButton, setButton}) => {
    return ( <div className={styles.rowContainer}>
        <div className={styles.stepDescriptionContainer}>

            <p className={styles.stepDescriptionTitle}>{stepNumber}</p>
            <p className={styles.stepDescriptionText}>{stepDescription}</p>
            
        </div>
        <div className={styles.buttonsRow}>
        {buttons?.map((button, index) =>
            <Button
            key={index}
            type = {button.type}
            label = {button.label}
            routePath = {button.routePath}
            src = {button.src}
            onClick = {button.onClick}
            state = {button.state}
            buttonData={button}
            buttonId={button.buttonId}
            buttonSize={button.buttonSize}
            selectedButton = {selectedButton}
            setButton = {setButton}
            />
        )}
        </div>
    </div>);
};

export default StepRow;
