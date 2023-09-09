let date = document.querySelector('.date');
let time = document.querySelector('.time');

const updateUTC = () => {
let newDate = new Date();
let day = newDate.getDay();
let miliseconds = newDate.getTime();
console.log(miliseconds);
// const meridan = hours >= 12 ? 'PM' : 'AM';

switch (day) {
    case 0:
        day = 'sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'saturday';
        break;
}

date.innerHTML = day;
time.innerHTML = miliseconds;

}

updateUTC();

setInterval(updateUTC, 1000);