// Jawaban Soal Nomor 1

console.log("=============Soal Pertama==========")
function range(num1, num2){
    var array = []
    if(num1 > num2){
        for(i = num1; i>= num2; i--){
            array.push(i)
        }
    } else if(num2 > num1){
        for(i = num2; i>= num1; i--){
            array.push(i)
        }
    } else{
        return -1
    }
    return array
}


console.log(range(1, 10)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1)) // -1
console.log(range(11,18)) // [11, 12, 13, 14, 15, 16, 17, 18]
console.log(range(54, 50)) // [54, 53, 52, 51, 50]
console.log(range()) // -1 

console.log("\n")
console.log("\n")

// Jawaban Soal Nomor 2

console.log("=============Soal Kedua==========")
function rangeWithStep(startNum, finishNum, step){
    var array1 = []
    if(startNum > finishNum){
        for(j = startNum; j >= finishNum; j-=step){
            array1.push(j)
        }
    } else if(startNum < finishNum){
        for(j = finishNum; j >= startNum; j-=step){
            array1.push(j)
        }
    } else {
        return -1
    }
    return array1
}

console.log(rangeWithStep(1, 10, 2))
console.log(rangeWithStep(11, 23, 3))
console.log(rangeWithStep(5, 2, 1))
console.log(rangeWithStep(29, 2, 4))

console.log("\n")
console.log("\n")

// Jawaban Soal Nomor 3

console.log("=============Soal Ketiga==========")
function sum(num1, num2, step){
    var tampung = 0
    var array = []
    if(num1 > num2){
        for(i = num1; i>= num2; i-=step){
            array.push(i)
            tampung = tampung + i
        }
    } else if(num2 > num1){
        for(i = num1; i<= num2; i+=step){
            array.push(i)
            tampung = tampung + i
        }
    } else {
        return 1
    }
    return array + " = " + tampung
}

console.log(sum(1,10, 1)) // 55
console.log(sum(5, 50, 2)) // 621
console.log(sum(15,10, 1)) // 75
console.log(sum(20, 10, 2)) // 90
console.log(sum(1)) // 1
console.log(sum()) // 0 

console.log("\n")
console.log("\n")

// Jawaban Soal Nomor 4

console.log("=============Soal Keempat==========")
function dataHandling(input) {
    var isi = "";
    for (var i = 0; i< input.length; i++) {
        isi += 
        "Nomor Id: " + input[i][0] + 
        "\n Nama Lengkap: " + input[i][1] + 
        "\n Tempat Tanggal Lahir: " + input[i][2] +
        " - " + input[i][3] + 
        "\n Hobi: " + input[i][4];
    }
    return isi;
}

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
] 

console.log(dataHandling(input))

console.log("\n")
console.log("\n")

// Jawaban Soal Nomor 5

console.log("=============Soal Kelima==========")
function balikKata(word) {
    var balik = "";
    for (var i = word.length - 1; i>=0; i--) {
        balik += word[i];
    }
    return balik;
} 

console.log(balikKata("Kasur Rusak"))
console.log(balikKata("SanberCode"))
console.log(balikKata("Haji Ijah"))
console.log(balikKata("racecar"))
console.log(balikKata("I am Sanbers"))

console.log("\n")
console.log("\n")

// Jawaban Soal Nomor 6

console.log("=============Soal Keenam==========")
var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]

function dataHandling2(){
    input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung")
    input.splice(4, 1, "Pria", "SMA Internasional Metro")
    console.log(input)
    var tanggal = input[3].split("/")
    var bulan = tanggal[1]
    var tanggal1 = tanggal.join("-")
    switch(bulan){
        case "01":
            console.log("Januari");
            break;
        case "02":
            console.log("Ferbuari");
            break;
        case "03":
            console.log("Maret");
            break;
        case "04":
            console.log("April");
            break;
        case "05":
            console.log("Mei");
            break;
        case "06":
            console.log("Juni");
            break;
        case "07":
            console.log("Juli");
            break;
        case "08":
            console.log("Agustus");
            break;
        case "09":
            console.log("September");
            break;
        case "10":
            console.log("Oktober");
            break;
        case "11":
            console.log("November");
            break;
        case "12":
            console.log("Desember");
            break;
        default:
            console.log("Bulan Tidak Diketahui");
            break;
    }
    var kata = input[1].slice(0, 15)
    return tanggal + "\n" + tanggal1 + "\n" + kata
}

console.log(dataHandling2(input))