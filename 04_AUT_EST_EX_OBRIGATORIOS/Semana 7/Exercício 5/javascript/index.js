

// var aluno = 1;
// var inputs = ``;
// var i = 1;
// var final = ""
// var string = `<div id = "aluno${aluno}"><input type = "number" id = "notaAluno${aluno}" name = "nota" placeholder="Prova Aluno ${aluno}"><label for = "nota"> - Insira a nota da prova do aluno ${aluno} aqui</label><br><input type = "number" id = "trabalhoAluno${aluno}" placeholder = "Trabalho Aluno ${aluno}"><label for = "nota"> - Insira a nota do trabalho do aluno ${aluno} aqui</label><br><br></div>`
// function adicionar() {
//     var qtd = Number($("#valorEntrada").val());
//     if (qtd != null && qtd != NaN) {
//         let i = 0;
//         while (i != qtd) {
//             final += `<div id = "aluno${aluno}"><input type = "number" id = "notaAluno${aluno}" name = "nota" placeholder="Prova Aluno ${aluno}"><label for = "nota"> - Insira a nota da prova do aluno ${aluno} aqui</label><div id = "resultprovaaluno${aluno}></div>"<br><input type = "number" id = "trabalhoAluno${aluno}" placeholder = "Trabalho Aluno ${aluno}"><label for = "nota"> - Insira a nota do trabalho do aluno ${aluno} aqui</label><div id = "resulttrabalhoaluno${aluno}></div>"<br><br></div>`;
//             aluno += 1;
//             i += 1;
//         }
//         $("#result").html(final);
//     }
//     else {
//         inputs += `<div id = "aluno${aluno}"><input type = "number" id = "notaAluno${aluno}" name = "nota" placeholder="Prova Aluno ${aluno}"><label for = "nota"> - Insira a nota da prova do aluno ${aluno} aqui</label><br><input type = "number" id = "trabalhoAluno${aluno}" placeholder = "Trabalho Aluno ${aluno}"><label for = "nota"> - Insira a nota do trabalho do aluno ${aluno} aqui</label><br><br></div>`;
//         aluno += 1;
//         $("#result").html(inputs);
//     }
//     $("#valorEntrada").val("")
// }
// var k = 1;
// var soma = 0
// var somatrabalho = 0;
// var listaProva = [];
// var listaTrabalho = [];
// var quant = 1;
// function save() {
//     while (k < aluno) {
//         let provaAluno = Number($(`#notaAluno${k}`).val());
//         let trabalhoAluno = Number($(`#trabalhoAluno${k}`).val());
//         let media = 0;
//         media = (provaAluno*2 + 3*trabalhoAluno)/5
//         $("#values").append(`Média do aluno ${k}: ` + media + "<br>")
//         let mediaGeral = 0;
//         var mediaProva = 0;
//         var mediaTrabalho = 0;
//         let menorProva;
//         let maiorTrabalho;
//         k += 1;
//         soma += provaAluno;
//         somatrabalho += trabalhoAluno;
//         quant += 1;
//         listaProva.push(provaAluno);
//         listaTrabalho.push(trabalhoAluno);
//     }
//     mediaTrabalho = somatrabalho/quant;
//     mediaProva = soma/quant;
//     $("#values").append("Existem " + quant + " provas e " + quant + " trabalhos e a média aritmética entre eles é, respectivamente: " + mediaProva + " e " + mediaTrabalho + " " + quant);
//     var a = 0;
//     var m = 0;
//     var maiorProva = listaProva[m]
//     var menorProva
//     var maiorTrabalho
//     var menorTrabalho
//     while (a < listaProva.length) {
//         if (listaProva[m] < listaProva[m+1]) {
//             maiorProva = listaProva[m+1];
//         }
//         if (listaTrabalho[m] < listaTrabalho[m+1]) {
//             maiorTrabalho = listaTrabalho[m+1];
//         }
//         a += 1
//         m += 1
//     }
//     a = 0;
//     m = 0;
//     menorTrabalho = listaTrabalho[m]
//     menorProva = listaProva[m]
//     while (a <   listaProva.length) {
//         if (listaProva[m] > listaProva[m+1]) {
//             menorProva = listaProva[m+1];
//         }
//         if (listaTrabalho[m] > listaTrabalho[m+1]) {
//             menorTrabalho = listaTrabalho[m+1];
//         }
//         a += 1
//         m += 1
//     }
//     $("#values").append(`<br>Notas da prova: Maior = ${maiorProva}, Menor = ${menorProva}.<br> Notas do trabalho: Maior = ${maiorTrabalho}, Menor = ${menorTrabalho}.`)
//     $("#values").append('<br>Média geral = '+ (soma*2+somatrabalho*3)/5)
// }
//-----------------------------------------------------------------------------------------------------------------------------;-



