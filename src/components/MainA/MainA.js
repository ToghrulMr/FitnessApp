import React from 'react';

import {
     Main, MainRow, MainColumn, 
     TextWrapper, Heading, ImgWrapper,
     SubButton, SubButton1,
     SubWrapper, 
     MainA, MainA1,
     MainA2,
     IMG,ButtonText,
    } from'./MainA.elements';
  
    import logo from '../../images/app7.jpg';
    import img9 from '../../images/img9.png';
    const MainSection = () => {
    return (
        <>
 <Main>
<MainRow >
    <MainColumn> 
    <TextWrapper>
    <Heading>Join The Fitness App & Improve your bodybuilding skills</Heading>
    <SubWrapper>
    <SubButton>Download</SubButton>
     <SubButton1>
      
       <IMG><img src={img9}/ ></IMG>
       <ButtonText> 
        Watch how to buy
        </ButtonText>
        </SubButton1>
    </SubWrapper>
      <MainA>  
          <MainA1>
             <MainA2> 01</MainA2><br/> Register or Login
          </MainA1>
        
        <MainA1>
        <MainA2>02</MainA2><br/>Verify Yourself
        </MainA1>

       <MainA1>
        <MainA2>03</MainA2><br/>
         Start to Fitness
       </MainA1>
   </MainA> 
</TextWrapper>
</MainColumn>
 <ImgWrapper >
 <img src={logo}/>
 </ImgWrapper>

    </MainRow> 
     </Main> 
</>  
)};

export default MainSection;
