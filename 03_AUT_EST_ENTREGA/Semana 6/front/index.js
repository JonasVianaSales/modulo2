function email(){
    document.getElementById("email").innerHTML = "jonas.sale@sou.inteli.edu.br";
    getData();
}

var darkModeClick = false

function darkMode() {
    if (darkModeClick == false) {
        $("body").css({"background-color": "black"});
        $("footer").css({"background-color": "gray"});
        $("h1").css({"color": "white"});
        $("#separator>div").css({"background-color": "gray", "border": "10px solid black"});
        $("button").css({"background-color": "black", "color": "white"});
        darkModeClick = true;
    }
    else {
        $("body").css("background-color", "skyblue");
        $("footer").css({"background-color": "aliceblue"});
        $("h1").css("color", "black");
        $("#separator>div").css({"background-color": "aliceblue", "border": "10px solid skyblue"});
        $("button").css({"background-color": "skyblue", "color": "black"});
        darkModeClick = false;
    }
}

function getData(){
        $.get('http://127.0.0.1:3000/uau22', function(data){
            $('#title').html(data[0].title);
            $('#text').html(data[0].text);
        })
}