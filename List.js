class List {
    //initializes as new List-object.
    constructor() {
        this.source = [];
    }

    //appends and item.
    add(object) {
        this.source.push(object);
    }

    //removes a specific item by reference.
    remove(object) {
        for(let i = this.source.length; i > -1; i--) {
            if(object === this.source[i]) {
                this.source.splice(i, 1);
                return;
            }
        }
    }

    //removes an item at a spcific indes.
    removeAt(index) {
        this.source.splice(index, 1);
    }

    //returns the first item and deletes it from the underlying array.
    pop() {
        let x = this.source[0];
        this.removeAt(0);
        return x;
    }

    //inserts an item at a specific index.
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

    //clears the underlying array.
    clear() {
        this.source = [];
    }

    //adds an item at index 0 to the underlying array.
    push(object) {
        let x = [];
        x[0] = object;
        for(let i = 0; i < this.source.length; i++) {
            x.push(this.source[i]);
        }
        this.source = x;
    }

    //returns the item at index 0 without removing it from the underlying array.
    peek() {
        return this.source[0];
    }

    //returns an item at a specific index.
    get(index) {
        return this.source[index];
    }

    //returns the first item. analog to peek().
    getFirst() {
        return this.peek();
    }

    //returns the last item.
    getLast() {
        return this.source[this.source.length -1];
    }

    //reverses the underlying array.
    reverse() {
        let x = [];
        let y = 0;
        for(let i = this.source.length - 1; i > -1; i--) {
            x[y] = this.source[i];
            y++;
        }
        this.source = x;
    }
}