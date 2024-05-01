function isArithmeticProgression(numbers){
    const diff = numbers[1] - numbers[0];

    for (let i = 2; i < numbers.length; i++) {
        if (numbers[i] - numbers[i - 1] !== diff) {
            return false;
        }
    }

    return true;
}

console.log(isArithmeticProgression([1,2,3,4,5,6]));
console.log(isArithmeticProgression([2,4,6,12,24]));
console.log(isArithmeticProgression([2,4,6,8]));
console.log(isArithmeticProgression([2,6,18,54]));
console.log(isArithmeticProgression([1,2,3,4,7]));