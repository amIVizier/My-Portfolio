'use strict';


const account1 = {
    username: 'Mark',
    password: 1234,
  };

const userName = document.querySelector('.textboxuser');
const userPass = document.querySelector('.textboxpass');
const btnsUserandPass = document.querySelector('#buttonPass');
const todoPage = document.querySelector('.todoPage');
const wrongAccount = document.querySelector('.textcontentuserlogin');
const btnReset = document.querySelector('#buttonReset');
const btnaddnewtask = document.querySelector('.btnandnewtaskcontainer');
const newtaskpopup = document.querySelector('.newtaskpopup');





//drop down
const dropdownlist = document.querySelector('.dropdownlist');
const dropdownlistselected = document.querySelector('.dropdownlistselected');

///temporary for calendar
//NOTEONTHIS
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// Create arrays for days and months
const greetings = ['Good Morning', 'Good Afternoon', 'Good Evening' ];







//  opening todopage and new task button
btnsUserandPass.addEventListener('click',function(){

    userName.value === account1.username && Number(userPass.value) === account1.password ?  
    (todoPage.classList.remove('hidden') , userName.value = userPass.value = '', btnaddnewtask.classList.remove('hidden')) :
    (wrongAccount.textContent = 'Wrong Account Try Again');
})

// deleting inputted value

btnReset.addEventListener('click', function(){
    userName.value = userPass.value = '';   
    wrongAccount.textContent = ''
})

btnaddnewtask.addEventListener('click',function(){
  newtaskpopup.classList.remove('hidden') 
})






// clock and date
//TEMPORARY
//NOTEONTHIS
function updateClock() {
  
    // Get the day and month names
    const dayOfWeek = days[now.getDay()];
    const monthName = monthNames[now.getMonth()];
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    // const seconds = now.getSeconds().toString().padStart(2, '0');
    let greetingIndex;

    hours >= 0 && hours <= 11  ? greetingIndex = 0 : 
    hours >= 12 && hours <= 17  ?   greetingIndex = 1  :
    greetingIndex = 2;

    // Update the date string to include day and month names

    const greetString = `${greetings[greetingIndex]}  ${account1.username}`;
    const dateString = `${dayOfWeek}, ${monthName} ${day}, ${year}`;
    const timeString = `${hours}:${minutes}`;
    // // :${seconds}

    document.getElementById('greetAccount').textContent = `${greetString}`
    document.getElementById('clockdate').textContent = `${dateString} ${timeString}`;


  }

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock immediately
updateClock();


////////////// menu bar

//drop down
// const dropdownlist = document.querySelector('.dropdownlist');
// const dropdownlistselected = document.querySelector('.dropdownlistselected');



  //LESSON //NOTEONTHIS by the use of function return function with ternary operator 
document.addEventListener('DOMContentLoaded', event => {
document.querySelector('.dropdownlist').addEventListener('change', event => {
    const category = event.target.value;
    console.log(category);

  });
}); 

function createCalendar(year, month) {

  ///NOTEONTHIS HERE BEGINS THE CALENDAR
//  let daysGrid = document.querySelector('.day');
 //LESSON daysGrid = class name is days

 //LESSON dayname = class name is  day
 //weekdays
    let daysGrid = document.createElement('div');
    daysGrid.className = 'days';
          //so days grid adopt dayname and daycell
          //daysgrid holds the days while daycell adopts the calendar dates
    let calendar = document.getElementById('calendar');
    

   for (let i = 0; i < days.length; i++) {
  let dayName = document.createElement('div');
  dayName.className = 'weekday';
  dayName.textContent = days[i];
    //days grid which he creates class father which he makes dayname is his son which class is day
  daysGrid.appendChild(dayName); 
   }

   //date in month
  let date = new Date(year, month, 1);
//   // //the value 1 represents the day of the month

for (; date.getMonth() === month; date.setDate(date.getDate() + 1)) {
  let dayCell = document.createElement('button');
  dayCell.className = 'day';
  dayCell.value = date.getDate() ;
  dayCell.textContent = date.getDate();
  daysGrid.appendChild(dayCell);
  // console.log(dayCell.idName);
}

   //LESSON appendchild means si calendar ina dopt nya si daysgrid who the child he create is days
          //
   calendar.appendChild(daysGrid);
   return calendar

}
     // header
    //  ${now.getDate()}
     document.querySelector('.month').textContent = `${year} ${monthNames[month]} `; 
     document.getElementById('calendar').appendChild = createCalendar(year, month); 
   

     

//blurred the date before
const date = now.getDate();
const a = document.querySelectorAll('.day');
const containerforinput = document.querySelector('.containerclickaddtodoclasstexttaskdateandtime');

//blurred the date before

a.forEach(day => {
  if (Number(day.value) < date ){   
  day.textContent = "NA";
  }else if( Number(day.value) === date) {
    //adding backgroundcolor for the exact date
      day.classList.add('backgroundforclass');
  }

//day function which been looped
day.addEventListener('click',function(){
    console.log(day.value);
    let inputdate = document.createElement('div');
    inputdate.className = 'dateandmonthinputted';
    inputdate.textContent = `${monthNames[month]} ${day.value}`;
    containerforinput.appendChild(inputdate);

   
})


});




 








