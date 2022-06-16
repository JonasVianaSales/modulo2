function calc() {
    var array = document.getElementById("array").value;
    var array = array.split("");
    console.log(array)
    if (array[0] != '(' || array[3] != ')' || array[9] != '-' || array.length != 14){
        return document.getElementById('out').innerHTML = ("Formato inválido.");
    }
    return document.getElementById('out').innerHTML = ("Número enviado!");
    // var array = array.map(i);
}

// function i(number) {
//     return parseInt(number)
// }