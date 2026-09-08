// File JavaScript Eksternal
// File ini dipanggil/diimpor dari file HTML lain
// Buka Console browser (F12 → tab Console) untuk melihat output terminal

function sapaEksternal() {
    console.log('Fungsi sapaEksternal() dari file eksternal dipanggil');
    document.getElementById('pesanEksternal').innerHTML = 'Pesan dari file JavaScript eksternal (script.js)!';
}

function tampilkanTanggal() {
    var tanggal = new Date();
    console.log('Objek Date:', tanggal);
    var options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    var hasil = tanggal.toLocaleDateString('id-ID', options);
    console.log('Tanggal formatted:', hasil);
    document.getElementById('tanggalHari').innerHTML = 'Hari ini: ' + hasil;
}

function tampilkanWaktu() {
    var waktu = new Date();
    var jam = waktu.getHours();
    var menit = waktu.getMinutes();
    var detik = waktu.getSeconds();
    console.log('Jam:', jam, 'Menit:', menit, 'Detik:', detik);
    var waktuStruk = jam + ':' + menit + ':' + detik;
    document.getElementById('waktuSekarang').innerHTML = 'Waktu sekarang: ' + waktuStruk;
}

function kalkulatorSederhana() {
    var angka1 = Number(document.getElementById('kalkA').value);
    var angka2 = Number(document.getElementById('kalkB').value);
    var operator = document.getElementById('kalkOp').value;
    console.log('Operasi:', angka1, operator, angka2);
    var hasil = 0;

    switch (operator) {
        case '+':
            hasil = angka1 + angka2;
            break;
        case '-':
            hasil = angka1 - angka2;
            break;
        case '*':
            hasil = angka1 * angka2;
            break;
        case '/':
            hasil = angka2 !== 0 ? angka1 / angka2 : 'Tidak bisa dibagi 0';
            break;
    }

    console.log('Hasil kalkulasi:', hasil);
    document.getElementById('hasilKalk').innerHTML = 'Hasil: ' + angka1 + ' ' + operator + ' ' + angka2 + ' = ' + hasil;
}
