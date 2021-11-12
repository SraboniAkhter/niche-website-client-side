import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import About from "./components/Home/About/About";
import Home from "./components/Home/Home/Home";
// import Navbar from "./components/Shared/Navbar/Navbar";
import AuthProvider from "./context/AuthProvider";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
// import Footer from './components/Shared/Footer/Footer'
import CompleteOrder from "./components/CompleteOrder/CompleteOrder";
import Booking from './components/Booking/Booking/Booking';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
// import AddProduct from './components/Dashboard/AddProduct/AddProduct';
import Products from './components/Home/Products/Products';
import ManageProduct from './components/Dashboard/ManageProduct/ManageProduct';
// import ManageAllOrders from './components/Dashboard/ManageAllOrders/ManageAllOrders';
// import MyOrders from './components/Dashboard/MyOrders/MyOrders';
// import AddReview from './components/Dashboard/AddReview/AddReview';
// import Payment from './components/Dashboard/Payment/Payment';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <div>
        {/* <Navbar></Navbar> */}
        <Switch>
          <PrivateRoute path="/about">
            <About />
          </PrivateRoute>
          <Route path="/product">
            <Products />
          </Route>
          {/* <Route path="/product">
            <Products />
          </Route> */}
          <Route path="/manageProduct">
            <ManageProduct />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/booking/:productId">
            <Booking />
          </PrivateRoute>
          <PrivateRoute path="/complete">
            <CompleteOrder />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        {/* <Footer></Footer> */}
      </div>
    </Router>
    </AuthProvider>
    </div>
  );
}

export default App;