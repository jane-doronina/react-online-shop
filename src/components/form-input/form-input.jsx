import "./form-input.scss"

const InputField = ({label, ...otherProps}) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps}/>
      <label className={`form-input-label ${otherProps.value.length > 0 ? "shrink" : ""}`}>{label}</label>
    </div>
  );
};

export default InputField;
