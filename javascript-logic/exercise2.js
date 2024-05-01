function reverseString(text){
    rev = ""
    for(let i = text.length-1; i > -1; i--){
        rev += text[i];
    }
    return rev;
}

console.log(reverseString("Hello World and Coders"));