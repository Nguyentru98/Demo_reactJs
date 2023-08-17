import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
        <li class="nav-item active">
            <Link to={'/'} class="nav-link" >Home</Link>
            {/* <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> */}
        </li>
        <li class="nav-item">
                <Link to={'/product'} class="nav-link" >List Product</Link>
        </li>
        <li class="nav-item">
                <Link to={'/add'} class="nav-link">Add Product</Link>
        </li>

        </ul>
    </div>
    </nav>
        </>
    )
}
