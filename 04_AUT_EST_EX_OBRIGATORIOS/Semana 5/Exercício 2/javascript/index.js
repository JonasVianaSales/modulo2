function calc(){
    var money = document.getElementById("money").value
    var n100 = ~~(money/100)
    var money = money%100
    var n50 = ~~(money/50)
    var money = money%50
    var n20 = ~~(money/20)
    var money = money%20
    var n10 = ~~(money/10)
    var money = money%10
    var n5 = ~~(money/5)
    var money = money%5
    var n2 = ~~(money/2)
    var money = money%2
    var n1 = money
    document.getElementById("out").innerHTML = ("Notas de 100: " + n100 +
    "<br>Notas de 50: " + n50 +
    "<br>Notas de 20: " + n20 +
    "<br>Notas de 10: " + n10 +
    "<br>Notas de 5: " + n5 +
    "<br>Notas de 2: " + n2 +
    "<br>Notas de 1: " + n1);
}

