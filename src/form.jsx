
function handleFormSubmit(event){
    event.preventDefault();
    console.log("From was submitted");
    console.log("nhi kruga submit");
}


export default function form(){
    return(
        <form onSubmit={handleFormSubmit}>
            <input placeholder="written something"/>
            <button>Submit</button>
            
        </form>
    );
}