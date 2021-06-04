import { BrowserRouter } from "react-router-dom";
import Router from "./features/router";
// import './index.css'
import "./assets/css/argon-design-system-react.css";
import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import Auth from "./features/auth/authMain";

function App() {
  return (
    <Auth>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Auth>
  );
}

export default App;
