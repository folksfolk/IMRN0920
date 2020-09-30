// Jawaban Soal Nomor 1

var a = 2;
var b = 20;
var looping1 = "";
var looping2 = "";

console.log("Looping Pertama");
while ( a <= 20) {
    if (a % 2 == 0) {
        looping1 = console.log(a + " - I Love Coding");
    }
    a ++;
}

console.log("Looping Kedua");
while (b >= 2) {
    if (b % 2 == 0) {
        looping2 = console.log(b + " - I Will Become a Mobile Developer");
    }
    b--;
}

// Jawaban Soal Nomor 2

for (var c = 1; c <= 20; c++) {
    if (c % 2 == 1) {
        if (c % 3 == 0) {
            console.log(c + " - I Love Coding");
        } else {
            console.log(c + " - Santai");
        }
    } else {
        console.log(c + " - Berkualitas");
    }
}

//Jawaban Soal Nomor 3

for(var i = 1; i <= 8; i++){
    console.log('################')
}

// Jawaban Soal Nomor 4

for ( let i = 1; i <= 7; i++) {

    let str = '';

    for(let j = 1; j <= i; j++) {
        str += '#';
    }

    console.log(str);
}

// Jawaban Soal Nomor 5

var a = 0
while(a < 8){
  var b = 0, output = ''
  while(b < 8){
    output += (a + b)%2 == 0 ? ' ' : '#'
    b++
  }
  
  console.log(output)
  a++
}