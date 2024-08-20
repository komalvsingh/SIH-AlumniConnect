import React from "react";
import styled from "styled-components";

function Feature() {
  return (
    <>
    <Featbox>
      <div className="fcon">
        <div className="f1">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVI-VoHDsesGac7IrHLA8zqdEeZTjfMkyzsg&s" alt="Event" />
          <h3>Add an Event</h3>
          <p>Learn and Engage with fellow students</p>
          <button>Find Events</button>
        </div>

        <div className="f1">
          <img src="https://cdni.iconscout.com/illustration/free/thumb/free-no-messages-illustration-download-in-svg-png-gif-file-formats--chat-error-reply-response-empty-state-states-pack-design-development-illustrations-3385489.png?f=webp" alt="Event" />
          <h3>Add an Event</h3>
          <p>Learn and Engage with fellow students</p>
          <button>Find Events</button>
        </div>

        <div className="f1">
          <img src="https://png.pngtree.com/element_our/20200702/ourlarge/pngtree-vector-magnifying-glass-to-find-books-image_2284402.jpg" alt="Event" />
          <h3>Add an Event</h3>
          <p>Learn and Engage with fellow students</p>
          <button>Find Events</button>
        </div>
      </div>
    
    <div className="explore">
    <h1>Join the Revolution Today!</h1>
    <p>Join our community of students and teachers to learn and grow together.</p>
    <button>Explore Now</button>
    </div>

    <h1 style={{marginLeft:"700px",fontSize:"40px"}}>Meet Us</h1>
    <div className="m1">
     
      <div className="alumni">
        <img src="https://r.mobirisesite.com/629644/assets/images/photo-1595436065982-84fa400d8d8e.jpeg" alt="" />
        <h2>Sophia</h2>
        <h6>Chief Innovator</h6>
      </div>
      <div className="alumni">
        <img src="https://r.mobirisesite.com/629644/assets/images/photo-1530882548122-0596ee66cdfd.jpeg" alt="" />
        <h2>Liam</h2>
        <h6>Tech Wizard</h6>
      </div>
      <div className="alumni">
        <img src="https://r.mobirisesite.com/629644/assets/images/photo-1677520338280-664ae23816eb.jpeg" alt="" />
        <h2>Olivia</h2>
        <h6>Community Builder</h6>
      </div>
      <div className="alumni">
        <img src="https://r.mobirisesite.com/629644/assets/images/photo-1497485692312-a26e1cc30f1d.jpeg" alt="" />
        <h2>Noah</h2>
        <h6>Data Guru</h6>
      </div>
    </div>
    </Featbox>
</>

  );
}



const Featbox = styled.div`
  .fcon {
    margin-top: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap:190px;
  }

  .f1 {
    text-align: center;
    padding: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 0px 30px;
    background-color: #0e3673;

    img {
      width: 100px;
      height: 100px;
      object-fit: cover;
      margin-bottom: 20px;
      border-radius: 50%;
    }

    h3 {
      font-size: 24px;
      margin-bottom: 10px;
      color: white;
    }

    p {
      font-size: 16px;
      margin-bottom: 20px;
      color: white;
    }

    button {
      padding: 10px 20px;
      background-color: #1DBB90;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    button:hover {
      background-color: #0056b3;
    }
  }

  .explore{
background-color: #FFE196;
width: 100%;
height: 250px;
text-align: center;
padding: 20px;
margin-top:30px;

button{
  background-color: #0e3673;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 20px;
  cursor: pointer;
  color: white;
  margin-top: 30px;
  
}

h1{
font-size:50px;
}
}

.m1{
  padding: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 20px;

  .alumni{
    text-align: center;
    padding: 20px;

    img{
    height:400px;
    width:320px;
    border-radius:15px;
    }

    h6{
    margin-top:-10px;
    font-size:15px;
    }
    
  }


}
`;

export default Feature;
