import React, { useState } from "react";

const User = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <form>
      <input
        type="text"
        value={name.firstName}
        onChange={(event) => {
          setName({ ...name, firstName: event.target.value });
        }}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(event) => {
          setName({ ...name, lastName: event.target.value });
        }}
      />

      <h2>Your first name is - {name.firstName}</h2>
      <h2>Your last name is - {name.lastName}</h2>
      <h2>{JSON.stringify(name, null, 2)}</h2>
    </form>
  );
};

export default User;
