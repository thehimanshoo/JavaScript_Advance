 // Indian Watch
let indianWatch = () => {
  let indianTimeZone = {timeZone : 'Asia/Kolkata'};
  let indianCurrentDate = new Date().toLocaleDateString('en-US', indianTimeZone);
  let indianCurrentTime = new Date().toLocaleTimeString('en-US', indianTimeZone);

      document.querySelector('#indian-date').innerText = indianCurrentDate;
      document.querySelector('#indian-time').innerText = indianCurrentTime;
};
setInterval(indianWatch, '1000');

// USA Watch
let usaWatch = () => {
    let usaTimeZone = {timeZone : 'America/New_York'};
    let usaCurrentDate = new Date().toLocaleDateString('en-US', usaTimeZone);
    let usaCurrentTime = new Date().toLocaleTimeString('en-US', usaTimeZone);

    document.querySelector('#usa-date').innerText = usaCurrentDate;
    document.querySelector('#usa-time').innerText = usaCurrentTime;
};
setInterval(usaWatch, '1000');

// China Watch
let chinaWatch = () => {
    let chinaTimeZone = {timeZone : 'Asia/Shanghai'};
    let chinaCurrentDate = new Date().toLocaleDateString('en-US', chinaTimeZone);
    let chinaCurrentTime = new Date().toLocaleTimeString('en-US', chinaTimeZone);

    document.querySelector('#china-date').innerText = chinaCurrentDate;
    document.querySelector('#china-time').innerText = chinaCurrentTime;
};
setInterval(chinaWatch, '1000');

// England Watch
let englandWatch = () => {
    let englandTimeZone = {timeZone : 'Europe/London'};
    let englandCurrentDate = new Date().toLocaleDateString('en-us', englandTimeZone);
    let englandCurrentTime = new Date().toLocaleTimeString('en-us', englandTimeZone);

    document.querySelector('#england-date').innerText = englandCurrentDate;
    document.querySelector('#england-time').innerText = englandCurrentTime;
};
setInterval(englandWatch, '1000');

// Australia Watch
let australiaWatch = () => {
    let australianTimeZone = {timeZone : 'Australia/Queensland'};
    let australianCurrentDate = new Date().toLocaleDateString('en-us', australianTimeZone);
    let australianCurrentTime = new Date().toLocaleTimeString('en-us', australianTimeZone);

    document.querySelector('#australian-date').innerText = australianCurrentDate;
    document.querySelector('#australian-time').innerText = australianCurrentTime;
};
setInterval(australiaWatch, '1000');

// Russia Watch
let russianWatch = () => {
    let russianTimeZone = {timeZone : 'Europe/Moscow'};
    let russianCurrentDate = new Date().toLocaleDateString('en-us', russianTimeZone);
    let russianCurrentTime = new Date().toLocaleTimeString('en-us', russianTimeZone);

    document.querySelector('#russian-date').innerText = russianCurrentDate;
    document.querySelector('#russian-time').innerText = russianCurrentTime;
};
setInterval(russianWatch, '1000');

// South Africa Watch
let southAfricaWatch = () => {
    let southAfricaTimeZone = {timeZone : 'Africa/Johannesburg'};
    let southAfricaCurrentDate = new Date().toLocaleDateString('en-us', southAfricaTimeZone);
    let southAfricaCurrentTime = new Date().toLocaleTimeString('en-us', southAfricaTimeZone);

    document.querySelector('#southAfrica-date').innerText = southAfricaCurrentDate;
    document.querySelector('#southAfrica-time').innerText = southAfricaCurrentTime;
};
setInterval(southAfricaWatch, '1000');

// Bangladesh Watch
let bangladeshWatch = () => {
    let bangladeshTimeZone = {timeZone : 'Asia/Dhaka'};
    let bangladeshCurrentDate = new Date().toLocaleDateString('en-us', bangladeshTimeZone);
    let bangladeshCurrentTime = new Date().toLocaleTimeString('en-us', bangladeshTimeZone);

    document.querySelector('#bangladesh-date').innerText = bangladeshCurrentDate;
    document.querySelector('#bangladesh-time').innerText = bangladeshCurrentTime;
};
setInterval(bangladeshWatch, '1000');

// Nepal Watch
let nepalWatch = () => {
    let nepalTimeZone = {timeZone : 'Asia/Kathmandu'};
    let nepalCurrentDate = new Date().toLocaleDateString('en-us', nepalTimeZone);
    let nepalCurrentTime = new Date().toLocaleTimeString('en-us', nepalTimeZone);

    document.querySelector('#nepal-date').innerText = nepalCurrentDate;
    document.querySelector('#nepal-time').innerText = nepalCurrentTime;
};
setInterval(nepalWatch, '1000');

// Saudi Arabia Watch
let saudiArabiaWatch = () => {
    let saudiArabiaTimeZone = {timeZone : 'Asia/Riyadh'};
    let saudiArabiaCurrentDate = new Date().toLocaleDateString('en-us', saudiArabiaTimeZone);
    let saudiArabiaCurrentTime = new Date().toLocaleTimeString('en-us', saudiArabiaTimeZone);

    document.querySelector('#saudi-date').innerText = saudiArabiaCurrentDate;
    document.querySelector('#saudi-time').innerText = saudiArabiaCurrentTime;
};
setInterval(saudiArabiaWatch, '1000');

// UAE Watch
let uaeWatch = () => {
    let uaeTimeZone = {timeZone : 'Asia/Dubai'};
    let uaeCurrentDate = new Date().toLocaleDateString('en-us', uaeTimeZone);
    let uaeCurrentTime = new Date().toLocaleTimeString('en-us', uaeTimeZone);

    document.querySelector('#uae-date').innerText = uaeCurrentDate;
    document.querySelector('#uae-time').innerText = uaeCurrentTime;
};
setInterval(uaeWatch, '1000');


// Pakistan Watch
let pakistanWatch = () => {
    let pakistanTimeZone = {timeZone : 'Asia/Karachi'};
    let pakistanCurrentDate = new Date().toLocaleDateString('en-us', pakistanTimeZone);
    let pakistanCurrentTime = new Date().toLocaleTimeString('en-us', pakistanTimeZone);

    document.querySelector('#pakistan-date').innerText = pakistanCurrentDate;
    document.querySelector('#pakistan-time').innerText = pakistanCurrentTime;
};
setInterval(pakistanWatch, '1000');
