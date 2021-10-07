function Newcolor(){
    var symbol,color;
    symbol = "0123456789ABCDEF";
    color = "#";
    for(var x =0;x<6;x++){
        color = color + symbol [Math.floor(Math.random() * 16)];
        
    }
    document.body.style.background = color;
    document.getElementById("hex").innerText = color;
}

// function newclor(){
//     var sybmlo, color;
//     sybmlo = "0123456789ABCDEF";
//     color = "#";
//     for(var i = 0 ; i<6;i++){
//         color = color + sybmlo[Math.floor(Math.random()* 16)];
//     }
//     document.body.style.background = color;
//     document.getElementById("hex").innerHTML = color;
    
// }

function timer(){
    let start = TimeRanges
}