import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet,Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <Header></Header>
            <Navbar></Navbar>
                <Link to={'/product'}>List Product</Link> |
                <Link to={'/add'}>Add Product</Link> |

            <hr />
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}
