 
 import { Link } from "react-router-dom"
export default function Login() {
    return (
        <div className='row'>
            <div className="offset-3 col-6 nt-5" >
                <h1 style={{textAlign:"center"}}>Login</h1>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="text" className={"form-control"} />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="text" className={"form-control"} />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                <button type="submit" class="btn btn-primary">
                    <Link to={'register'} style={{textDecoration:"none", color:"white"}}>Login</Link>
                    </button>
                </form>
            </div>

        </div>
    )
}