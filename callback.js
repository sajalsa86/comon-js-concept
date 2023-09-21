function welcomeMessage(messsgeHanler, name) {
    messsgeHanler(name);
};

function getMorning(name) {
    console.log('Good Morning', name);
};

function getEvening(name) {
    console.log('Good Evening', name);
};

welcomeMessage(getMorning, 'Halim Mama');
welcomeMessage(getMorning, 'samiha');

welcomeMessage(getEvening, 'Halim Mama');
welcomeMessage(getEvening, 'samiha');