

// Fuction one to ten


function one () {
    var elem = document.getElementById("resultt").textContent; 
    if (elem == 0) {
        elem = "";
    }

    var total = elem    + 1;
    console.log(elem + 1);
    document.getElementById('resultt').innerText = total;
}

function two() {
    var elem = document.getElementById("resultt").textContent; 
    if (elem == 0) {
        elem = "";
    }
    var total = elem + 2;
    console.log(elem + 2);
    document.getElementById('resultt').innerText = total;
}

function three() {
    var elem = document.getElementById("resultt").textContent; 
    if (elem == 0) {
        elem = "";
    }
    var total = elem + 3;
    console.log(elem + 3);
    document.getElementById('resultt').innerText = total;
}

function four() {
    var elem = document.getElementById("resultt").textContent; 
    if (elem == 0) {
        elem = "";
    }
    var total = elem + 4;
    console.log(elem + 4);
    document.getElementById('resultt').innerText = total;
}

function five() {
    var elem = document.getElementById("resultt").textContent; 
    if (elem == 0) {
        elem = "";
    }
    var total = elem + 5;
    console.log(elem + 5);
    document.getElementById('resultt').innerText = total;
}

function six() {
    var elem = document.getElementById("resultt").textContent; 
    if (elem == 0) {
        elem = "";
    }
    var total = elem + 6;
    console.log(elem + 6);
    document.getElementById('resultt').innerText = total;
}

function seven() {
    var elem = document.getElementById("resultt").textContent;
    if (elem == 0) {
        elem = "";
    } 
    var total = elem + 7;
    console.log(elem + 7);
    document.getElementById('resultt').innerText = total;
}

function eight() {
    var elem = document.getElementById("resultt").textContent; 
    if (elem == 0) {
        elem = "";
    }
    var total = elem + 8;
    console.log(elem + 8);
    document.getElementById('resultt').innerText = total;
}

function nine() {
    var elem = document.getElementById("resultt").textContent;
    if (elem == 0) {
        elem = "";
    } 
    var total = elem + 9;
    console.log(elem + 9);
    document.getElementById('resultt').innerText =  total;
}

// function point() {
//     var elem = document.getElementById("resultt").textContent; 
//     var total = elem + .;
//     console.log(elem + .);
//     document.getElementById('resultt').innerText = Number(total);
// }

function zero() {
    var elem = document.getElementById("resultt").textContent; 
    var total = elem + 0;
    console.log(elem + 0);
    document.getElementById('resultt').innerText = Number(total);
}

// function doublepoint() {
//     var elem = document.getElementById("resultt").textContent; 
//     var total = elem + 00;
//     console.log(elem + 00);
//     document.getElementById('resultt').innerText = Number(total);
// }



// Fuction Tematik

function allclear() {
    var elem = document.getElementById("resultt");
    elem.textContent = "0";
}

  function plusminus() {
    var elem = document.getElementById("resultt");
    elem.textContent = "-";
}

function percent() {
    var elem = document.getElementById("resultt");  
    elem.textContent = "%";
  }
function tambah() {
    var elem = document.getElementById("resultt").textContent; 
    var total = elem + "+";
    console.log(elem);
    document.getElementById('resultt').innerText = total;
}

function kurang() {
    var elem = document.getElementById("resultt").textContent; 
    var total = elem + "-";
    console.log(elem);
    document.getElementById('resultt').innerText = total;
}

function kali() {
    var elem = document.getElementById("resultt").textContent; 
    var total = elem + "×"; 
    console.log(elem);
    document.getElementById('resultt').innerText = total;
}

function bagi() {
    var elem = document.getElementById("resultt").textContent; 
    var total = elem + "÷"; 
    console.log(elem);
    document.getElementById('resultt').innerText = total;
}

function samadengan() {
    var elem = document.getElementById("resultt").textContent; 
    console.log(elem);
    // document.getElementById('resultt').innerHTML = total;
    // var total = elem + "="; 

    let parts = elem.trim().split('+');
    console.log(parts);
    let operand1 = Number(parts[0]);
    let operand2 = Number(parts[1]);

    let result = operand1 + operand2;
    console.log(result);
    document.getElementById('resultt').innerHTML= result;

    if (elem.includes("+")) {
        let parts = elem.trim().split('+');
    console.log(parts);
    let operand1 = Number(parts[0]);
    let operand2 = Number(parts[1]);

    let result = operand1 + operand2;
    console.log(result);
    document.getElementById('resultt').innerHTML = result;
    } else if (elem.includes("-")) {
        let parts = elem.trim().split('-');
        console.log(parts);
        let operand1 = Number(parts[0]);
        let operand2 = Number(parts[1]);
    
        let result = operand1 - operand2;
        console.log(result);
        document.getElementById('resultt').innerHTML = result;

    } else if (elem.includes("×")) {
        let parts = elem.trim().split('×');
        console.log(parts);
        let operand1 = Number(parts[0]);
        let operand2 = Number(parts[1]);
    
        let result = operand1 * operand2;
        console.log(result);
        document.getElementById('resultt').innerHTML = result;
        
    } else if (elem.includes("÷")) {
        let parts = elem.trim().split('÷');
        console.log(parts);
        let operand1 = Number(parts[0]);
        let operand2 = Number(parts[1]);
    
        let result = operand1 / operand2;
        console.log(result);
        document.getElementById('resultt').innerHTML = result;
    }
}