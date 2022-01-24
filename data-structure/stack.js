// Stack 

var Stack = function () {
    this.count = 0;
    this.storage = {};

    // add a value to the end of the stack
    this.push = function(value) {
        this.storage[this.count] = value;
        this.count ++;
    }

    this.pop = function (){
        if (this.count === 0) {
            return undefined;
        }

        this.count --;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    this.size = function () {
        return this.count;
    }

    // return the value at the end of the stack
    this.peak = function () {
        return this.storage[this.count - 1]
    }
}

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peak())
console.log(myStack.size())
myStack.push("hello world")
console.log(myStack.peak())
console.log(myStack.size())
console.log(myStack.pop())
console.log(myStack.peak())