var buttonBuyTicket = document.querySelectorAll(".list_addressEven .buyWithEven .buy_ticket");

var boxSend = document.querySelector(".box_buy-ticket");

var lengthBuyTicket=buttonBuyTicket.length;
for(let i=0; i< lengthBuyTicket; i++) {
    buttonBuyTicket[i].onclick = function () {
        boxSend.classList.add('active');
    }
}

var iconClose1 = document.querySelector(".box_buy-ticket .box .box_heading .button-hover")
iconClose1.onclick  = () => {
    boxSend.classList.remove('active');
}
var iconClose2 = document.querySelector(".box_buy-ticket .box .box_footer .button-hover")
iconClose2.onclick  = () => {
    boxSend.classList.remove('active');
}
/*
var mainBox = document.querySelector(".box_buy-ticket .box")
boxSend.onclick = () => {
    var value = boxSend.onclick = () => 1;
    var value = mainBox.onclick = () => 0;
    if(value === 1) {
        boxSend.classList.remove('active');
    }
    console.log(value)
}
*/
// cài đặt slider
var slider = document.querySelectorAll('.slider .slider_box')
console.log(slider)
var i =-1;
setInterval(() => {
    if(i!=-1) {
        slider[i].classList.remove('active');
    }
    if(i===2) {
        i=-1;
    }
    slider[i+1].classList.add('active');
    i++;
}, 3000);