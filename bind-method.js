const kibria = {

    name: 'rafia',
    money: 5000,
    passion: 'doing chill',

    treatDey: function (expense) {
        this.money = this.money - expense;
        console.log(this);
        return this.money;
    }
}
const heroAlam = {

    name: 'xyz',
    money: 6000,
    passion: 'doing nothing',

}
const gates = {

    name: 'gates_xyz',
    money: 8000,
    passion: 'doing everything',

}

kibria.treatDey(500);
const heroTreatDey = kibria.treatDey.bind(heroAlam);
heroTreatDey(500);
const gatesTreatDey = kibria.treatDey.bind(gates);
gatesTreatDey(500);