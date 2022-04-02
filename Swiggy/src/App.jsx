
import { Route,  Routes } from 'react-router-dom'
import './App.css'


// import { Navbar } from './components/Navbar/Navbar';
import { Cart } from './components/CART/cartPage'
import { Home } from './components/landingPAge'
import { SignInSide } from './components/login'
import { ResponsiveAppBar } from './components/NavBar'
// import PrimarySearchAppBar from './components/search'
import { Restaurent } from "./components/RestaurantPage/Restaurentpage";
import { Landing } from './components/Landing/Landing';
import { Searchbar } from './components/search/search'
import { OfferPage } from './components/offer/offerpage'
// import LoginDrawer from './components/Login/Login'

function App() {
  return (
    <div className="App">

     
        
      <ResponsiveAppBar/>
     
    
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/restaurent" element={<Restaurent />} />
        <Route path="/search" element={<Searchbar />} />
        <Route path="/login" element={<SignInSide />} />
        <Route path="/offers" element={< OfferPage/>} />
      </Routes>
     
    </div>
  );
}

export default App;
