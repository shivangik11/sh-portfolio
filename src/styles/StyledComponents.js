// src/styles/StyledComponents.js
import styled from 'styled-components';


export const MainContainer = styled.div`
  display: grid;
  grid-template-rows: 80px auto 1fr 80px;
  padding: 0 20px;
  margin: 0;
  height: 100vh;
  width: 100%;
  gap: 0;
  box-sizing: border-box;

  @media (max-width: 1440px) {
    grid-template-rows: 70px auto 1fr 70px; // Adjust row sizes for 1440px screens
    padding: 0 20px; // Reduce padding for 1440px screens
  }

  @media (max-width: 768px) {
  grid-template-rows: 70px auto 1fr 80px;
    padding: 0, 10px;
    height: auto; // Further reduce padding for smaller screens
    overflow-y: visible;  }
`;




export const Logo = styled.div`
  grid-column: 1;
  grid-row: 1;
  align-self: center;
  padding: 0px;
  display: flex;
  
`;

export const Navigation = styled.div`
  font-size: 22px;
  grid-column: 3;
  grid-row: 1;
  align-self: center;
  padding: 20px, 0;
  box-sizing: border-box;
  text-align: center;
  display: flex;  // Corrected from 'no-flex' to 'flex'
  justify-content: space-evenly;
  gap: 40px;
  border: 1px solid #c9e514;
  border-radius: 10px;

  a {
    color: #c9e514;
    text-decoration: none;
    font-size: 22px;
    padding: 0 10px;
    line-height: normal;  // Adjusts line height for better readability
    padding-top: 8px;
    display: inline-block;  // Corrected from 'no-flex' to 'flex'
    vertical-align: middle;
  }


  @media (max-width: 768px) {
    gap: 20px;  // Adjusts the gap for medium devices

    a {
      font-size: 18px;  // Smaller font size for better readability on smaller screens
    }
  }

  @media (max-width: 480px) {
    gap: 10px;  // Further reduces the gap for small devices

    a {
      font-size: 16px;  // Even smaller font size for mobile devices
    }
  }
`;

export const CompanyName = styled.h1`
  font-family: "Notable", sans-serif;
  grid-column: 1 / span 3;
  grid-row: 2;
  border-bottom: 1px solid white;
  border-top: 1px solid white;
  display: flex;
  align-items: center; /* Vertically centers the text in the div */
  justify-content: center; /* Horizontally centers the text */
  height: 80px; /* Adjust height to fit the container */
  font-size: calc(5vw + 1.4rem);/* Responsive font size */
  line-height: normal; /* Reduces space above and below the text */
  margin: 0; /* Removes default margin */
  padding: 0; /* Adjust padding as needed */
  padding-bottom: 30px;
  overflow: hidden; /* Prevents text from spilling out */
  text-transform: uppercase; /* Makes text uppercase */
  width: 100%; /* Ensures the element fills its container */
  white-space: nowrap;


  @media (max-width: 1440px) {
    padding-bottom: 20px;
    font-size: calc(5vw + 1rem);
    height: 80px; 
  }
  @media (max-width: 768px) {
    font-size: 3.5rem; /* Adjust font size for smaller screens */
    height: 100px; /* Adjust height to fit the container */
    white-space: wrap;
    line-height:50px;
    padding-bottom: 10px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 2rem; /* Adjust font size for mobile screens */
    height: 70px; 
    line-height:30px;
    }

`;

export const ContentSection = styled.section`
  grid-column: 1 / span 3;
  grid-row: 3;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  max-height: 900px;
  overflow-y: auto; 
  
  @media (max-width: 1440px) {
    max-height: 600px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    max-height: 500vh;
    overflow-y: visible;
    color: black;
  }
`;
export const AboutSection = styled.div`
  color: white;
  order: 1;
  text-align: Left;
  overflow-y: auto;
  padding-right: 10px;
  max-height: 700px;

   h3 {
    color: #BDBDBD;
    font-size: 24px;
    text-transform: uppercase;
    padding: 10px;
  }
    ul {
    list-style: none; /* Removes default list styling */
    padding: 0;
   }

li {
    display: flex;
    align-items: center; /* Aligns icons with text vertically */
    margin-bottom: 10px; /* Adds space between items */
    font-size: 20px;
    line-height: 1.2;
}
li img {
    width: 50px; /* Sets the icon size */
    height: 32px;
    margin-right: 10px; /* Adds space between the icon and text */
}

@media (max-width: 768px) {
  order: 3; // Comes after project list on small screens
  max-height: 1100px;
  overflow-y: visible;  
  padding-bottom:20px
  }
  
 
`;

