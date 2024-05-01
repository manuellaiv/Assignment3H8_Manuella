const manuella = {
    nama_depan: "Manuella",
    nama_belakang: "Ivana",
    hobi: ['menggambar', 'membaca'],
    angka_favorit: 4,
    memakai_kacamata: true,
}
console.log(manuella.nama_depan + " " + manuella.nama_belakang)

manuella.angka_favorit = 8
console.log(manuella)

manuella.hobi.push("coding")
console.log(manuella)

manuella.lulusan = "Hacktiv8"
console.log(manuella)

for(let i = 0; i < manuella.hobi.length ; i++){
    console.log(manuella.hobi[i]);
}

for (let key in manuella) {
    console.log(key + ":" + manuella[key]);
  }