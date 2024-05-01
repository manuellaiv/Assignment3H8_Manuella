function threeStepsAB(text) {
    const positionsA = [];

    for (let i = 0; i < text.length; i++) {
        if (text[i] === 'a') {
            positionsA.push(i);
        }
    }

    for (let i = 0; i < positionsA.length; i++) {
        const positionA = positionsA[i];
        if (text[positionA + 4] === 'b' || text[positionA - 4] === 'b') {
            return true;
        }
    }

    return false;
}

console.log(threeStepsAB("lane borrowed"));
console.log(threeStepsAB("i am sick"));
console.log(threeStepsAB("you are boring"));