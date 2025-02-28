/*======== Quests quantity total number count =========*/
function qtySumary(){
    var qtyInputField = document.getElementsByName('qtyInput');
    var totalNumber = 0;
    for(var i = 0; i < qtyInputField.length; i++){
        if(parseInt(qtyInputField[i].value))
            totalNumber += parseInt(qtyInputField[i].value);
    }

    var cardQty = document.querySelector(".guestTotal");
    var cardQty_2 = document.querySelector(".guestTotal_2");
    var cardQty_3 = document.querySelector(".guestTotal_3");
    var cardQty_4 = document.querySelector(".guestTotal_4");
    var cardQty_5 = document.querySelector(".guestTotal_5");
    var cardQty_6 = document.querySelector(".guestTotal_6");
    var cardQty_7 = document.querySelector(".guestTotal_7");
    var cardQty_8 = document.querySelector(".guestTotal_8");
    var cardQty_9 = document.querySelector(".guestTotal_9");
    if (cardQty) {
        cardQty.innerHTML = totalNumber;
    }
    if (cardQty_2) {
        cardQty_2.innerHTML = totalNumber;
    }
    if (cardQty_3) {
        cardQty_3.innerHTML = totalNumber;
    }
    if (cardQty_4) {
        cardQty_4.innerHTML = totalNumber;
    }
    if (cardQty_5) {
        cardQty_5.innerHTML = totalNumber;
    }
    if (cardQty_6) {
        cardQty_6.innerHTML = totalNumber;
    }
    if (cardQty_7) {
        cardQty_7.innerHTML = totalNumber;
    }
    if (cardQty_8) {
        cardQty_8.innerHTML = totalNumber;
    }
    if (cardQty_9) {
        cardQty_9.innerHTML = totalNumber;
    }
}
qtySumary();

//$(".qtyBtn input").before('<div class="qtyDec"><i class="fa fa-minus"></i></div>');
//$(".qtyBtn input").after('<div class="qtyInc"><i class="fa fa-plus"></i></div>');
//$(".roomBtn input").before('<div class="roomDec"><i class="fa fa-minus"></i></div>');
//$(".roomBtn input").after('<div class="roomInc"><i class="fa fa-plus"></i></div>');

//$(".qtyDec, .qtyInc").on("click", function() {

//    var $button = $(this);
//    var oldValue = $button.parent().find("input").val();

//    if ($button.hasClass('qtyInc')) {
//        var newVal = parseFloat(oldValue) + 1;
//    } else {
//        // don't allow decrementing below zero
//        if (oldValue > 0) {
//            var newVal = parseFloat(oldValue) - 1;
//        } else {
//            newVal = 0;
//        }
//    }

//    $button.parent().find("input").val(newVal);
//    qtySumary();
//});

/*======== Room quantity total number count =========*/
function roomSumary(){
    var qtyInputField_2 = document.getElementsByName('roomInput');
    var totalNumber_2=0;
    for(var i = 0; i < qtyInputField_2.length; i++){
        if(parseInt(qtyInputField_2[i].value))
            totalNumber_2 += parseInt(qtyInputField_2[i].value);
    }

    var roomQty = document.querySelector(".roomTotal");
    var roomQty_2 = document.querySelector(".roomTotal_2");
    var roomQty_3 = document.querySelector(".roomTotal_3");
    var roomQty_4 = document.querySelector(".roomTotal_4");
    if (roomQty) {
        roomQty.innerHTML = totalNumber_2;
    }
    if (roomQty_2) {
        roomQty_2.innerHTML = totalNumber_2;
    }
    if (roomQty_3) {
        roomQty_3.innerHTML = totalNumber_2;
    }
    if (roomQty_4) {
        roomQty_4.innerHTML = totalNumber_2;
    }
}
roomSumary();

///*======== Room quantity increment decrement =========*/
//$(".roomInc, .roomDec").on("click", function() {

//    var $button = $(this);
//    var oldValue = $button.parent().find("input").val();

//    if ($button.hasClass('roomInc')) {
//        var newVal = parseFloat(oldValue) + 1;
//    } else {
//        // don't allow decrementing below zero
//        if (oldValue > 0) {
//            var newVal = parseFloat(oldValue) - 1;
//        } else {
//            newVal = 0;
//        }
//    }

//    $button.parent().find("input").val(newVal);
//    roomSumary();

//});