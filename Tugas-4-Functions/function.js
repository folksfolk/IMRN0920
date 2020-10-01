// Jawaban Soal Nomor 1

function teriak(){
    return "Halo Sanbers!";
}

console.log(teriak());

// Jawaban Soal Nomor 2

function kalikan(num1, num2){
    return num1 * num2;
}

var num1 = 12;
var num2 = 4;

var hasilKali = kalikan(num1, num2)
console.log(hasilKali);

// Jawaban Soal Nomor 3

function introduce(name, age, address, hobby){
    return "Nama saya " + name + ", umur saya " + age + " tahun, alamat saya di " + address + ", dan saya punya hobby, yaitu " + hobby + "!";
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogyakarta";
var hobby = "Gaming";

var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan);