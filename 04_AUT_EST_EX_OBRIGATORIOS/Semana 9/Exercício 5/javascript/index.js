function calc(){
    var n1 = parseFloat(document.getElementById('slot1').value); // n1 = 2
    var n2 = parseFloat(document.getElementById('slot2').value); // n2 = 7
    var check = false
    var array = []
    let i = 1
    var placeArray = 0
    for (n1; n1 <= n2; n1++){ //i = 2; 2 < 7; i++
        if (n1 === 2){
            check = true
        }
        for (i = 2; i < n1; i++){
            if (n1 % i !== 0){
                check = true
            }
            else{
                check = false
                break
            }
        }
        if (check == true){
            array[placeArray] = n1
            placeArray += 1
            check = false
        }
    }
    return document.getElementById('out').innerHTML = ('Todos os números primos dentro desse intervalo: ' + array)
}