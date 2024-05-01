function listPrima(angkaPertama, angkaKedua){
    const list = [];
    for(let number = angkaPertama+1; number < angkaKedua; number++){
        var prima = true;
        for(let i = 2; i < number; i++){
            if (number % i == 0){
                prima = false;
            }
        }
        if (prima){
            list.push(number);
        }
    }
    return list;
}

console.log(listPrima(1,5));
console.log(listPrima(5,10));
console.log(listPrima(10,20));