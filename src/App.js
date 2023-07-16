import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar1 from './Componants/Navbar/Navbar1';
import Header from './Componants/Header/Header';
import Footer from './Componants/Footer/Footer';
import { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from './Componants/Home/Home';
// import Products from './Componants/Products/Products'
// import About from './Componants/Shoes/Shoes'
// import Acountitem from './Componants/Acount/Acountitem'
// import Cart from './Componants/Cart/Cart'
// import Productview from './Componants/Products/Productview/Productview';
// import Wishlist from './Componants/Wishlist/Wishlist'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Women from './Componants/Women/Women'
// import Men from './Componants/men/Men'
// import Shoes from './Componants/Shoes/Shoes'

export const ThemContext = createContext(null)

function App() {
  const [them, setThem] = useState("light");

  const togglefunc = () => {
    setThem((cur) => (cur === "light" ? "dark" : "light"))
  }

  return (
    <ThemContext.Provider value={{ them, togglefunc }}>
      <div className="app-info" id={them}>
        <div className="main-app">
          <Router>
            <ToastContainer />
            <Header togglefunc={togglefunc} />
            <Navbar1 />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              {/* <Route path="/products" element={<Products />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/women" element={<Women />}></Route>
              <Route path="/men" element={<Men />}></Route>
              <Route path="/acount-item" element={<Acountitem />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/productview/:id" element={<Productview />}></Route>
              <Route path="/favorite" element={<Wishlist />}></Route>
              <Route path="/shoes" element={<Shoes />}></Route> */}

            </Routes>
          </Router>

        </div>


        <Footer />

      </div>
    </ThemContext.Provider>
  );
}

export default App;
