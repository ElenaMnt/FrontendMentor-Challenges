const toggleBtn = document.querySelector('.toggleBtn');
const boxPrice = document.getElementsByClassName('boxPrice');
const monthlyPrices = ["19.99", "24.99", "39.99"];
const annualPrices = ["199.99", "249.99", "399.99"];

toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle('checked');

    changePriceFunc();
})

function changePriceFunc(){
    if(toggleBtn.classList.contains('checked')){
        for(let idx = 0 ; idx < annualPrices.length; idx++){
            boxPrice[idx].innerHTML = `<span class="priceDollar">&dollar;</span> ${annualPrices[idx]}`;
        }
    }
    else{      
          for(let idx = 0 ; idx < monthlyPrices.length; idx++){
            boxPrice[idx].innerHTML = `<span class="priceDollar">&dollar;</span> ${monthlyPrices[idx]}`;
        }
    }
}
