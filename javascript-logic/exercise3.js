function urutHuruf(text){
    // dictionary jumlah huruf a-z
    const dict = []
    for (let i = 0; i < 26; i++){
        dict.push(0);
    }

    // hitung jumlah huruf dan masukkan ke dictionary
    for (let i = 0; i < text.length; i++){
        const index = text[i].toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
        dict[index]++;
    }

    // cetak dari dictionary
    let urut = ""
    for (let i = 0; i < 26; i++){
        for (let j = 0; j < dict[i]; j++){
            urut += String.fromCharCode('a'.charCodeAt(0) + i);
        }
    }

    return urut;
}

console.log(urutHuruf("halo"))