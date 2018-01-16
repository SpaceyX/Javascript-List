class List {
    constructor() {
        this.source = [];
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
        this.removeAt(0);
        return x;
    }

    insert(index, object) {
        let x = [];
        let off = 0;
        for(let i = 0; i < this.source.length + 1; i++) {
            if(index == i) {
                x[i] = object;
                off = 1;
            } else {
                x[i] = this.source[i - off];
            }
        }
        this.source = x;
    }

    push(object) {
        let x = [];
        x[0] = object;
        for(let i = 0; i < this.source.length; i++) {
            x.push(this.source[i]);
        }
        this.source = x;
    }

    peek() {
        return this.source[0];
    }

    get(index) {
        return this.source[index];
    }

    getFirst() {
        return this.peek();
    }

    getLast() {
        return this.source[this.source.length -1];
    }
}