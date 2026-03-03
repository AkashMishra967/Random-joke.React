
import Product from "./product.jsx";
import Price from "./price.jsx";
function productTab() {
    return (
        <>
            <Product
                title="Blockbuster Deals on Computer Accessories | Shop Now"
                card1={
                    <>
                        <h3>Logitech MX Master</h3>
                        <p><b>800 DPI</b></p>
                        <p>5 Programmable Buttons</p>
                        <Price oldPrice="12,495" newPrice="8,999" />

                    </>
                }
                card2={
                    <>
                        <h3>Apple Pencil (2nd Gen)</h3>
                        <p>Intuttive Touch Surface</p>
                        <p>Designed for iPad Pro</p>
                        <Price oldPrice="11,900" newPrice="9,199" />


                    </>
                }
                card3={
                    <>
                        <h3>Zebronics</h3>
                        <p>Designed for iPad Pro</p>
                        <p>Intuitive Touch Surface</p>
                        <Price oldPrice="1,599" newPrice="899" />


                    </>
                }
                card4={
                    <>
                        <h3>Petronics Toad</h3>
                        <p> Wireless Mouse 2.4GHz</p>
                        <p>Optical Orientation</p>
                        <Price oldPrice="599" newPrice="278" />

                    </>
                }

            />
        </>
    )
}
export default productTab