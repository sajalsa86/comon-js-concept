const myObjects = {
    number: 1746233086,
    name: 'Sajal Hossain',
    isMarried: false,
    friends: ['Sarour', 'shihab', 'Alamin', 'Habib', 'Galib'],
    jobInfo: {
        bankName: 'Islami Bank',
        address: 'Atrai Naogaon',
        services: ['Account Opening', 'Cash Widthdra', 'Cash In', 'Remetance'],

    },
    hollyDay: function (dayName) {
        return (`Every ${this.jobInfo.bankName} ${dayName} is Holly Day`)
    }
};

myObjects.hollyDay('Friday');
console.log(myObjects);