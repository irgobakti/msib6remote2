function tambah(){
    let frm = document.getElementById('kal');
    let a1 = parseFloat(frm.angka1.value);
    let a2 = parseFloat(frm.angka2.value); 

    let total = a1 + a2;
    frm.hasil.value = total; 
}

function kurang(){
    let frm = document.getElementById('kal') ; 
    let a1 = parseFloat(frm.angka1.value) ;  
    let a2 = parseFloat(frm.angka2.value) ; 

    let total =  a1 - a2 ;  
    frm.hasil.value = total;

}
function kali(){
    let frm = document.getElementById('kal') ; 
    let a1 = parseFloat(frm.angka1.value) ;  
    let a2 = parseFloat(frm.angka2.value) ; 

    let total =  a1 * a2 ;  
    frm.hasil.value = total;
    
}

function bagi(){
    let frm = document.getElementById('kal') ; 
    let a1 = parseFloat(frm.angka1.value) ;  
    let a2 = parseFloat(frm.angka2.value) ; 

    let total =  a1 /a2 ;  
    frm.hasil.value = total;
    
}

function pangkat(){
    let frm = document.getElementById('kal') ; 
    let a1 = parseFloat(frm.angka1.value) ;  
    let a2 = parseFloat(frm.angka2.value) ; 

    let total =  a1 ** a2 ;  
    frm.hasil.value = total;
    
}
// function tambah() {
//     var angka1 = parseFloat(document.getElementById("angka1").value);
//     var angka2 = parseFloat(document.getElementById("angka2").value);
//     var hasil = angka1 + angka2;
//     document.getElementById("hasil").value = hasil;
//   }
  
//   function kurang() {
//     var angka1 = parseFloat(document.getElementById("angka1").value);
//     var angka2 = parseFloat(document.getElementById("angka2").value);
//     var hasil = angka1 - angka2;
//     document.getElementById("hasil").value = hasil;
//   }
  
//   function kali() {
//     var angka1 = parseFloat(document.getElementById("angka1").value);
//     var angka2 = parseFloat(document.getElementById("angka2").value);
//     var hasil = angka1 * angka2;
//     document.getElementById("hasil").value = hasil;
//   }
  
//   function bagi() {
//     var angka1 = parseFloat(document.getElementById("angka1").value);
//     var angka2 = parseFloat(document.getElementById("angka2").value);
//     if (angka2 == 0) {
//       alert("Error: Division by zero");
//       return;
//     }
//     var hasil = angka1 / angka2;
//     document.getElementById("hasil").value = hasil;
//   }
  
//   function pangkat() {
//     var angka1 = parseFloat(document.getElementById("angka1").value);
//     var angka2 = parseFloat(document.getElementById("angka2").value);
//     var hasil = Math.pow(angka1, angka2);
//     document.getElementById("hasil").value = hasil;
//   }