function calc() {
    var n1 = parseFloat(document.getElementById('slot1').value);
    var n2 = parseFloat(document.getElementById('slot2').value);
    console.log(n1)
    var operator = document.querySelector('input[name="number"]:checked').value;
    if (n1 && n2 && operator){
        var out = document.getElementById("out")
        switch (operator){
            case "plus":
                out.innerText = n1+n2;
                break
            case "minus":
                out.innerText = n1-n2;
                break
            case "times":
                out.innerText = n1*n2;
                break
            case "dissection":
                out.innerText = n1/n2;
                break
            case "integer dissection":
                out.innerText = ~~(n1/n2)
                break
            case "modulus":
                out.innerText = n1%n2
                break
        }
    } 
}

