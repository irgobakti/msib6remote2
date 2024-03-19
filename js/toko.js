let frm = document.getElementById('online');
let produkPilihan = ["TV", "AC", "Kulkas"];
let pilihProduk = `<option value="">-- Pilihan Produk --</option>`;
for(let p in produkPilihan){
    pilihProduk += `<option value="${produkPilihan[p]}">${produkPilihan[p]}</option>`;

}
frm.produk.innerHTML=pilihProduk; 
function transaksi(){
    let nama =frm.nama.value;
    let produk =frm.produk.value;
    let jumlah =frm.jumlah.value;

    let harga;
    switch(produk){
        case 'TV': harga = 2000000; break;
        case 'AC' :   harga = 3000000; break;
        case 'kulkas' : harga = 5000000; break;
        default : harga = 0; 
    }
    let hargaKotor = harga * jumlah;
    // diskon
    let diskon;
    if(produk == 'Kulkas' && jumlah >= 3) diskon = 0.3 *  hargaKotor; 
    else if (produk == 'AC' && jumlah >= 3) diskon = 0.2 * hargaKotor; 
    else diskon = 0.1 * hargaKotor ; 

// Menampilkan hasil
swal(`
Nama Pelanggan : ${nama}
Produk yang dibeli : ${produk}
Harga Produk : ${harga}
Jumlah produk yang dibeli : ${jumlah}
Total Yang Dibayar: ${hargaKotor}
Diskon yang Didapat : ${diskon}
`);

}
