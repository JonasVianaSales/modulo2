function calc() {
    var array = document.getElementById("array").value;
    var result = 0
    array = array.split("");
    array = array.map(i);
    for (let j = 0; j < array.length; j++){;
        result += array[j]
        console.log(result)
    }  
    return document.getElementById('out').innerHTML = (result);
}

function i(number) {
    return parseInt(number)
}