import { useRef, useState } from 'react';

const Form = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState(null);

  const [username, setUsername] = useState('hello world');
  const [password, setPassword] = useState('');

  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   // console.dir(event.target);
  //   // console.dir(event.target[0].value);
  //   // console.dir(event.target[1].value);
  //   // const { username, password } = event.target.elements;
  //   // console.log(username.value);
  //   // console.log(password.value);
  //   // console.log(usernameRef.current.value);
  //   // console.log(passwordRef.current.value);
  // };

  // const changeHandler = (event) => {
  //   const { value } = event.target;
  //   const isLowerCase = value === value.toLowerCase();
  //   setError(isLowerCase ? null : 'Username needs to be all lowercase');
  // };

  // const changeHandler = (e) => {
  //   const { value } = e.target;
  //   setUsername(value.toLowerCase());
  // };

  const passwordChangeHandler = (e) => {
    const { value } = e.target;
    setPassword(value.toLowerCase());
    if (password.length < 8) {
      setError('Password should be min 8 chars');
    } else {
      setError(null);
    }
  };

  const submitHandler = () => {};

  return (
    <form onSubmit={(event) => submitHandler(event)}>
      <div>
        <label htmlFor='username'>Username:</label>
        <input
          ref={usernameRef}
          name='username'
          id='username'
          type='text'
          onChange={(e) => setUsername(e.target.value.toLowerCase())}
          value={username}
        />
      </div>
      <div>
        <label htmlFor='password'>Password:</label>
        <input
          ref={passwordRef}
          name='password'
          type='password'
          onChange={(e) => passwordChangeHandler(e)}
          value={password}
        />
        <br />
        <small style={{ color: 'red', fontWeight: 'bold' }}>{error}</small>
      </div>
      <input disabled={Boolean(error)} type='submit' value='Submit Form' />
    </form>
  );
};

export default Form;
