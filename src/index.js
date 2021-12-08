import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { PrivateRoute } from "./router"
import App from "./App";
import { Home } from "./home";
import { CV } from "./cv";
import { Login } from "./login";
import { IrregularVerbs } from "./privacyPolicy/irregularVerbs";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route exact path='/app' element={<PrivateRoute />}>
        <Route exact path='/app' element={<App />} />
      </Route>
      <Route path="/" element={<Home />} />
      <Route path="/cv" element={<CV />} />
      <Route path="/login" element={<Login />} />
      <Route path="/privacy-policy/irregular-verbs" element={<IrregularVerbs />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);