function getPeople(handshake) {
    let hs = 0;
    let counter_inside = 0;
    
    for (i=0; i < handshake; i++) {
        counter_inside ++;
        hs += counter_inside;
        
        if (hs == handshake) {
            break;
        }
    }
    
    return(counter_inside)
}


console.log( getPeople(1) ); // 1
console.log( getPeople(3) ); // 2
console.log( getPeople(6) ); // 3
console.log( getPeople(10) ); // 4
console.log( getPeople(15) ); // 5
console.log( getPeople(120) ); // ?