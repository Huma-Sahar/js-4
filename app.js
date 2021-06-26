
//Chapter 26--30


// 1. Write a program that takes a positive integer from user & display the following in your
//  browser. a. number b. round off value of the number c. floor value of the number 
//  d. ceil value of the number

// var number = prompt('Please Enter integer value');
// var x = Number(number)
// document.write(' given number is : ' + number)

// var y = Math.round(number);
// document.write('<br>'+'round  number is : ' +y)

// var z = Math.ceil(number)
// document.write('<br>'+'ceil number is : ' +z)

// var floor = Math.floor(number)
// document.write('<br>'+ 'floor number is : ' +floor)

/////////////////////////////////////////////////////////////////////////

// 2. Write a program that takes a negative floating point number from user & display the following
//  in your browser. a. number b. round off value of the number 
//  c. floor value of the number d. ceil value of the number

// var number = prompt('Please Enter negative value');
// var x = Number(number)
// document.write(' given number is : ' + number)

// var y = Math.round(number);
// document.write('<br>'+'round  number is : ' +y)

// var z = Math.ceil(number)
// document.write('<br>'+'ceil number is : ' +z)

// var floor = Math.floor(number)
// document.write('<br>'+ 'floor number is : ' +floor)

///////////////////////////////////////////////////////////////////////////////////

// 3. Write a program that displays the absolute value of a number. E.g. absolute value of -4 
// is 4 & absolute value of 5 is 5


// var x = -4;
// var y = Math.abs(x)
// document.write('given number is : ' + x);
// document.write('<br>'+'absolute number is : ' + y);

////////////////////////////////////////////////////////////////////////////////////

// 4. Write a program that simulates a dice using random() method of JS Math class. Display
//  the value of dice in your browser.:

// var player1 = +prompt('tik tik tik dice number');
// var result1 = Math.floor(Math.random(player1)*6);

// var player2 = +prompt('tik tik tik dice number');
// var result2 = Math.floor(Math.random(player1)*6);


// document.write('Player 1 number is '+result1)
// document.write('<br> Player 2 number is '+result2)



//////////////////////////////////////////////////////////////////////////////////

// 5. Write a program that simulates a coin toss using random() method of JS Math class.
//  Display the value of coin in your browser

// var head = prompt('Enter head user name');
// var tail =  prompt('Enter tail user name');

// var toss = Math.floor(Math.random()*2);

// if (toss === 0){
//     document.write(head+ ' who is from head is winner')
// }
// else{
//     document.write(tail+ ' who is from tail is winner')

// }

/////////////////////////////////////////////////////////////////////////////////////

// 6. Write a program that shows a random number between 1 and 100 in your browser.

// var number = Math.round(Math.random()*100)

// document.write('Random number between 1-100 is  : '+ number);


//////////////////////////////////////////////////////////////////////////////////////
// 7. Write a program that asks the user about his weight. Parse the user input and display 
// his weight in your browser. Possible user inputs can be: a. 50 b. 50kgs c. 50.2kgs
//  d. 50.2kilograms


// var weight = prompt('Enter your wait here');
// var x = parseFloat(weight)

// document.write( 'The user weight is  ' +x + ' kilograms' )


////////////////////////////////////////////////////////////////////////////////////////////

// 8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user 
// to input a number between 1 and 10. If the user input equals the secret number, congratulate 
// the user.

// var numb = +prompt('Please Enter your secret number');
// var x = Math.round(Math.random(numb)*10)

// if (x === 2){
//     document.write('congratulations!!!!  You are winner')
// }

// else{
//     document.write('Try again')
// }

////////////////////////////////////////////////////////////////////////////////////////////////


//Chapter 31-34

//   1. Write a program that displays current date and time in
//  your browser.   

// var today = new Date()
// document.write(today)

/////////////////////////////////////////////////////////////////////////////////////

// 2. Write a program that alerts the current month in words.
// For example December.

// var today = new Date()
// var x = today.toString()
// var y = x.slice(4,7)
// document.write('Current month is : ' + y)

///////////////////////////////////////////////////////////////////////////////////////////

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

