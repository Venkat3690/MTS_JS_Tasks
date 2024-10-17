function sortArray(){
    const inputArray = document.getElementById("inputArray").value;
    let array = inputArray.split(',').map(Number);
    array.sort(function(a, b) {
        return b - a;
    });
    document.getElementById("result").textContent = `Sorted Array: ${array.join(', ')}`;
}
