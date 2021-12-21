import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, } from 'react-router-dom'
import { Navbar }from './components';
import { MainA, MainB, MainC, MainD } from './components';


function App() {
  return (
<>
<Router>


     <GlobalStyle/>
     <Navbar />
     <MainA/>
     <MainB/>
     <MainC/>
     <MainD/>
    </Router>
   </>

  );
}

export default App;
