const student = {
    name: 'sakib al hasan',
    job: 'cricketer'
}

// const person = new Object();
// console.log(person);

const human = Object.create(student);
console.log(human.job);