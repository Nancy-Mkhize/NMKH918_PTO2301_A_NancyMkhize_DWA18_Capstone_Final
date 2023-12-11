import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../supabaseClient";

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            name: formData.name,
            surname: formData.surname,
          },
        },
      });
      if (error) throw error;
      alert("Check your email for a verification link.");
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex flex-col justify-content-center align-items-center border border-black rounded p-4"
    >
      <input
        className="form-control m-2 border rounded-lg"
        type="text"
        name="name"
        placeholder="Name"
        required
        onChange={handleChange}
      />

      <input
        className="form-control m-2 border rounded-lg"
        type="text"
        name="surname"
        placeholder="Surname"
        required
        onChange={handleChange}
      />

      <input
        className="form-control m-2 border rounded-lg"
        type="email"
        name="email"
        placeholder="Email"
        required
        onChange={handleChange}
      />

      <input
        className="form-control m-2 border rounded-lg"
        type="password"
        name="password"
        placeholder="Password"
        required
        onChange={handleChange}
      />

      <button className="btn btn-primary btn-lg w-95 m-2" type="submit">
        Sign Up
      </button>
      <p className="text-black">
        Already have an account?{" "}
        <Link to="/signin" className="underline text-light">
          Sign In
        </Link>
      </p>
    </form>
  );
}
