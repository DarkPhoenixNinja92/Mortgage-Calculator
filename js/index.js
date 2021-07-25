let loanSize = parseInt(document.getElementById(("loan-val").value));
let loanRate = document.getElementById(("interest-rate").value);
let loanTerm = document.getElementById(("loan-period").value);

let submitVal = () => {
    console.log(loanSize);
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("loan-submit").addEventListener('click', submitVal);
})