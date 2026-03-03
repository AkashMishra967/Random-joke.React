
function printHello(){
    console.log("Hello");
}

function byPrint(){
    console.log("hum na to bahut dust ho");
}

export default function Button(){
    return (
        <div>
            <button onClick={printHello}>Click me</button>
            <p onClick={byPrint}>Tap on this para</p>
        </div>
    );
}