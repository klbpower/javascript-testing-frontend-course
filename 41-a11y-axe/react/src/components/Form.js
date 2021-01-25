import { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.submit({ name, email });
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <strong>Name:</strong>
        <input type="text" onChange={(ev) => setName(ev.target.value)} />
      </div>

      <div>
        <strong>Email:</strong>
        <input type="email" onChange={(ev) => setEmail(ev.target.value)} />
      </div>

      <button type="submit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z" />
        </svg>
      </button>
    </form>
  );
}

export default Form;
