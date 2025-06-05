import styles from "./inputComponent.module.css";

const InputComponent = ({ type, options = [], name, value, onChange, label, required = false }) => {
    const inputTypeSwitch = (type) => {
        switch (type) {
            case "select":
                return <Select placeholder={label} options={options} name={name} value={value} onChange={onChange} required={required}/>;
            case "checkbox":
                return <Checkbox label={label} name={name} checked={value} onChange={onChange} required={required}/>;
            case "textarea":
                return <Textarea placeholder={label} name={name} value={value} onChange={onChange} required={required}/>;
            case "phone":
            case "email":
            case "text":
                return <TextInput placeholder={label} type={type} name={name} value={value} onChange={onChange} required={required}/>;
            default:
                return <div>Nieobsługiwany typ inputa</div>;
        }
    };

    return (
        <div className={styles.inputContainer}>
            {inputTypeSwitch(type)}
        </div>
    );
};

const TextInput = ({ type, name, value, onChange, placeholder, required }) => (
    <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={styles.input}
        required={required}
    />
);

const Checkbox = ({ label, name, checked, onChange, required }) => (
    <label className={styles.checkboxWrapper}>
      <input
        type="checkbox"
        name={name}
        checked={checked || false}
        onChange={(e) => onChange(e.target.checked)}
        className={styles.hiddenCheckbox}
        required={required}
      />
      <span className={styles.customCheckbox}></span>
      <span>{label}</span>
    </label>
  );
  

const Textarea = ({ name, value, onChange, placeholder, required }) => (
    <textarea
        name={name}
        id={name}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={styles.textarea}
    />
);

const Select = ({ name, value, onChange, options, placeholder, required }) => (
    <select
        name={name}
        id={name}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className={styles.select}
    >
        <option value="">{placeholder || "Wybierz..."}</option>
        {options.map((option, index) => (
            <option key={index} value={option.value}>{option.label}</option>
        ))}
    </select>
);

export default InputComponent;
