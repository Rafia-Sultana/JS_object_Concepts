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
student.takeExam();
const remaining = student.treatDey(2000);
const remaining2 = student.treatDey(1000);
console.log(remaining);
console.log(remaining2);