function calc(){
    ns = document.getElementById('ns').value; // ns = number of students
    text = ""
    for(let i = 0; i < ns; i++){
        text +=
        `<input type="text" id="student${i}" placeholder="Nome do Aluno">` +
        `<input type="number" id="gradeExam${i}" placeholder="Nota da Prova">` +
        `<input type="number" id="gradeProject${i}" placeholder="Nota do Trabalho">` +
        `<p id=mediaStudent${i}></p>`
    }
    text += "<button type='button' onclick='allFunctions()'>Calcular</button>"
    $("#out").html(text)
}


function allFunctions(){
    mediaStudent();
    allMedia();
    allMediaExam();
    allMediaProject();
    minMaxExam()
    minMaxProject()
}


function mediaStudent(){
    ns = document.getElementById('ns').value;
    let mS = 0
    for(let i = 0; i < ns; i++){
        gE = (Number($(`#gradeExam${i}`).val()) * 2) / 5;
        gP = (Number($(`#gradeProject${i}`).val()) * 3) / 5;
        mS = gE + gP
        $(`#mediaStudent${i}`).html("Média do aluno = " + mS.toFixed(1));
    }
}


function allMedia(){
    ns = document.getElementById('ns').value;
    let aM = 0
    for(let i = 0; i < ns; i++){
        gE = (Number($(`#gradeExam${i}`).val()) * 2) / 5;
        gP = (Number($(`#gradeProject${i}`).val()) * 3) / 5;
        aM += gE + gP
    }
    aM /= ns
    $(`#allMedia`).html("Média geral = " + aM.toFixed(1));
}


function allMediaExam(){
    ns = document.getElementById('ns').value;
    let gE = 0
    let g = 0
    for(let i = 0; i < ns; i++){
        gE += (Number($(`#gradeExam${i}`).val()) * 2) / (ns * 2);;
    }
    // g /= ns
    $('#allMediaExam').html("Média aritmética das provas = " + gE.toFixed(1));
}


function allMediaProject(){
    ns = document.getElementById('ns').value;
    let gP = 0
    let g = 0
    for(let i = 0; i < ns; i++){
        gP += (Number($(`#gradeProject${i}`).val()) * 3) / (ns * 3);;
    }
    // g /= ns
    $('#allMediaProject').html("Média aritmética dos trabalhos = " + gP.toFixed(1));
}

function minMaxExam(){
    ns = document.getElementById('ns').value;
    array = []
    for(let i = 0; i < ns; i++){
        array[i] = Number($(`#gradeExam${i}`).val())
    }
    let check = true;
    do {
        check = false;
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                let i = array[j];
                array[j] = array[j + 1];
                array[j + 1] = i;
                check = true;
            }
        }
    } while (check);
    document.getElementById("minMaxExam").innerHTML = ("A menor nota de prova: " + array[0].toFixed(1) + "<br>A maior nota de prova: " + array[ns-1].toFixed(1));
}


function minMaxProject(){
    ns = document.getElementById('ns').value;
    array = []
    for(let i = 0; i < ns; i++){
        array[i] = Number($(`#gradeProject${i}`).val())
    }
    let check = true;
    do {
        check = false;
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                let i = array[j];
                array[j] = array[j + 1];
                array[j + 1] = i;
                check = true;
            }
        }
    } while (check);
    document.getElementById("minMaxProject").innerHTML = ("A menor nota de trabalho: " + array[0].toFixed(1) + "<br>A maior nota de trabalho: " + array[ns-1].toFixed(1));
}