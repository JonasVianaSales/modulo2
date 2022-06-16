function calc() {   
    var array = document.getElementById("array").value;
    var array = array.split("");
    if (array.length != 3){
        return document.getElementById('out').innerHTML = ("Formato inválido.");
    }
    if (array[0] % 2 == 0){
        return document.getElementById('out').innerHTML = ("O primeiro número da sua centena é par.");
    }
    return document.getElementById('out').innerHTML = ("O primeiro número da sua centena é impar.");
}