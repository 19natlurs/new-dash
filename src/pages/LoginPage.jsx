import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, logout } from "../redux/authRedux";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();
  const authRdx = useSelector((state) => state.authRedux);

  const navigate = useNavigate();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const updateAuthState = () => {
    setIsLogin(!isLogin);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    let url;

    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCecc4pyTX35ULoGSGrzZYeTKDVkKO1E8E";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCecc4pyTX35ULoGSGrzZYeTKDVkKO1E8E";
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            console.log(data);
            let errorMessage = "Authentication Failed!";

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data);

        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );

        // const initialToken = localStorage.getItem("token");
        localStorage.setItem("token", data.idToken);

        dispatch(increment({ tokenData: data.idToken }));

        console.log(authRdx.token);

        navigate("/profile");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    // authRdx will reflect the latest value after the dispatch
    console.log(authRdx);
    console.log(authRdx.isLoggedIn);
  }, [authRdx]);

  return (
    <div className=" bg-gray-800 h-screen p-10 flex justify-center items-center">
      <div className=" bg-gray-500 h-96 w-80 flex flex-col  items-center">
        <h1 className=" font-semibold mb-6 mt-3 text-2xl ">
          {isLogin ? "Login" : "Sign up"}{" "}
        </h1>
        <form
          onSubmit={submitHandler}
          className=" h-72 flex flex-col items-center w-full p-5"
        >
          <div className="w-full ">
            <div className="mb-1 font-medium  ">Email</div>
            <input
              type="text"
              placeholder="enter email"
              required
              ref={emailInputRef}
              className=" w-full rounded-sm mb-3 focus:outline-none h-10 px-2"
            />
          </div>

          <div className="w-full">
            <div className=" mb-1 font-medium"> Password</div>
            <input
              type="password"
              placeholder="enter your password"
              required
              ref={passwordInputRef}
              className=" w-full rounded-sm mb-3 px-2 focus:outline-none h-10"
            />
          </div>
          <button> {isLogin ? "Login" : "Create Account"}</button>
          <button onClick={updateAuthState}>
            {isLogin
              ? "Create a new account"
              : " Login with an existing account"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
