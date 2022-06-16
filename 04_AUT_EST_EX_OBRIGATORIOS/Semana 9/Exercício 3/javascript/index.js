function calc() {
    var array = document.getElementById("array").value;
    var array = array.split(", ");
    if (array.length != 3){
        document.getElementById("out").innerHTML = ("Somente três nomes!");
    }
    sortItems(array)
    // var array = array.map(i);
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
    document.getElementById("out").innerHTML = ("Sua array ordenada: " + array);
	return array
}