
import './App.css';
import Navbar from './components/footer/navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Auth from './pages/auth/auth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { user_logged_check_action } from './redux/userAction';
import Layout from './pages/home/layout';
import Dashboard from './pages/auth/dashboard';
import ProtectedRoute from './protectedRoute/protectedRoute';
import NonProtectedRoute from './protectedRoute/nonProtectedRoute';
import { clear_success, get_all_products_action } from './redux/product/product_actions';
import Footer from './components/footer/footer';
import Product_details from './pages/product_details/product_details';
import Shop_product from './pages/shop/shop';
import AboutUs from './pages/about_us/aboutUs';
import Contact from './pages/contact/contact';
import ProductsShop from './pages/products_fshop/products_shop';

function App() {

  const dispatch = useDispatch();
  const state = useSelector(state => state.user_register);

  useEffect(() => {
    loggedUserCheck();
  },[]);


  // prodicts fetch
  const products = useSelector(state => state.product);

  useEffect(() => {
      productCheck();
    },[]);

    const price = {
      from : 0,
      to : 999999
    }
  
    const productCheck = () => {
      // dispatch(get_all_products_action("", "", price));
      dispatch(get_all_products_action("", "", price, "", "", ""));

    }


  const loggedUserCheck = () => {
    dispatch(user_logged_check_action());
  }


    useEffect(()=>{
      if(products.success){
        alert("clear test")
        dispatch(clear_success())
      }
    },[products])

  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* <Route path='/' element={<Layout products={products } />} exact />
        <Route path='/profile' element={<Dashboard state={state} />} exact />
        <Route path='/product' exact element={<Shop_product /> }/>
        <Route path='/about' exact element={<AboutUs /> }/>
        <Route path='/contact' exact element={<Contact /> }/>
        <Route path='/shop' exact element={<ProductsShop /> }/> */}


        <Routes>
          <Route path='/' element={<Layout products={products } />} exact />
          {/* <Route path='/about' element={<h4>About</h4>} /> */}
          <Route path='/products' element={<h4>Products</h4>} />
          <Route path='/details/:id' exact element={<Product_details /> }/>
          <Route path='/shop/details/:id' exact element={<Product_details /> }/>
          <Route path='/product' exact element={<Shop_product /> }/>
          <Route path='/about' exact element={<AboutUs /> }/>
          <Route path='/contact' exact element={<Contact /> }/>
          <Route path='/shop' exact element={<ProductsShop /> }/>


          <Route element={<ProtectedRoute />}>
            <Route path='/profile' element={<Dashboard state={state} />} exact />
          </Route>

          <Route element={<NonProtectedRoute />}>
          <Route path='/auth' element={<Auth />  } exact />
          </Route>



        </Routes>
        
        <Footer/>

      </Router>
    </div>
  );
}

export default App;
