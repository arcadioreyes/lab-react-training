import React from 'react';

function IdCard(props) {
  const { student } = props;

  return (
    <div className="IdCard">
      <p>Firstname: {student.firstName}</p>
      <p>LastName: {student.lastName}</p>
      <p>Country: {student.country}</p>
      <img src={student.img} width={'100px'} alt={'student portrait'} />
      <p>Is student:: {student.isStudent}</p>
    </div>
  );
}

export default IdCard;
