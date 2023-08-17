import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function ListProduct() {
    const [list, setList] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:3001/products').then(res =>{
            setList(res.data)
        })
    },[])
    
    function deletePr(id) {

      axios.delete('http://localhost:3001/products/' + id).then(() => {
          console.log('xoa thanh cong')
          
        axios.get('http://localhost:3001/products').then(res =>{
          setList(res.data)
      })
      })
  };
      
    return (
        <>

            <h1>List Product</h1>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">title</th>
      <th scope="col">price</th>
      <th scope="col">description</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {list.map((item, key) =>{
                 return (
                        <tr key={key}>
                          <td>{item.title}</td>
                          <td>{item.price}</td>
                          <td>{item.description}</td>
                          <Link to={'/edit/'+item.id}>
                            <td><button type="button" className="btn btn-success">Edit</button></td></Link><td>
                            <button type="button" className="btn btn-danger" onClick={()=>{deletePr(item.id)}}>Delete</button></td>
                        </tr>
                 )
            })}
  </tbody>
</table>
        </>


    )
}