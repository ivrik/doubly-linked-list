const Node = require('./node');

class LinkedList {

    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        let thing = new Node(data);

        if(this.length === 0){
            this._head = thing;
            this._tail = thing;
        }else{

        }

        this._tail.next = thing;
        thing.prev = this._tail;
        this._tail = thing;

        this.length ++;
        return this;
    }

    head() {
        return this._head ?  this._head.data :null;
    }

    tail() {
        return this._tail ?  this._tail.data :null;
    }

    at(index) {
        if(index > this.length || index < 0){
            throw "Invalid index";
        }

        let thing = this._head;
        let a = 0;

        while(a<index){
            thing = thing.next;
            a++;
        }

        return thing.data;
    }

    insertAt(index, data) {
        if(index < 0){
            throw "Invalid index";
        }

        if(this.isEmpty()){
            this.append(data);
        }



        let thing = this._head;
        let a = 0;

        while(a<index){
            thing = thing.next;
            a++;
        }

        let newNode = new Node(data, thing.prev, thing);

        thing.prev.next = newNode;
        thing.prev = newNode;

        return this;
    }

    isEmpty() { return this.length===0;}

    clear() {
        this.length = 0;
        this._head =  null;
        this._tail = null;
        return this;
    }

    deleteAt(index) {
        if(index < 0){
            throw "Invalid index";
        }


        let thing = this._head;
        let a = 0;

        while(a<index){
            thing = thing.next;
            a++;
        }
        thing.prev.next = thing.next;
        thing.next.prev = thing.prev;
        return this;
    }

    reverse() {
        let newNode = this._tail;
        this._tail = this._head;
        this._head = newNode;


        while (newNode.prev!=this._tail){
            let temp = newNode.prev;
            newNode.prev = newNode.next;
            newNode.next = temp;
            newNode = temp;
        }
        return this;
    }

    indexOf(data) {


        let thing = this._head;
        let a = 0;

        do{
            if(thing.data === data){
                return a;
            }
            thing = thing.next;
            a++;
        }
        while(thing.next!==this._tail);

        return -1;
    }
}

module.exports = LinkedList;