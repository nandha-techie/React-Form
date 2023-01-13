import { useState } from 'react';
import FormInputs from './components/FormInputs'
import './App.css';

function App() {
  const [values, setValues ] = useState({
    username: '',
    email: '',
    password: '',
    confirmedPassword: '',
    birthday: '',
  });
  
  const inputs = [
        {
          id: 1,
          name: 'username',
          placeholder: 'Username',
          label:'Username',
          type: 'text',
          errormessage: "Username should be 3-16 characters and shouldn't include any special character!",
          pattern: "^[A-Za-z0-9]{3,16}$",
          required: true,
        },
        {
          id:2,
          name: 'email',
          placeholder: 'Email',
          type: 'email',
          errormessage: "It should be a valid email address!",
          label: "Email",
          required: true,
        },
        {
          id: 3,
          name: "birthday",
          type: "date",
          placeholder: "Birthday",
          label: "Birthday",
          required: true,
          errormessage: 'Date required'
        },
        {
          id: 4,
          name: 'password',
          placeholder: 'Password',
          type: 'password',
          errormessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
          label: "Password",
          pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
          required: true,
        },
        {
          id: 5,
          name: 'confirmedPassword',
          placeholder: 'Confirmed Password',
          type: 'password',
          errormessage: "Passwords don't match!",
          label: "Confirm Password",
          pattern: values.password,
          required: true,
        }
    ];

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const onChange = (e)=> {
    setValues( {...values,  [e.target.name]: e.target.value });
  }
  
  return (
    <div className="App">
      <form className="register" onSubmit={ handleSubmit }>
      <h2>Register</h2>
        { inputs.map((input) => (
          <FormInputs key={ input.id } {...input } value={ values[input.name] } onChange={ onChange } ></FormInputs>
        ))}
        <button type='submit'>Submit</button>
      </form>  
    </div>
  );
}

export default App;
