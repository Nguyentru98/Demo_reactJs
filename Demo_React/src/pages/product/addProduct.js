
import {Formik ,Field,Form} from "formik"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function AddProduct() {
    const navigate = useNavigate()
    return (
        <>
            <h1>Add products</h1>
            <Formik initialValues={{
                title:'',
                price:'',
                description:''
            }}
                onSubmit={(values) =>{
                    axios.post("http://localhost:3001/products",values).then(()=>{
                         alert("them san pham thanh cong")
                         navigate('/product')
                    })
                }}
            >
                <Form>
                    <Field name = {'title'}></Field>
                    <Field name = {'price'}></Field>
                    <Field name = {'description'}></Field>
                    <button>save</button>
                </Form>
                
            </Formik>
        </>
    )
}