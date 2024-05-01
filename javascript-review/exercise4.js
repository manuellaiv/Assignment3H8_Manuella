function cekGanjilGenap(number) {
    if (typeof number !== 'number' || isNaN(number)) {
      return "Invalid Data";
    }
  
    if (number % 2 === 0) {
      return "genap";
    }
    else {
      return "ganjil";
    }
}

console.log(cekGanjilGenap(2));
console.log(cekGanjilGenap(3));
console.log(cekGanjilGenap(20));
console.log(cekGanjilGenap(21));
console.log(cekGanjilGenap('abc'));