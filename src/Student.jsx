import { useState } from 'react';
// import axios from 'axios';
import { postStudent } from './StudentService';
export const Student = () => {
  const [student, setStudent] = useState({
    name: '',
    age: '',
    email: '',
    address: '',
    skills: ['DSA', 'Dev'],
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({
      ...student,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await postStudent(student);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className='flex'>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col items-center gap-2'>
          <span className='p-5'>
            <label className='mr-2'>Name:</label>
            <input
              className='border-2'
              type='text'
              name='name'
              value={student.name}
              onChange={handleChange}
              required
            ></input>
          </span>
          <span className='p-3'>
            <label className='mr-3'>Age:</label>
            <input
              className='border-2'
              type='number'
              name='age'
              value={student.age}
              onChange={handleChange}
              required
            ></input>
          </span>
          <span className='p-5'>
            <label className='m-2'>Email:</label>
            <input
              className='border-2'
              type='text'
              name='email'
              value={student.email}
              onChange={handleChange}
              required
            ></input>
          </span>
          <span className='p-5'>
            <label className='m-2'>Address:</label>
            <input
              type='text'
              className='border-2'
              name='address'
              value={student.address}
              onChange={handleChange}
              required
            ></input>
          </span>

          <button type='submit' className='border-2 m-2 p-2 shadow-md rounded-lg'>
            submit
          </button>
        </div>
      </form>
    </div>
  );
};
