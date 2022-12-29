
import './App.css';

import {Provider} from 'react-redux'
import Store from './Redux/Mobile/Store/Store';
import MobileView from './Redux/Mobile/MobileView';
import NavBar from './Redux/Mobile/Store/NavBar';
import {Routes,Route} from 'react-router-dom'
import NotFound from './Redux/Mobile/Store/NotFound';
import SideBar from './Redux/Mobile/Store/SideBar';
import CartView from '../src/Redux/Mobile/Cart/CartView'
import Home from './Redux/Mobile/Home/HomeView';
import TvView from './Redux/Mobile/TvView';
import CycleView from './Redux/Mobile/CycleView';
import LaptopView from './Redux/Mobile/LaptopView';
import AboutView from './Redux/Mobile/AboutView';



function App() {


  return (
    <div className="App" >     
     <Provider store={Store}>
      <NavBar/>
      <Routes>
        <Route path="/product"  element={<SideBar/>} >
        <Route path="mobile"  element={<MobileView/>} />
        <Route path="tv"  element={<TvView/>} />
        <Route path="laptop"  element={<LaptopView/>} />
        <Route path="cycle"  element={<CycleView/>} />
        </Route>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<CartView/>}/>
        <Route path="/about" element={<AboutView/>}/>
      </Routes>
     </Provider>

    </div>
  );
}

export default App;
