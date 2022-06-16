function calc() {
    var fib = document.getElementById('fib').value;
    if (fib < 2){
        return document.getElementById("out").innerHTML = ("Vamos lá, tá muito pequeno!");
    }
    var array = [0, 1];
    for (let i = 2; i < fib; i++){
        array[i] = array[i - 1] + array[i- 2];
    }
    return document.getElementById("out").innerHTML = (array);
}

