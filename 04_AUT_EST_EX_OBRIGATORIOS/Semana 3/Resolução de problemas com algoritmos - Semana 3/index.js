function calc(){
    var veloini = document.getElementById("veloini").value;
    var answer = (veloini*veloini/(2*10));
    document.getElementById("resultado").innerHTML = "Altura máxima: " + answer;
}