// var days = ['sun','mon','tues','wed','thu','fri','sat'];
// var today = new Date();
// var currentDay = today.getDay()
// var x = days[currentDay]
// document.write(' Today is ' + x)

//4. Write a program that displays a message “It’s Fun day” if
//its Saturday or Sunday today.

// var days = ['sun','mon','tues','wed','thu','fri','sat'];
// var today = new Date();
// var currentDay = today.getDay()
// var x = days[currentDay]
// if (x === 'fri'){
//     alert('It Fun day')
// }
// else{
//     alert('normal day')
// }
////////////////////////////////////////////////////////////////////////////////////////////

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

// var today = new Date();
// var day = today.getDate()


// if (day <= 15){
//     alert('First days of week')
// }

// else{
//     alert('last days of week')
// }

/////////////////////////////////////////////////////////////////////////////////////////

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// var today = new Date();
// var x = today.getTime();
//  var minutes = x/(1000*60*60*24*12*30)

// document.write('Current Date is : '+ today)
// document.write('<br> Millisecond since midnight, jan. 1, 1970 are : '+ x);
// document.write('<br> minutes since midnight, jan. 1, 1970 are : '+ minutes);

/////////////////////////////////////////////////////////////////////////////////////////////

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

// var today = new Date();
// document.write(today)
// var x = today.getHours();
// document.write('<br>'+x)

// if(x <= 12){
//     alert('its A.M')
// }
// else{
//     alert('its P.M')
// }

///////////////////////////////////////////////////////////////////////////////////////////

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

// var today = new Date('31, December 2020')

// document.write(today)

//////////////////////////////////////////////////////////////////////////////////////////////

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// var firstRamzan = new Date('June 18, 2015');
// var x = firstRamzan.getTime()
// var midRamazan = new Date('july 3, 2015')
// var y = midRamazan.getTime();
// var diff = y-x;
// var result = diff/(1000*60*60*24)
// document.write(result+ ' days have passed ')

//////////////////////////////////////////////////////////////////////////////////////////////

// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

// var laterday = new Date('jan 1, 2021');
// var toDay = new Date()
// var laterSecond = laterday.getTime()
// var toDaySecond = toDay.getTime()
// var result = toDaySecond-laterSecond;
// var result1 = result/(1000*60)
// document.write('Today date : '+toDay)
// document.write('<br> Second has passed from begining of year till yet : '+result1)

///////////////////////////////////////////////////////////////////////////////////////

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

// var toDay = new Date();
// toDay.setHours('21')
// var x = new Date()
// document.write('Current time is : '   + x);
// document.write('<br> One hour ago it was  : ' + toDay);

///////////////////////////////////////////////////////////////////////////////////

// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?


// var toDay = new Date();
// toDay.setFullYear('1921');
// var x = new Date();

// document.write('Current year: '+ x)
// document.write('<br> year 100 year before was: '+ toDay)

//////////////////////////////////////////////////////////////////////////////////////////

// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.
 

// var askAge = prompt('Enter your Date of birth')
// var askAge1 = new Date(askAge)
// var toDay = new Date();
// var timeToday = toDay.getTime();
// var ageTime = askAge1.getTime();
// var ageDiff = timeToday-ageTime;
// var age = Math.round(ageDiff/(1000*60*60*24*30*12));
 
// alert('your age is :'+ age + 'years');

////////////////////////////////////////////////////////////////////////////////////////

// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

// var myName = 'Huma Sahar';
// var month = 'June'
// var numUnit = 410;
// var unitCharge = 16;
// var amount = numUnit*unitCharge;
// var Surcharge =350;
// var afterDuedate = amount+Surcharge

// document.write('<h1>K-Electric Bill</h1>')
// document.write('<br> <b>custumer Name : </b>' + myName)
// document.write('<br> <b>Month :</b> ' + month)
// document.write('<br> <b>Number of Units :</b> ' + numUnit)
// document.write('<br> <b>Charges per units :</b> ' + unitCharge)
// document.write('<br> <b>Net amount payable(within Due Date):</b> ' + amount)
// document.write('<br> <b>Late payment surcharge : </b>' + Surcharge)
// document.write('<br> <b>Gross amount payable (after Due Date) : </b>' + afterDuedate)
