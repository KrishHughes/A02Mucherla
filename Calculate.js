$(document).ready(function () {
    $('#S2').hide();
    $('#T3').hide();
    $('input:radio[name=gender]').change(function () {
        if (this.value == 'Y') {
            $('#S2').show();
            $('#T3').show();
        }
        else if (this.value == 'N') {
            $('#S2').hide();
            $('#T3').hide();
        }
    });
});

function getCarName() {

    let carname = $("#name").val();
    return (carname);
}
function getColor() {
    let color = $("#color").val();
    return (color);
}
function getDays() {
    let days = $("#days").val();
    return (days);
}
function getSSN() {
    let ssn = $("#ssn").val();
    return (ssn);
}
function getLicense() {
    let license = $("#license").val();
    return (license);
}
function getCountry() {
    let country = $("#country").val();
    return (country);
}
function getState() {
    let state = $("#state").val();
    return (state);
}
function gettownOrCity() {
    let tc = $("#tc").val();
    return (tc);
}
function claculateRent() {
    let carname, color, days, ssn, license, country, state, tc;
    let insurancePerDay = 30;
    let carRentPerDay = 25;

    let totalCost;
    //Taxpercent
    let taxRate = 0.15;
    $("#name1").html(getCarName());
    $("#color1").html(getColor());
    $("#days1").html(getDays());
    $("#ssn1").html(getSSN());
    $("#license1").html(getLicense());
    $("#country1").html(getCountry());
    $("#state1").html(getState());
    $("#tc1").html(gettownOrCity());
    totalCost = carRentPerDay * getDays() + insurancePerDay * getDays();
    totalCost += totalCost * 0.15;
    return (totalCost);
}
