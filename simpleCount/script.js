const countLabel = document.getElementById('countLabel');
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById('resetBtn');

let count = 0;

increaseBtn.onclick = function () { 
    count++;
    countLabel.textContent = count;
}
decreaseBtn.onclick = function () { 
    count--;
    countLabel.textContent = count;
}
resetBtn.onclick = function () { 
    count = 0;
    countLabel.textContent = count;
}