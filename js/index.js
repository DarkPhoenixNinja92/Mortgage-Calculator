let submitVal = () => {
    console.log("Is this thing on?");
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("loan-submit").addEventListener('click', submitVal);
})