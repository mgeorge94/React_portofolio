import React from 'react';
import styled from 'styled-components';

const Form = () => {
 return (
  <FormContainer>
   <form
    class='gform'
    method='post'
    data-email='george.murgoci.portofolio@gmail.com'
    action='https://script.google.com/macros/s/AKfycbxJI-J8lq-jQN-pEimXHYSnYaL21zHwKSNYWINCZEpwJkbu6cXS/exec'
   >
    <h4>Wanna work together?</h4>
    <label for='fname'>Tell me your name</label>
    <input className='form' required type='text' id='name' name='name' placeholder='Ex: Bill Smith' />
    <label for='fname'>Gimme your email</label>
    <input className='form' required type='email' id='email' name='email' placeholder='Ex: bill4ubaby@sweetpotato.com' />

    <label for='subject'>Tell me about your project</label>
    <textarea
     className='form'
     required
     id='subject'
     name='project'
     placeholder='Ex: I wanna make a social media platform so big that Mark Zuckerberg starts crying.'
    ></textarea>

    <input className='submit-btn' type='submit' value='Submit' />
    <div className='thankyou_message'>
     {/* <h2>Perfect! You made the first step towords your dream project. I will get back to you ass soon as possible!</h2> */}
    </div>
   </form>
  </FormContainer>
 );
};
const FormContainer = styled.aside`
 position: relative;
 transform: scaleX(-1);
 top: 0rem;
 right: 4rem;
 width: 30rem;
 margin: 10rem 3rem;
 border-radius: 10px;

 background-color: #f2f2f2;
 padding: 20px;
 @media screen and (max-width: 1100px) {
  align-self: center;
  left: -46%;
  transform: translateX(50%) scaleX(-1);
  width: 90vw;
  margin: 5rem 3rem 10rem 3rem;
 }
 h4 {
  font-size: 2rem;
  color: var(--accent-color);
  transition: color 1s ease-in-out;
  padding-bottom: 2rem;
 }
 label {
  color: black;
 }
 input[type='text'],
 input[type='email'],
 textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
 }
 textarea {
  font-family: 'Noto Sans JP', sans-serif;
  height: 200px;
  resize: vertical;
 }

 input[type='submit'] {
  background-color: var(--accent-color);
  transition: background-color 1s ease-in-out;
  font-size: 1.2rem;
  padding: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
 }

 input[type='submit']:hover {
  filter: brightness(150%);
  border: transparent;
 }
`;

export default Form;
