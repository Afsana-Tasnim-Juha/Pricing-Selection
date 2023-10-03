

import './App.css'
import LineChart from './Components/LineChart/LineChart'
//import Nav from './Components/Nav/Nav'
import NavBar from './Components/NavBar/NavBar'
import PricingSelection from './Components/PricingSelection/PricingSelection'

function App() {


  return (
    <>


      <NavBar></NavBar>
      {/*<Nav></Nav>*/}


      <PricingSelection></PricingSelection>
      <LineChart></LineChart>



    </>
  )
}

export default App
