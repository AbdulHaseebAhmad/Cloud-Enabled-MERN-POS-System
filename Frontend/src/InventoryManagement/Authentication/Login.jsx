import { useState } from "react";
import { redirect, useSubmit } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

export default function Login() {
  const [formdata, setFormdata] = useState({ username: "", password: "" });
  // const apiUrl = process.env.REACT_APP_BACKEND_API_URL;
  //console.log(apiUrl);
  const submit = useSubmit();
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({ ...prev, [name]: value }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    submit(formdata, {
      method: "POST",
      acion: "/login",
      encType: "application/json",
    });
  };
  return (
    <div className="bg-d-primary-bg-color flex items-center justify-center min-h-screen text-d-primary-text-color">
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
  const loginData = await request.json();
  axios
    .post(`http://localhost:5000/api/authenticate/login`, loginData)
    .then((response) => {
      Cookies.set("token", response.data.token, {
        expires: 3,
        path: "/",
        secure: true,
        sameSite: "Strict",
      });
    })
    .catch((error) => {
      console.error("Error creating data:", error);
    });
  return null;
};

export const loginLoader = () => {
  if (Cookies.get("token")) {
    return redirect("/inventory-management");
  } 
  return null;

};
