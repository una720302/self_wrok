let bill_amount;
let tip_one;
let tip_two;
let tip_three;
let tip_four;
let tip_five;
let number_of_people;
let tip;
let total_amount_plus_tip;
let tip_per_person;
let total_amount_after_deviding_per_person;
let details;

function calculate_bill_amount_plus_tip () {
    tip_one = document.getElementById("tip_one").checked;
    tip_two = document.getElementById("tip_two").checked;
    tip_three = document.getElementById("tip_three").checked;
    tip_four = document.getElementById("tip_four").checked;
    tip_five = document.getElementById("tip_five").checked;

    bill_amount = document.getElementById("bill_amount");
    number_of_people = document.getElementById("number_of_people");

    if (bill_amount > 0 && tip_one == true && number_of_people >= 1) {
        tip = bill_amount * 0.1;
        total_amount_plus_tip = bill_amount + tip;
        details = "Bill Amount: " + bill_amount + ",/nTip: " + tip + ",/nNumber Of People: " + number_of_people;
        return details;
    } else if (bill_amount > 0 && tip_two == true && number_of_people > 2) {
        tip = bill_amount * 0.15;
        total_amount_plus_tip = bill_amount + tip;
        tip_per_person = tip / number_of_people;
        total_amount_after_deviding_per_person = bill_amount / number_of_people;
        details = "Bill Amount: " + bill_amount + ",/nTip: " + tip + ",/nTotal Bill Amount Plus Tip: "
            + total_amount_plus_tip + ",/nNumber Of People: " + number_of_people + ",/nTip Per Person: " + tip_per_person;
        return  details;
    } else if (bill_amount > 0 && tip_three == true && number_of_people > 2) {
        tip = bill_amount * 0.2;
        total_amount_plus_tip = bill_amount + tip;
        tip_per_person = tip / number_of_people;
        total_amount_after_deviding_per_person = bill_amount / number_of_people;
        details = "Bill Amount: " + bill_amount + ",/nTip: " + tip + ",/nTotal Bill Amount Plus Tip: "
            + total_amount_plus_tip + ",/nNumber Of People: " + number_of_people + ",/nTip Per Person: " + tip_per_person;
        return  details;
    } else if (bill_amount > 0 && tip_four == true && number_of_people > 2) {
        tip = bill_amount * 0.25;
        total_amount_plus_tip = bill_amount + tip;
        tip_per_person = tip / number_of_people;
        total_amount_after_deviding_per_person = bill_amount / number_of_people;
        details = "Bill Amount: " + bill_amount + ",/nTip: " + tip + ",/nTotal Bill Amount Plus Tip: "
            + total_amount_plus_tip + ",/nNumber Of People: " + number_of_people + ",/nTip Per Person: " + tip_per_person;
        return  details;
    } else if (bill_amount > 0 && tip_five == true && number_of_people > 2) {
        tip = bill_amount * 0.3;
        total_amount_plus_tip = bill_amount + tip;
        tip_per_person = tip / number_of_people;
        total_amount_after_deviding_per_person = bill_amount / number_of_people;
        details = "Bill Amount: " + bill_amount + ",/nTip: " + tip + ",/nTotal Bill Amount Plus Tip: "
            + total_amount_plus_tip + ",/nNumber Of People: " + number_of_people + ",/nTip Per Person: " + tip_per_person;
        return  details;
    } else {
        return "Please check your information! Thank you.";
    }
    var display_details = document.getElementById("display_details").value();
    display_details.innerHTML = display_details;

        document.write(display_details);
}

