import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const existDialog = useRef();
  const navigate = useNavigate();

  const userExists = () => {
    return fetch(`http://localhost:8088/customers?email=${email}`)
    .then(res => res.json())
    .then(user => user.length ? user[0] : false);
  }

  const handleSubmit = e => {
    e.preventDefault();
    userExists().then(userExists => {
      if (userExists) {
        localStorage.setItem("thorns_roses_customer", userExists.id);
        navigate('/');
      } else {
        existDialog.current.showModal();
      }
    });
  }

  return (
    <>
      <dialog ref={existDialog}>
        <div>User does not exist</div>
        <button onClick={() => existDialog.current.close()}>Close</button>
      </dialog>
      <form onSubmit={handleSubmit}>
        <h2>Thorns & Roses</h2>
        <h3>Login</h3>
        <input onChange={(e) => setEmail(e.target.value)} type="email" />
        <button>Login</button>
      </form>
      <div>
        Don't have an account? &nbsp;
        <Link to="/register" >Register</Link>
      </div>
    </>
  );
}