import { Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import './App.css';
import HomePage from "./components/homePage/HomePage";
import Layouts from "./components/layouts/Layouts";
import NotFound from "./components/notFound/NotFound";



function App() {
  return (
     <Routes>
        <Route path="/" element={<Layouts/>}>
          <Route path="/" element={<HomePage/>}></Route>


          <Route path="*" element={<NotFound />} />
        </Route> 
      </Routes>
  );
}

export default App;
