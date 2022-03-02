
// for(let i=0; i<10 ; i++)
// for(const num of numbers){} //array
//for(const prop in student{} // object // eta sudhu obeject er keys gula dibe.
// of er condition a object er jonno hoy nah..
// const bottle = {
//     color: 'yellow',
//     hold: 'water',
//     price: 50,
//     isCleaned: true
// };
const student = {

    name: 'rafia',
    money: 5000,
    passion: 'doing chill',
    subjects: ['math', 'english', 'biology'],
    bestFriend: {
        name: 'gyhuh',
        major: 'math'
    },
    takeExam: function () {
        console.log(this.name, 'taking exam');
    },
    treatDey: function (expense) {
        this.money = this.money - expense;
        return this.money;
    }
}
for (const prop in student) {
    //console.log(student["bestFriend"]);
    //console.log(student.money);
    //console.log(key,value);
    // console.log(prop, student[prop]);
}
const keys = Object.keys(student);
for (const prop of keys) {
    console.log(prop, student[prop]);
}

for (const [key, value] of Object.entries(student)) {
    console.log(key, value);
}
