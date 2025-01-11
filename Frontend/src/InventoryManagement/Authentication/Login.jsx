import { useEffect, useState } from "react";
import { redirect, useSubmit, useActionData } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Login() {
  const toastConfig = {position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",}
  const [formdata, setFormdata] = useState({ username: "", password: "" });
  const submit = useSubmit();
  let errormessage = useActionData(loginAction);
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({ ...prev, [name]: value }));
  };
  useEffect(() => {
    if (errormessage !== undefined) {
      toast.error(errormessage.error, toastConfig);
    }
    errormessage = undefined;
  }, [errormessage]);

  const submitHandler = (e) => {
    e.preventDefault();
    if(formdata.username === "" || formdata.password === "") {
      toast.error("Please fill in all the fields!", toastConfig);}
     else{
       toast("Signing in!", toastConfig);
      submit(formdata, {
        method: "POST",
        action: "/login",
        encType: "application/json",
      });
     }
    }
  ;

  return (
    <div className="bg-d-primary-bg-color flex items-center justify-center min-h-screen text-d-primary-text-color">
      <ToastContainer />
      <div className="bg-d-secondary-bg-color p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-6 text-d-primary-text-color">
          Login
        </h2>

        <form className="space-y-4" onSubmit={submitHandler}>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-d-secondary-text-color"
            >
              Username
            </label>
            <input
              onChange={onChangeHandler}
              type="username"
              id="username"
              name="username"
              placeholder="Enter your username"
              className="w-full mt-1 p-2 rounded border border-d-primary-border-color bg-d-primary-bg-color text-d-primary-text-color focus:ring-2 focus:ring-d-primary-action-color focus:outline-none"
              // required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-d-secondary-text-color"
            >
              Password
            </label>
            <input
              onChange={onChangeHandler}
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full mt-1 p-2 rounded border border-d-primary-border-color bg-d-primary-bg-color text-d-primary-text-color focus:ring-2 focus:ring-d-primary-action-color focus:outline-none"
              // required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-d-primary-action-color text-white py-2 rounded font-semibold hover:bg-orange-600 focus:ring-2 focus:ring-offset-1 focus:ring-d-primary-action-color"
          >
            Log In
          </button>
        </form>

        <p className="text-sm text-center text-d-secondary-text-color mt-4">
          Don&apos;t have an account?{" "}
          <a
            href="/signup"
            className="text-d-primary-action-color hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export const loginAction = async ({ request }) => {
  try {
    const loginData = await request.json();
    const response = await axios.post(
      "http://localhost:5000/api/authenticate/login",
      loginData
    );
    Cookies.set("token", response.data.token, {
      expires: 1/24,
      path: "/",
      secure: true,
      sameSite: "Strict",
    });
    return redirect("/inventory-management");
  // eslint-disable-next-line no-unused-vars
  } catch (error) {
    return { error: "Login failed. Please check your credentials." };
  }
};

export const loginLoader = () => {
  if (Cookies.get("token")) {
    return redirect("/inventory-management")}
  return null;
};
