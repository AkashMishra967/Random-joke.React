import "./price.css";
function Price ({oldPrice,newPrice}){
    return(
        <>
        <p className="para1">
                            <span className="old-price">{oldPrice}</span>
                            <span className="new-price">{newPrice}</span>
                        
                            
                        </p>
                       
        </>
    )
}
export default Price;