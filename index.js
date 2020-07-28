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
        allGray() {
            this.hautGauche = false;
            this.hautDroite = false,
            this.basGauche = false,
            this.basDroite = false
        },
        addNewElemToSequence() {
            this.sequence.push(this.squareMapping[Math.floor(Math.random() * 4)]);
            this.tmp = [...this.sequence]; // equal to: this.tmp = this.sequence.slice();
        },
        playSequence(carre) {
            setTimeout(function () {
                vm[carre] = true;
                setTimeout(function () {
                    vm.allGray();
                    vm.tmp.shift();
                    if (vm.tmp[0]) {
                        vm.playSequence(vm.tmp[0]);
                    } else {
                        vm.tmp = vm.sequence.slice();
                    }
                }, 400);
            }, 400);
        },
        newGame() {
            this.sequence = [];
            this.nextTurn();
        },
        selectSquare(carre) {
            if (carre === this.tmp[0]) {
                vm[carre] = true;
                setTimeout(function() {
                    vm.allGray();
                    vm.tmp.shift();
                    if (!vm.tmp[0]) {
                        vm.nextTurn();
                    }
                }, 400)
            } else {
                alert('Perdu!');
            }
        },
        nextTurn() {
            this.addNewElemToSequence();
            this.allGray();
            this.playSequence(vm.tmp[0]);
        },
    },
});