import styled from 'styled-components';



export const Main = styled.div`
background-color:#4d94ff;
height: 140vh;
background-position: center;
background-size: cover;
@media screen and (max-width: 768px){
height:200vh;
padding-top:15px;
width:100%;

}`;

export const MainRow = styled.div`
display: flex;
flex-wrap:wrap;
align-items: center;
`;

export const MainColumn = styled.div`
max-width:2%;
flex-basis: 90%;
@media screen and (max-width: 768px) {
  flex-basis: 100%;
  display: flex;
  justify-content:space-around;
 }`;


export const TextWrapper = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
height: 120vh;
max-height: 100%;
width: 990px;
color: #fff;
font-weight: bold;

  @media screen and (max-width: 768px){
    padding-bottom:2050px;
    margin-left:50%;
}
`;


export const Heading = styled.h1`
width:70%;
font-size:42px;
margin-bottom: 8%;
margin-left:18%;
color:#fff;
@media screen and (max-width: 768px){
  width:108%;
  margin-left:52%;
  margin-top:450%;
}
`;



export const ImgWrapper = styled.div`
display: flex;
justify-content:center;
height:700px;
margin-top:135px;
margin-left:845px;
@media screen and (max-width: 768px){
  margin-left:50px;
  margin-top:10px;
 }`;

export const SubWrapper = styled.div`
display: flex;
margin-top:9px;
margin-left:18%;
@media screen and (max-width: 768px){
 margin-left:56%;
 margin-top:19%;
}
`;

export const SubButton = styled.div`
color:white;
background-color:#ff5c33;
width:120px;
height:35px;
padding-top:8px;
padding-left:20px;
border-radius:15px;
cursor:pointer;
&:hover {
 background-color:black;
 color:white;
 border:2px solid #14A800;
}
`;

export const SubButton1 = styled.div`
color:white;
display:flex;
border:1px solid #14A800;
width:240px;
border-radius:25px;
background-color:black;
height:40px;
padding-top:9px;
margin-left:10%;
&:hover {
 background-color:#14A800;
 color:white;
 border:2px solid #14A800;
}
@media screen and (max-width: 768px){
  margin-left:px;
 }`;


 
export const MainA = styled.div`
height:13vh;
width:850px;
display:flex;
margin-top:73%;
background:#fff;
position:absolute;
@media screen and (max-width: 768px){
margin-left:60%; 
margin-top:270%;
display:inline-block;
width:100%;
position:relative;
 }`;
 
export const MainA1 = styled.div`
color:#707070;
margin-left:17%;
margin-top:30px;
@media screen and (max-width: 768px){
margin-left:30%;
margin-bottom:20%;
color:#707070;
}
`;
export const MainA2 = styled.div`
@media screen and (max-width: 768px){
  margin-left:20%; 
   }`
   export const IMG = styled.div`
  margin-left:10%;
 
   `;
   export const ButtonText = styled.div`
   display:flex;
   margin-left:10px;
   cursor:pointer;
   `;
