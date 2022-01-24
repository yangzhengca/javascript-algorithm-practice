// A frog in a well, everyday the from can jump 7, but slide down 2. Calculate how many days will the from will gei out of the well with given depth


const frogWell = (depth) => {
    let day=0, hight = 0;
    do{
        hight += 7;
        day++;
        if(hight >= depth){
            return day;
        }else{
            hight -=2;
        }
    } while(hight < depth)
}

console.log(frogWell(42))

console.log(frogWell(128))