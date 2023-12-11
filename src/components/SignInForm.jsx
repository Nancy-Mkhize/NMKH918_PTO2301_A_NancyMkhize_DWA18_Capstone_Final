import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../supabaseClient";
import { AuthContext } from "../hooks/AuthContext";

const SignInForm = () => {
  const [auth, setAuth] = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) throw error;
      navigate("/", { replace: true });
      setAuth(data);
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
    <form onSubmit={handleSubmit} className="d-flex flex-column justify-content-center align-items-center border-black border-2">
      <input
        className="form-control m-2 border border-black rounded-lg"
        type="email"
        name="email"
        placeholder="Email"
        autoComplete="on"
        required
        onChange={handleChange}
      />

      <input
        className="form-control m-2 border border-black rounded-lg"
        type="password"
        name="password"
        placeholder="Password"
        autoComplete="on"
        required
        onChange={handleChange}
      />

      <button className="btn btn-light bg-white btn-lg w-100 m-2" type="submit">
        Sign In
      </button>
      <p className="text-light">
        Don't have an account?{" "}
        <Link to="/signup" className="underline text-black">
          Sign Up
        </Link>
      </p>
    </form>
  );
};

export default SignInForm;
