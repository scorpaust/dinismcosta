import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";
import Authentication from "./routes/authentication/authentication.component";
import Services from "./routes/services/services.component";

const App = () => { 

  return(
    <Routes>
      <Route path="/"  element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="autenticacao" element={<Authentication />} />
        <Route path="servicos" element={<Services />} />
      </Route>
    </Routes>
    )
}

export default App;
