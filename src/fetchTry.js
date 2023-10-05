const hours = [];
for (let i=12; i<=21; i++){
    hours.push(i.toString().concat(":00"));
};

let randtimes = Math.floor(Math.random() * (hours.length-2)) + 2;
let selectedhours = [];

for (let j=1; j<=randtimes; j++){
    let temphour = hours[Math.floor(Math.random() * hours.length)];
    if (!(selectedhours.includes(temphour))) {
        selectedhours.push(temphour);
    }
};