import { useState } from"react"
export default function Form(){
     
let [formData, setFormData] = useState({
    fullName: "",
    userName:"",
    password:"",
})

    // let handelNameChange = (event) =>{
    //     setFullName(event.target.value);
    // }

let handleInputChange = (event) => {
   

    setFormData ((currData) =>{
        return {...currData, [event.target.name]: event.target.value};
    })
};

let handleSubmit = (event) =>{
    event.preventDefault();
    setFormData({
     fullName:"",
    userName:"",
    password:"",

    });
};

   
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
            <input
             placeholder="enter full name"
              type="text"
              value={formData.fullName}
            id="fullName"
            name="fullName"
            onChange={handleInputChange}
            />
        
        <br/>
            <label htmlFor="userName">UserName</label>
            <input
             placeholder="enter  username"
              type="text" value={formData.userName} 
            id="userName"
            name="userName"
            onChange={handleInputChange}/>
            <br/><br/>
            <br/><br/>
            <label htmlFor="password">Password</label>
            <input
             placeholder="password"
              type="password" value={formData.password} 
            id="password"
            name="password"
            onChange={handleInputChange}/>
            <button>Submit</button>
        </form>
    )
}