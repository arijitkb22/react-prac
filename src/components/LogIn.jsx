import React, { useRef, useState } from "react";

export default function LogIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setusers] = useState([]);
  // const email = useRef("");
  // const password = useRef("");

  const handleOnClick = () => {
    if (isRegistered == false) {
      const newUser = { email, password };
      setusers([...users, newUser]);
      localStorage.setItem("users", JSON.stringify([...users, newUser]));
      setIsRegistered(true);
      console.log("registered successfully, logIn to continue");
      alert("registered successfully, logIn to continue");
    } else {
      const userLists = JSON.parse(localStorage.getItem("users"));
      console.log(userLists);
      let user = userLists.find((o) => o.email === email);
      if (user) {
        if (user.password === password) {
          setIsLoggedIn(true);
          console.log("Successfully LoggedIn");
          alert("Successfully LoggedIn");
        } else {
          console.log("Wrong Password");
          alert("Wrong Password");
        }
      } else {
        console.log("userName not found");
        alert("userName not found");
      }
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome, {email.split("@")[0]}</h2>
          <button onClick={() => setIsLoggedIn(false)}>Log Out</button>
        </div>
      ) : (
        <div>
          <h2>{isRegistered ? "Log In" : "Register"}</h2>
          <form>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
            />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
            <button onClick={handleOnClick}>
              {isRegistered ? "Log In" : "Register"}
            </button>
          </form>
          <div>
            {!isRegistered ? (
              <p>
                Already registered? click here to{" "}
                <a href="#" onClick={() => setIsRegistered(true)}>
                  logIn
                </a>
              </p>
            ) : (
              <p>
                Don't have an account? click here to{" "}
                <a href="#" onClick={() => setIsRegistered(false)}>
                  Register
                </a>
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
