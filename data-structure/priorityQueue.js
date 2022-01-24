// Priority Queue 

function PriorityQueue () {
    var collection = [];

    this.printCollection = function() {
        console.log(collection);
    }; 

    this.enqueue = function(element) {
        if (this.isEmpty()) {
            collection.push(element);
        } else {
            var added = false;
            for (var i=0; i<collection.length; i++) {
                if (element[1] < collection [i][1]) {
                    collection.splice(i,0,element);
                    added = true;
                    break;
                }
            }
            if (!added) {
                collection.push(element);
            }
        }
    };

    this.dequeue = function() {
        var value = collection.shift();
        return value[0];
    };

    this.front = function() {
        return collection[0];
    };

    this.size = function() {
        return collection.length;
    };

    this.isEmpty = function() {
        return (collection.length === 0);
    };

}


var pq = new PriorityQueue();
pq.enqueue(['Beau Carnes', 2]); 
pq.enqueue(['Quincy Larson', 3]);
pq.enqueue(['Ewa Mitulska-Wójcik', 1])
pq.enqueue(['Briana Swift', 2])
pq.enqueue(["where is this?", 2]);
pq.printCollection();

// [
//     [ 'Ewa Mitulska-Wójcik', 1 ],
//     [ 'Beau Carnes', 2 ],
//     [ 'Briana Swift', 2 ],
//     [ 'where is this?', 2 ],
//     [ 'Quincy Larson', 3 ]
//   ]

pq.dequeue();
console.log(pq.front());
pq.printCollection();