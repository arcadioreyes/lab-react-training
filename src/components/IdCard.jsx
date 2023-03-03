import React from 'react';

function IdCard(props) {
  return (
    <div className="IdCard">
      <p>Lastname:{props.lastName} </p>
      <p>Firstname:{props.firstName}</p>
      <p>Gender:{props.gender}</p>
      <p>Height:{props.height}</p>
      <p>Birth:{props.birth}</p>
      <img src={props.picture} alt="student portrait" />
    </div>
  );
}

export default IdCard;
