function actualPrice(){
    let costPrice=document.getElementById("costPrice").value;
    discount=0.2;
    let sellingPrice = costPrice-(costPrice * discount);
    var resultDiv = document.createElement("div");
    resultDiv.textContent = "The Calculated selling Price after applying 20% of discount is "+sellingPrice;
    document.body.appendChild(resultDiv);
}