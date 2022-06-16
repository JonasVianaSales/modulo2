function calcPlus() {
    n = parseInt(document.getElementById("slot").value);
    n += 1;
    console.log(n)
    return document.getElementById('slot').value = n;
}


function calcMinus() {
    n = parseInt(document.getElementById('slot').value);
    n -= 1;
    console.log(n)
    return document.getElementById('slot').value = n;
}