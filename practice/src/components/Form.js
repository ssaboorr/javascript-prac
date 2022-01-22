import { useRef, useState } from "react";
const Form = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState(null);
  const [username, setUsername] = useState("Enter Your Username here");
  const [password, setPassword] = useState("");

  const SubmitForm = (e) => {
    e.preventDefault();
    // console.log("Form Submitted");
    // console.dir(e.target[0].value)
    // console.dir(e.target[1].value)
    // console.dir(e.target.elements)

    // const { username, password } = e.target.elements;

    // console.dir(username.value);
    // console.dir(password.value);
    console.log(usernameRef.current.value);
    console.log(passwordRef.current.value);

    // const ChangeHandler = (e) => {
    //     const {value} = e.target
    //     const inLowerCase = value === value.toLowerCase()
    //     setError(inLowerCase ? null:"Username should be in lower case")

    // }

    // const userChangeHandler = (e) => {
    //     const {value} = e.target
    //     setUsername(value.toLowerCase())

    // }
  };
  const PasswordChangeHandler = (e) => {
    const { value } = e.target;
    setPassword(value.toLowerCase());
    if (password === "ctt") {
      setError("Login Successfull");
    } else {
      setError("Login Faild");
    }
  };

  return (
    <form onSubmit={(e) => SubmitForm(e)}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          onChange={(e) => e.target.value.toLowerCase()}
          ref={usernameRef}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          name="username"
          id="username"
          value={username}
        />
      </div>
      <div>
        <br />
        <label htmlFor="password">Password:</label>
        <input
          ref={passwordRef}
          type="password"
          name="password"
          id="password"
          onChange={(e) => PasswordChangeHandler(e)}
          value={password}
        />
        <small style={{ color: "red", fontWeight: "bold" }}>{error}</small>
      </div>
      <input disabled={Boolean(error)} type="submit" value="submit Form" />
    </form>
  );
};

export default Form;
