
import './App.css';
import {Outlet, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import ListProduct from './pages/product/listProduct';
import AddProduct from './pages/product/addProduct';

function App() {
    return (
        <>
            <Outlet></Outlet>
            <Routes>
                <Route path={"/"} element={<Home/>}>
                        <Route path={"/product"} element={<ListProduct/>}></Route>
                        <Route path={"/add"} element={<AddProduct/>}></Route>
                </Route>   
            </Routes>
        </>
    );
}

export default App;
