import { useContext, useRef, useState } from "react"
import { useNavigate } from "react-router";
import { CustomerContext } from "../customer/CustomerProvider";

export const Register = () => {
  const navigate = useNavigate();
  const existDialog = useRef();
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    id: 0
  });
  const { addCustomer } = useContext(CustomerContext);

  const updateCustomer = e => {
    const updatedCustomer = {...customer}
    updatedCustomer[e.target.id] = e.target.value;
    setCustomer(updatedCustomer);
  }

  const userExists = () => {
    return fetch(`http://localhost:8088/customers?email=${customer.email}`)
    .then(res => res.json())
    .then(user => user.length ? user[0] : false);
  }

  const handleSubmit = e => {
    e.preventDefault();
    userExists().then(userExists => {
      if (userExists) {
        existDialog.current.showModal();
      } else {
        addCustomer(customer).then(newUser => {
          localStorage.setItem('thorns_roses_customer', newUser.id);
          navigate('/');
        })
      }
    });
  }

  return (
    <>
      <dialog ref={existDialog}>
        <div>Email is taken choose a different email</div>
        <button onClick={() => existDialog.current.close()}>Close</button>
      </dialog>
      <form onSubmit={handleSubmit}>
        <h2>Thorns & Roses</h2>
        <h3>Create New Account</h3>
        <fieldset>
          <label>Name: </label>
          <input type="text"  id="name"  onChange={updateCustomer} />
        </fieldset>
        <fieldset>
          <label>Email: </label>
          <input type="email" id="email" onChange={updateCustomer} />
        </fieldset>
        <button>Register</button>
      </form>
    </>
  );
}