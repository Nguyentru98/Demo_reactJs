import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function UpdateProduct() {
    const { id } = useParams(); // Lấy ID của sinh viên từ URL
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:3001/products/${id}`)
            .then((response) => {
                const product = response.data;
                setTitle(product.title);
                setPrice(product.price);
                setDescription(product.description);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleSubmit = () => {
        const updatedProduct = {
            title: title,
            price: price,
            description: description
        };

        // Gửi yêu cầu PUT để cập nhật thông tin sinh viên
        axios.put(`http://localhost:3001/products/${id}`, updatedProduct)
            .then(() => {
                alert("Cập nhật thành công");
                navigate('/product')
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <h1>Update Products</h1>
            <form>
                <label>Tittle:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <br/>
                <label>Price:</label>
                <input
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <br/>
                <label>Description</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <br/>
                <button type="button" onClick={handleSubmit}>
                    Save
                </button>
            </form>
            <hr />
        </>
    );
}

