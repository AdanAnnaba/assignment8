import React from 'react';
import { useState } from 'react';
import Blogs from '../Blogs/Blogs';

const About = () => {
  const [change, setChange] = useState('')

 
  return (
    <div>
      
      <button onClick={()=>setChange(<Blogs></Blogs>)}>Click Me</button>
      <h1>A quick brown fox jumps over the lazy dog.{change}</h1>
    </div>
  );
};

export default About;