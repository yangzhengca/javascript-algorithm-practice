// Set

function mySet () {
    // collection will hold the set
    var collection = [];

    // check if the set has element, return true or false
    this.has = function (element) {
        return (collection.indexOf(element) !== -1);
    }

    // return all the values in the set
    this.values = function() {
        return collection;
    }

    // add an element to the set
    this.add = function(element) {
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    }

    // remove an element from the set
    this.remove = function(element) {
        if(this.has(element)){
            index = collection.indexOf(element);
            collection.splice(index, 1);
            return true;
        }
        return false;
    }

    // return the size of the set
    this.size = function() {
        return collection.length;
    }

    // return the union of two sets
    this.union = function(otherSet) {
        var unionSet = new mySet();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function(e){
            unionSet.add(e);
        })
        secondSet.forEach(function(e){
            unionSet.add(e);
        })
        return unionSet;
    }

    // return the intersection of two sets as  a new set
    this.intersection = function(otherSet){
        var intersectionSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if(otherSet.has(e)){
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    }

    // return the difference of two sets as a new set 
    this.difference = function(otherSet){
        var differenceSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if(!otherSet.has(e)){
                differenceSet.add(e);
            }
        })
        return differenceSet;
    }   

    // check if the set is a subset of a different set
    this.subset = function(otherSet) {
        var firstSet = this.values();
        return firstSet.every(function(value) {
            return otherSet.has(value);
        })
    }
}


var setA = new mySet();
var setB = new mySet();

setA.add("a");  
setB.add("b");  
setB.add("c");  
setB.add("a");  
setB.add("d");  

console.log(setA.subset(setB)); //true
console.log(setA.intersection(setB).values());  //['a']

console.log(setB.difference(setA).values()); //[ 'b', 'c', 'd' ]

var setC = new Set();  
var setD = new Set();  
setC.add("a");  
setD.add("b");  
setD.add("c");  
setD.add("a");  
setD.add("d");  
console.log(setD.values()); //[Set Iterator] { 'b', 'c', 'a', 'd' }

setD.delete("a");
console.log(setD.has("a"));

console.log(setD.add("d"));
