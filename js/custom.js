document.getElementById('shoes-section').style.color = "coral";
document.getElementById('backpack-secton').style.backgroundColor = "#9932CC";
document.getElementById('backpack-secton').style.color = "#fff";
document.getElementById('backpack-secton').style.display = "inline";
const cards = document.getElementsByClassName('card');
for (const card of cards) {
    card.style.borderRadius = "30px";
    card.style.paddingBottom = "30px";
}
function buttonEffect() {
    console.log("Button is clicked");
}
const allButtons = document.getElementsByClassName('card-footer');
for (const button of allButtons) {
    button.addEventListener('click', function (event) {
        event.target.parentNode.removeChild(event.target);
    })
}

const userInput = document.getElementById('input-fild');
userInput.addEventListener('keyup', function (event) {
    if (event.target.value == 'email') {
        document.getElementById('submit-button').removeAttribute('disabled');
    }
    else {
        document.getElementById('submit-button').setAttribute('disabled', true);
    }
})
const shoeImage1 = document.getElementById('shoe-1');
shoeImage1.addEventListener('mouseover', function () {
    shoeImage1.src = "images/shoes/shoe-3.png";
})
shoeImage1.addEventListener('mouseout', function () {
    shoeImage1.src = "images/shoes/shoe-1.png";
})
const SubscribeArea = document.getElementById('subscribe');
SubscribeArea.addEventListener('dblclick', function () {
    SubscribeArea.style.backgroundColor = "#9932CC";
})
