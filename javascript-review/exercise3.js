function printTanggal() {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    console.log(day + " " + month + " " + year)
}

printTanggal();

function getTanggal() {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    tanggal = day + " " + month + " " + year;
    return tanggal;
}

console.log(getTanggal());