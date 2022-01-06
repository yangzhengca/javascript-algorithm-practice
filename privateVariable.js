// how do you create a private variable in javascript

function secretVariable() {
    var private = "super secret code";
    return function() {
        return private
    }
}

var getPrivate = secretVariable()

// can access private value
console.log(getPrivate())

// can't access private value
console.log(secretVariable())
