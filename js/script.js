// function dataPerson(){
//     let form = document.getElementById('frm');
//     let nama = form.nama.value;
//     let pekerjaan = form.pekerjaan.value;
//     let hobby = form.hobby.value; 
    

//     let input = 'Nama :' + nama + '<br> Pekerjaan : '+pekerjaan+ '<br> Hobby :' +hobby; 
//     let no_input = 'Maaf Nama, Pekerjaan atau Hobby anda belum terisi ';
//     let hasil = (nama && pekerjaan && hobby !='') ? input : no_input;

//             document.getElementById('hasil').innerHTML = hasil ; 
// }

// Mengambil elemen form dan tombol submit
const form = document.getElementById('frm');
const proses = document.getElementById('proses');

// Mengatur event listener untuk tombol submit
proses.addEventListener('click', function(event) {
    event.preventDefault(); // Menghentikan proses default tombol submit

    // Mengambil nilai dari inputan
    const nama = document.getElementById('nama').value;
    const pekerjaan = document.getElementById('pekerjaan').value;
    const hobby = document.getElementById('hobby').value;

    // Membuat objek data person
    const dataPerson = {
        nama: nama,
        pekerjaan: pekerjaan,
        hobby: hobby
    };

    // Mengolah data person
    const hasil = dataPersonToString(dataPerson);

    // Menampilkan hasil pada elemen hasil
    const hasilElemen = document.getElementById('hasil');
    hasilElemen.textContent = hasil;
});

// Fungsi untuk mengubah objek data person menjadi string
function dataPersonToString(dataPerson) {
    let hasil = 'Nama: ' + dataPerson.nama + '\n' ;
    hasil += 'Pekerjaan: ' + dataPerson.pekerjaan + '\n';
    hasil += 'Hobby: ' + dataPerson.hobby;
    return hasil;
}