export const ProjectListSection = styled.div`
  order: 2;
  border-left: 1px solid white;
  padding: 0px, 10px;
  text-align: Left;
  max-height: 700px;
  overflow-y: auto;
  
  @media (max-width: 768px) {
    order: 1; // Comes after project list on small screens
    border-left: 0px solid white;
    max-height: 100%;
   overflow-y: hidden;
   padding: 0px;
  }
`;
  

export const ProjectList = styled.ul`
 list-style: none;
  padding: 0px;


  li {
    font-size: 22px;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 20px;
    padding-right: 20px;

    background-color: transparent;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 0.5px solid white;
    border-bottom: 0.5px solid white;
    transition: background-color ;

   &.active {
      color: #b8d312;

      .arrow {
        fill: #b8d312;
      }
    }

    &:hover {
      color: #b8d312;

      .arrow {
        fill: #b8d312;
      }
    }
      div {
      
      flex-direction: column;

      strong {
        font-size: 28px;
      }

      small {
        font-size: 0.9em;
        font-weight: 10;  // Adjust the font weight
        color: #ccc;  // You can change this color as needed
        margin: 0px;
      
        
        
      }
    }
  
  }

@media (max-width: 768px) {
    li {
    padding: 10px;
      font-size: 24px;
    }
  }

  @media (max-width: 480px) {
    li {
      font-size: 20px;
    }
  }

`;

export const ProjectDetailsSection = styled.div`
  order: 3;
  padding:  0px;
  border-left: 1px solid white;
  max-height: 700px;
  overflow-y: auto;
  position: relative;

@media (max-width: 768px) {
  order: 2; // Comes after project list on small screens
  border-left: 0px solid white;
  max-height: 100%;
  overflow-y: hidden;
  
  }
`;

export const ProjectDetailsHeader = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  width: calc(100%);  // Adjust width to account for padding
  background-color: black;
`;

export const Title = styled.h2`
  position: sticky;
  padding-top: 10px;
  padding-bottom: 15px;
  padding-left: 20px;
  top: 0;
  margin: 0px;
  width: 100%;
  background-color: black;
  font-family: "Notable", sans-serif;
  font-size: 28px;
  color: #bdbdbd;
  font-weight: 100;
  text-transform: uppercase;

  

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const Text = styled.p`
  font-family: "Gayathri", sans-serif;
  color: #ccc;
  font-size: 20px;
  padding-left: 10px;
  line-height: 1.2;

  

    @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
export const Footer = styled.footer`
  font-family: "Gayathri", sans-serif;
  color: white;
  grid-column: 1 / span 3;
  grid-row: 4;
  grid-template-columns: 1fr 1fr;
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid white;
  border-top: 1px solid white;
  display: no-flex;
  
  a{
  grid-column: 1;
  color: white;
  padding: 10px;
  
  }
p{
  grid-column: 2;
  }
  

@media (max-width: 768px) {
  padding:10px;
  grid-row: 4;
  max-height: 100%;
  border-bottom: 0px solid white;
}
`;
export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  color: #b8d312;
  background: none;
  border: none;
  padding: 10px;
  padding-top: 0px;
  padding-bottom: 0px;
  cursor: pointer;
  font-size: 1rem;


  svg {
    margin-left: 20px;
    transition: transform 0.3s;
  }

  &:hover {
    color: #b8d312;

    svg {
      transform: translateX(5px);
    }
  }

   @media (max-width: 768px) {
    font-size: 0.9rem;
    text
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;


export const WriteUpSection = styled.div`
  font-family: "Gayathri", sans-serif;
  color: #ccc;
  padding-left: 20px;
  line-height: 1.2;
  width: 100%;
  max-width: 900px;

  h3 {
    color: #BDBDBD;
    font-size: 24px;
    text-transform: uppercase;

  }
    p{
    color: ccc;
    font-size: 20px;
    line-height: 1.2;
  }
   
`;


export const ImageSection = styled.div`
  padding: 10px;
  display: no-flex;
  flex-direction: column;
  align-items: left;
  max-width: 900px;

  
    .start-new-line {
    display: block;
    margin-top: 0px; // Adjust the margin as needed
  }
    &.first-video {
      max-width: 60%;
    }

    &.custom-video {
      max-width: 40%;
    }
  

`;