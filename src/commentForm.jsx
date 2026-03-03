import { useState } from "react"
import {useFormik} from "formik";

const validate = (values)=>{
    const errors = {};
    if(!values.username){
        errors.username = "Username cannot be empty!";

    }
    return errors;
    
};






export default function CommentForm({ addNewComment }) {
    // let [formData, setFormData] = useState({
    //     username: "",
    //     remarks: "",
    //     rating: 5,
    // });

    const formik = useFormik({
        initialValues:{
            username: '',
            remarks:'',
            rating: 5,
        },
        validate,
        onSubmit: values =>{
            alert(JSON.stringify(values,null,2));
        },
    });

    // let handleInputChange = (event) => {
    //     setFormData((currData) => {
    //         return { ...currData, [event.target.name]: event.target.value };
    //     });
    // };

    // let handleSubmit = (event) => {
   
    //     console.log(formData);
    //     addNewComment(formData);
    //     event.preventDefault();
    //     setFormData({
    //         username: "",
    //         remarks: "",
    //         rating: 5,

    //     })
    // }

    return (
        <div>
            <h4>Give a comment !</h4>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username">Username</label>
                <input placeholder="username" id="username" name="username" type="text"
                 onChange={formik.handleChange}
                    value={formik.values.username} />
                    {formik.errors.username? <p style={{color:"red"}}>{formik.errors.username}</p> : null}
                    {formik.errors.remarks? <p style={{color:"red"}}>{formik.errors.remarks}</p> : null}
                <br></br> <br></br>
                <label htmlFor="remarks">Remarks</label>
                <textarea value={formik.values.remarks} name="remarks" placeholder="add few remarks" id="remarks"
                    onChange={formik.handleChange}>Remarks</textarea>
                <br></br><br></br>
                <label htmlFor="rating">Rating</label>
                <input placeholder="rating" name="rating" type="number" id="rating"
                 onChange={formik.handleChange}
                    min={1} max={5} value={formik.values.rating} />
                <br></br><br></br>
                <button type="submit">Add Comment</button>
            </form>
        </div>
    )
}