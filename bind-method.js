const kibria = {

    name: 'rafia',
    money: 5000,
    passion: 'doing chill',

    treatDey: function (expense) {
        this.money = this.money - expense;
        return this.money;
    }
}