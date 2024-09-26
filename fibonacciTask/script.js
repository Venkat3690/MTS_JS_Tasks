function generateFibonacci(n) {
    let fibonacciSeries = [0, 1];
    for (let i = 2; i < n; i++) {
        fibonacciSeries[i] = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
    }
    return fibonacciSeries;
}
function displayFibonacciInReverse(n) {
    const fibonacciSeries = generateFibonacci(n);
    const reversedSeries = fibonacciSeries.reverse();
    document.getElementById("result").innerHTML="Fibonacci Series in Reverse Order:"+reversedSeries.join(", ");
}
function fibonacciSeriesInReverse(){
    let n=parseInt(document.getElementById("inputTerms").value);
    displayFibonacciInReverse(n);
}