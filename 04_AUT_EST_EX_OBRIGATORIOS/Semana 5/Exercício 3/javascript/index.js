function calc() {
    var array = document.getElementById("array").value;
    var array = array.split(",");
    var array = array.map(i);
    sortItems(array);
    binarySearch(array, target);
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
    document.getElementById("showArray").innerHTML = ("Sua array ordenada: " + array);
	return array
}


function binarySearch(array) {
    let target = parseInt(document.getElementById("target").value);
    let first = 0;
    let last = array.length - 1;
    while (first <= last){
        middle = Math.ceil((first+last)/2);
        if (array[middle] == target){
            return document.getElementById("showTarget").innerHTML = ("Posição: " + middle);
        }
        else {
            if (array[middle] < target) {
                first = middle + 1;
            }
            else {
                last = middle - 1;
            }
        }
    }
    return document.getElementById("showTarget").innerHTML = ("Seu alvo não está na array.");
}


function i(number) {
    return parseInt(number)
}