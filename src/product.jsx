import "./product.css";
export default function Product({ title, card1,card2,card3,card4}) {
    return (
        <div className="product">
            <h2> {title}</h2>
            <div className="card-parent">
                <div className="card1">
                    <p>{card1}</p>
                
                </div>
                <div className="card1">
                    <p>{card2}</p>

                </div>
                <div className="card1">
                    <p>{card3}</p>
                </div>
                <div className="card1">
                    <p>{card4}</p>
                </div>
            </div>
        </div>
    )
}