//Soal 1

var nama = "John"
var peran = ""
if(nama == "" && peran == ""){
    console.log("Nama Harus Diisi");
} else if(nama == "John" && peran == ""){
    console.log("Halo " + nama + ", Pilih peranmu untuk memulai game!")
} else if(nama == "Jane" && peran == "Penyihir"){
    console.log("Halo " + peran + " " + nama + ", Kamu dapat melihat siapa yang menjadi werewolf");
} else if(nama == "Jenita" && peran == "Guard"){
    console.log("Halo " + peran + " " + nama + ", Kamu akan membantu melindungi temanmu dari serangan werewolf");
} else if(nama == Junaedi && peran == "Werewolf"){
    console.log("Halo " + peran + " " + nama + ", Kamu dapat memangsa warga setiap malam");
} else{
    console.log("Data tidak ditemukan")
}

//Soal 2

var hari = 07; 
var bulan = 1; 
var tahun = 1995;

switch(bulan){
    case 1:
        console.log(hari + " Januari " + tahun);
        break;
    case 2:
        console.log(hari + " Februari " + tahun);
        break;
    case 3:
        console.log(hari + " Maret " + tahun);
        break;
    case 4:
        console.log(hari + " April " + tahun);
        break;
    case 5:
        console.log(hari + " Mei " + tahun);
        break;
    case 6:
        console.log(hari + " Juni " + tahun);
        break;
    case 7:
        console.log(hari + " Juli " + tahun);
        break;
    case 8:
        console.log(hari + " Agustus " + tahun);
        break;
    case 9:
        console.log(hari + " September " + tahun);
        break;
    case 10:
        console.log(hari + " Oktober " + tahun);
        break;
    case 11:
        console.log(hari + " November " + tahun);
        break;
    case 12:
        console.log(hari + " Desember " + tahun);
        break;
    default:
        console.log(hari + bulan + tahun);
        break;
}
