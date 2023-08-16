
import {Formik ,Field,Form} from "formik"
import axios from "axios"
export default function AddProduct() {
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
                    })
                }}
            >
                <Form>
                    <Field name = {'title'}></Field>
                    <Field name = {'price'}></Field>
                    <Field name = {'description'}></Field>
                    <button type="submit">save</button>
                </Form>
                
            </Formik>
        </>
    )
}