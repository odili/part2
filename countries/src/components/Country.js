import React from 'react';

const Country = ({ name, handleShow }) => {
  return (
    <p>
      {name}
      <button type="button" value={name} onClick={handleShow}>
        show
      </button>
    </p>
  );
};

export default Country;

// numericCode
