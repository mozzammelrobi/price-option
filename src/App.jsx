
import './App.css'
import Chart from './componetns/Chart/Chart'
import NavBar from './componetns/NavBar/NavBar'
import Phones from './componetns/Phones/Phones'
import PriceOpton from './componetns/PriceOption/PriceOpton'
// import DaisyNav from './componetns/DaisyNav/DaisyNav'

function App() {


  return (
    <div className='container mx-auto'>
  
  <NavBar></NavBar>
  <h1 className='text-4xl mt-5 text-purple-700'>This is main part of the projects</h1>
  {/* <DaisyNav></DaisyNav> */}
  <PriceOpton></PriceOpton>
  <Chart></Chart>
  <Phones></Phones>


    </div>
  )
}

export default App
