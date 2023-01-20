import './FormInput.styles.scss'

const FormInput = ({label, ...otherProps}) => {
  return (
    <div className="group">
    <input className="form-input"{ ...otherProps} />
    <label className={`${otherProps.value.lenght ? 'shrink' : ''} form-input-label`}>{label}</label> 
    </div>
  );
}

export default FormInput