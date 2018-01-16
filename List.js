class List {
    constructor() {
        this.source = [];
        //
    }

    add(object) {
        this.source.push(object);
    }

    remove(object) {
        for(let i = this.source.length; i > -1; i--) {
            if(object === this.source[i]) {
                this.source.splice(i, 1);
                return;
            }
        }
    }

    removeAt(index) {
        this.source.splice(index, 1);
    }

    pop() {
        let x = this.source[0];
        removeAt(0);
        return x;
    }

    push(object) {
        let x = [];
        x[0] = object;
        for(let i = 0; i < this.source.length; i++) {
            add(this.source[x]);
        }
    }

    peek() {
        return this.source[0];
    }
}