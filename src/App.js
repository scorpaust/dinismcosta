import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";
import Authentication from "./routes/authentication/authentication.component";
import Services from "./routes/services/services.component";
import Checkout from "./routes/checkout/checkout.component";
import { useEffect } from "react";
import { checkUserSession } from "./store/user/user.action";
import { useDispatch } from "react-redux";

const resizeOps = () => {
  document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
};

resizeOps();
window.addEventListener("resize", resizeOps);


const App = () => { 

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return(
    <Routes>
      <Route path="/"  element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="autenticacao" element={<Authentication />} />
        <Route path="servicos/*" element={<Services />} />
        <Route path="finalizar-compra" element={<Checkout />} />
      </Route>
    </Routes>
    )
}

export default App;
