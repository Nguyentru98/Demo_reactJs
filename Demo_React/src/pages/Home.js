import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet,Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <Header></Header>
            <Navbar></Navbar>
            <hr />
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}
