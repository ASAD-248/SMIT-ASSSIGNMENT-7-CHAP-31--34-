











//          Q no : 01;

var currentDate_Time = new Date();
// var date_dataType = typeof(currentDate_Time);
document.write( "<br>"+ currentDate_Time);

//          Q no : 02;


var current_month = new Date().getMonth();
var months = ["jan","feb","march", "apri","may","jun", "jul","aug","sep","Oct","nov","dec"]
months =  months[current_month]
document.write("<br>" +"<br>" + " Current month: "+ months +"<br>" );

//          Q no : 03;

var current_Day = new Date().getDay();
var days = [ "sun","mon","tues","wed","thurs","fri","sat"]
current_Day = days[current_Day];
document.write(`<br> Today is: ${current_Day} `)


//          Q no : 04;

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var day = new Date().getDay()
days = days[day]
if (days === "Sunday" || days === "Saturday"){
    alert(` It's Fun Day ${days} `)
}
else{
    alert(` Today Not Fun Day ${days}!`)
}

//          Q no : 05;

var Dates = new Date().getDate()
if (Dates < 15){
    alert(`First ${Dates} days of the month`)
}
else{
    alert(`First Fifteen Days of the month`)
}

//          Q no : 06;

var cuurentdate = new Date()
document.write(`<h3>Current Date : ${cuurentdate}</h3>`)

 cuurentdate =  new Date().getTime()
document.write(` <h3>Ellapsed milliseconds since January 1, 1970 ${cuurentdate}</h3>`)


 var curentdate = Math.round( new Date().getTime() / (1000 * 60))

//          Q no : 07;

curentdate = new Date().getHours()

if ( curentdate == 24 || curentdate == 12 ){
   alert(`It's AM`)
}


else {
   alert(`It's PM`)
}

//          Q no : 08;

var laterDate = new Date(2020,12,0)
console.log(laterDate)

//          Q no : 09;

var ramdanDate = new Date()
var ramdan = new Date("June 18,2015")

var result = ramdanDate - ramdan
var pastDate = Math.round((result / (1000 * 60 *60 * 24 )))
alert("   Number of days since 1st Ramadan: " +pastDate  );

//          Q no : 10;

var referenceDate = new Date("Sat 5 Dec ,2015")

var pastreference = new Date()

var ress =  pastreference - referenceDate 

var seconds = Math.round(ress / (1000))
console.log(seconds)


//          Q no : 11;

var hours = new Date()
console.log(`Current Date : ${hours}`)

  hours.setHours(hours.getHours()-1)
console.log(`1 hour ago it was , ${hours} `)

//          Q no : 12;

var hours100 = new Date()
console.log(`Current Date : ${hours100}`)

 var ressss = hours100.setFullYear(hours100.getFullYear() - 100)
console.log(`100 yeas back it was , ${hours100} `)

//          Q no : 13;

var userage = +prompt("What is your age :")

var userDate = new Date().getFullYear()
var reDate = userDate - userage
console.log(reDate)

//          Q no : 14;

var customername = prompt("Whay is your name") 
document.write(`<h3> Customer Name : ${customername}</h3>`)

var currentmonth = prompt("Enter current Month") 
document.write(`<h3> Current Month : ${currentmonth}</h3>`)

var noOfunits = +prompt("Whay is your total units") 
document.write(`<h3> Total units : ${noOfunits}</h3>`)

var Chargesperunit = +prompt("Whay is your Charges per unit") 
document.write(`<h3> Charges per unit : ${ Chargesperunit}</h3>`)

var NetAmountPayable =  noOfunits * Chargesperunit
 document.write(`<h1> Net Amount Payable : ${ NetAmountPayable  }</h1>`)

var LatePaymentSurcharge = +prompt("Whay is your Late payment ") 

var GrossAmountPayable =  NetAmountPayable + LatePaymentSurcharge
document.write(`<h1> Gross Amount Payable :${ GrossAmountPayable}</h1>`)












































// var user = prompt("Enter any month")
// var mounth = ["jan", "feb","march","apri","may","jun","jul","aug","sep","oct","nov","dec"];
// var arrIndex = mounth.length;
// var indexNum ;
// console.log(indexNum)
// console.log(arrIndex)

// var str = "djsj";

// for(var i = 0; i < str.length; i++){
    
//     var randomNumber = Math.floor(Math.random()*str.length);
//     document.write(str[randomNumber])

// }


// var arr = [ 11,12,13,14,15,16,17,18,19,20]s;
// for( var i = 0; i < arr.length; i++){
//     console.log(arr[i + 1] - arr[i])
// }