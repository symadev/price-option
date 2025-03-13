
import './App.css'
import Daisynav from './assets/Component/Daisynav/Daisynav'
import LineChart from './assets/Component/LineChart/LineChart'
import Navber from './assets/Component/Navber/Navber'
import Phones from './assets/Component/Phones/Phones'
import PriceOptions from './assets/Component/PriceOptions/PriceOptions'

function App() {
  

  return (
    <>
     
      <Navber></Navber>
       <Daisynav></Daisynav>
      <h1 className='text-6xl bg-yellow-200 p-3 text-black font-bold text-center items-center'>Price-Option</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
    
    
      
    </>
  )
}

export default App
