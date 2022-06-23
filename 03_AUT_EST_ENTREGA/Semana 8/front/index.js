function email(){
    document.getElementById("email").innerHTML = "jonas.sale@sou.inteli.edu.br";
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
        $.get('http://127.0.0.1:3000/skills', function(data){
            $('#tdId').html(data[$("#id").val()].id);
            $('#tdTitle').html(data[$("#id").val()].title);
            $('#tdText').html(data[$("#id").val()].text);
        })
}

function insertData(){
        $.post("http://127.0.0.1:3000/insertskills", {
            "title": $("#title").val(),
            "text": $("#text").val()
        }, function(msg) {
            $("#result").html(msg);
        });
}


function updateData(){
        $.post('http://127.0.0.1:3000/updateskills', {
            "title": $('#title').val(),
            "text": $('#text').val(),
            "id": $('#id').val()
        }, function(msg) {
            $('#result').html(msg);
            console.log($("#title").val(), " ", $("#text").val(), " ", $("#id").val());
        })
}

function deleteData(){
        $.post('http://127.0.0.1:3000/deleteskills', {
            "id": $('#id').val()
        }, function(msg) {
            $('#result').html(msg);
            console.log($("#id").val());
        })
}