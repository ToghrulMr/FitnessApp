import React from 'react';

import {
    MainX, TextWrapper, 
    Heading,SubButton,
    SubWrapper, Sub1, 
    Sub2, MainX1,  MainX1a,MainX11, MainX11a,
    MainX2, MainX3,  MainX4,MainX5,
     SubWrapper1, SubText1,
     HeadingX,SubText1B,SubText1Bx,SubText1By,
    } from'./MainB.elements';

    import img3 from '../../images/app4.png';
    import img5 from '../../images/img5.png';
    
    
   
    import img10 from '../../images/img10.png';
const MainB = () => {
    return (
        <>
        <MainX>
        <Heading>About The Fitness App</Heading>
              <TextWrapper>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
             </TextWrapper>
           <SubButton>Explore</SubButton>
        <SubWrapper>
            <Sub1>

              <MainX1>Profile <br/>Verification
                 
             </MainX1>

            

              <MainX3>
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
             </MainX3>

            </Sub1>

            <Sub2>
            <MainX11>Secure payments </MainX11>
           
  

            <MainX3>
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
             
           </MainX3>
           <MainX4>
               <img src={img3}/>
           </MainX4>
           </Sub2>
        
         </SubWrapper>
                 <SubWrapper1>
                 <HeadingX>
                  <h2>Download Fitness App</h2>
               </HeadingX>  
              <SubText1> 
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor 
                at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage</p>
                    <br/>
                    <br/>
                    <SubText1B>
                      <SubText1Bx> <img src={img5}/></SubText1Bx> 
                    <SubText1By>  <img src={img10}/></SubText1By>
                      </SubText1B>
                
              </SubText1>     
              <MainX5>
              <img src={img3}/>
              </MainX5> 
         
    </SubWrapper1>
  
            </MainX>
            
        </>
        
    );
};

export default MainB;
