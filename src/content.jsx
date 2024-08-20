import React from 'react';
import styled from 'styled-components';
function Content(){
  return (
    <Contentstyle>
    <div className="con">
      <div className="main">
        <p>"Welcome to the Alumni-Student Interaction Platform, designed to connect alumni with current students. Engage in mentorship, career guidance, and collaborative opportunities to build a strong, supportive community. Join us in fostering lifelong connections and sharing valuable insights."</p>

        <button>Get Started</button>

      <div className="about">
    <h1>Who We Are</h1>
    <span>
       Welcome to the future of education! Our platform is not just another boring website; it’s a vibrant hub where alumni and students collide in a spectacular explosion of knowledge and opportunity. We’re here to shake things up and make learning as thrilling as a rollercoaster ride!

       Our mission? To bridge the gap between seasoned professionals and eager learners. We believe that education should be a two-way street, where wisdom flows freely and connections are made with a dash of excitement. Forget the old-school methods; we’re all about innovation and interaction!

       Join us on this wild journey as we redefine technical education. With our AI-driven platform, you’ll not only learn but also network, collaborate, and maybe even find your next job while having a blast!</span>
        <div className="det">
       <div className="detail">
       <h1>10,000+</h1>
        <span>Happy Alumni</span>
      
        
      
            </div>
            <div className="detail">
           <h1> 500+</h1>
           <span>Active Students</span>


            </div>

            <div className="detail">
            <h1>99%</h1>
            <span>Satisfaction Rate</span>
              </div>
              </div>

          </div>
      </div>

     
    </div>
   
    </Contentstyle>
  );
}

const Contentstyle = styled.div`
*{
margin:0;
padding:0;
}

.con {
  margin: 0; /* Remove margin to fit the container perfectly */
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom, rgba(43, 43, 48, 0.732), rgba(59, 59, 63, 0.753)), 
  url('https://www.edgeip.com/images/FCK/Image/202307/Cambridge-CollegesFacultiesWork.jpg') no-repeat center center;
  background-size: cover;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  .main{
  margin-top:260px;
  position:relative;
  p{
  font-size: 27px;
  color: white;
  margin-top:60px;
  padding:28px;
  
}

button{
  background-color: rgb(247, 211, 29);
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 20px;
  cursor: pointer;
  color: white;
  margin-top: 30px;
  


}
  }

  .about{
  background-color:white;
  width:900px;
  height:330px;
  margin-left:270px;
  margin-top: 70px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius:10px;
  padding:30px;
  
  .det{
  display:flex;
  justify-content:center;
  align-item:center;
margin-top:40px;
gap:160px;

.detail{
text-align:center;
h1{
color:#0e3673;
font-size:50px;
}
span{
font-size:15px;
}
}
  }
  span{
  font-size:15px;
  margin-top:20px;
  
  }

  h1{
  margin-top:30px;
  }
 
  }
}


`
export default Content;