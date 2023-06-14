import React from 'react'
import Getstarted from './comp/getstarted.jsx'
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import Home from './comp/Home.jsx';
function App() {
  

  return (
    <>
 <Router>
<Routes>
<Route path="/" element={<Getstarted/>} />
<Route path="/home" element={<Home/>} />
</Routes>
</Router>


    </>
  )
}

export default App
