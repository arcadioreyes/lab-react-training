import { useState } from 'react';
import studentsDataJSON from '../data/berlin.json';
import React from 'react';
import IdCard from './IdCard';

function IdList() {
  const [students, setStudents] = useState(studentsDataJSON);
  return (
    <div>
      <h2>Ids List </h2>

      {students.map((student) => {
        return (
          <IdCard
            Firstname={student.firstName}
            LastName={student.lastName}
            Country={student.country}
            img={student.img}
            IsStudent={student.isStudent}
          />
        );
      })}
    </div>
  );
}

export default IdList;
