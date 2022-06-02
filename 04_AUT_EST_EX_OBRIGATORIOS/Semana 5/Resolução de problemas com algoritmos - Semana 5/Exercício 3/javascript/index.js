function calc() {
    var array = document.getElementById("array").value;
    var array = array.split(",");
    var array = array.map(i);
    sortItems(array);
    targetFinder(array);
}


function sortItems(array) {
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
    document.getElementById("showArray").innerHTML = array;
	return array
}


function targetFinder(array) {
    let target = parseInt(document.getElementById("target").value);
    for (let j = 0; j < array.length; j++) {
        if (array[j] == target) {
            return document.getElementById("out").innerHTML = ("Seu alvo está na posição " + j + ".")
        }
    }
    return document.getElementById("out").innerHTML = ("Seu alvo não está na array.")
}


function i(number) {
    return parseInt(number)
}