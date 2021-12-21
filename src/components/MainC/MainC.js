import React from 'react';

import {   
    MainY,
    TextWrapper,Heading,
    SubWrapper,MainY1, MainY2, SubButton,
    } from'./MainC.elements';

    import img2 from '../../images/app12.jpg';
 

const MainC = () => {
    return (
        <>
            <MainY>
                 <TextWrapper> 
                     <Heading>
                Read about Fitness
                 </Heading>
                 <SubWrapper>
                 Physical fitness is a state of health and well-being and, more specifically, the ability to perform aspects of sports, 
                 occupations and daily activities. Physical fitness is generally
                  achieved through proper nutrition, moderate-vigorous physical exercise, and sufficient rest along with a formal recovery plan
            </SubWrapper>
            <SubButton>Download</SubButton>
            </TextWrapper>
                 <MainY1><img src={img2}/></MainY1>
               
          
            
            </MainY>
            
        </>
        
    );
};

export default MainC;
