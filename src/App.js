import Home from "./routes/home/Home";
import Navigation from "./routes/Navigation/Navigation.jsx"
import Authentication from "./routes/authentication/Authentication";
import Shop from "./routes/shop/Shop";
import CheckOut from "./routes/checkout/CheckOut";

import { Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <Routes>
        <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path="auth" element={<Authentication/>}/>
        <Route path="checkout" element={<CheckOut/>}/>
      </Route>
    </Routes>
  );
};

export default App;
