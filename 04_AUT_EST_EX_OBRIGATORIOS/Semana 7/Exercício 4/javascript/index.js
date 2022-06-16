function calc() {
    var people = document.getElementById('slot').value;
    var n = people
    var day = document.querySelector('input[name="time"]:checked').value;
    switch (day){
        case "dia":
            people *= 200;
            if (n > 50){
                people *= 0.6
            }
            return document.getElementById('out').innerHTML = ("Total a ser pago: " + people);
        case "noite":
            people *= 100;
            if (n > 50){
                people *= 0.8
            }
            return document.getElementById('out').innerHTML = ("Total a ser pago: " + people)   ;
    }
}

