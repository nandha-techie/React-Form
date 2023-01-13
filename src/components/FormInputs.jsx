import { useState } from 'react';
import './formInputs.css'

const FormInputs = (props) => {
    const [focused, setFocused ] = useState(false);
    const {  errormessage, onChange, id, ...inputProps } = props;
    
    const handleFocus = () => {
        setFocused(true)
    }

    return (
        <div className="formInput">
            <label>{ props.label }</label>
            <input { ...props } onChange={ props.onChange } focused={ focused.toString() } onBlur={handleFocus} onFocus={() =>
            inputProps.name === "confirmPassword" && setFocused(true) } />
            <span>{ errormessage }</span>
        </div>
    );
};

export default FormInputs; 