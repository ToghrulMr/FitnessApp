import styled from 'styled-components';



export const MainY = styled.div`
background-color:#EAEAEA;
  height: 80vh;
  background-position: center;
  background-size: cover;
  display:flex;
  margin-top:45%;
  @media screen and (max-width: 768px){
 margin-top:320%;
 display:inline-block;
 width:100%;
 height:100vh; 
 overflow-x: hidden;
 overflow-y: hidden;
`;

export const TextWrapper = styled.div`
color:black;
width:35%;
margin-left:10%;
padding-bottom:10px;
margin-top:7%;
max-width: 50%;
@media screen and (max-width: 768px){
   
   
     }
`;

export const Heading = styled.div`
color:black;
font-size:30px;
font-weight:500;
@media screen and (max-width: 768px){
width:190%;
}
`;

export const SubWrapper= styled.div`
color:#808080;
margin-top:30px;
width:420px;
@media screen and (max-width: 768px){
width:430px;
margin-right:90%;
}
`;

export const SubButton = styled.div`
color:white;
background-color: #ff5c33 ;
width:130px;
height:35px;
padding-top:8px;
padding-left:30px;
border-radius:15px;
margin-left:1%;
margin-top: 13px;
cursor:pointer;
&:hover {
background-color:white;
color:#14A800;
border:1px solid #14A800;
 }
`;

export const MainY1 = styled.div`
display: flex;
margin-bottom:10%;
height:70%;
margin-left:55%;
position:absolute;
z-index:1;
@media screen and (max-width: 768px){
height:50%;
margin-left:30%;
     }
`;


export const MainY2 = styled.div`
margin-top:10%;
margin-left:4%;
@media screen and (max-width: 768px){
margin-right:4%;
 height:10%;
}
`;
