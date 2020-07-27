let vm = new Vue({
    el: '#app',
    data: {
        sequence: [],
        tmp: [],
        hautGauche: false,
        hautDroite: false,
        basGauche: false,
        basDroite: false,
        squareMapping: ["hautGauche", "hautDroite", "basGauche", "basDroite"]
    },
    methods: {
        addNewElemToSequence() {
            this.sequence.push(this.squareMapping[Math.floor(Math.random() * 4)]);
        },
        newGame() {
            this.addNewElemToSequence();
        }
    },
});