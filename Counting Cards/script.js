let count = 0;

function cc(card) {
    if(card >= 2 && card <= 6){
        count++;
    }else if(card >= 7 && card <= 9){

    }else {
        count--;
    }

    return count + (count > 0 ? " Bet" : " Hold");
}

cc(2); cc(3); cc(4); cc(5);
console.log(cc(6));

cc(7); cc(8);
console.log(cc(9));


cc(10); cc("J"); cc("Q"); cc("K");
console.log(cc("A"));
