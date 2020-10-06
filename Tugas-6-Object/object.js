// Jawaban Soal Nomor 1

function arrayToObject(input){
    var tampung = ""
    var now = new Date()
    var thisYear = now.getFullYear()

    for(var i = 0; i < input.length; i++){
        if(input[i][3] == null){
            tampung += 
            (i + 1) + ".     " +
            input[i][0] + " " + input[i][1] + ": {" +
            "\nfirstName: " + input[i][0] +
            "\nlastName: " + input[i][1] +
            "\nGender: " + input[i][2] +
            "\nAge: " + "Invalid Birth Year" + "\n}\n"
        } else if(input[i][3] > thisYear){
            tampung += 
            (i + 1) + ".     " +
            input[i][0] + " " + input[i][1] + ": {" +
            "\nfirstName: " + input[i][0] +
            "\nlastName: " + input[i][1] +
            "\nGender: " + input[i][2] +
            "\nAge: " + "Invalid Birth Year" + "\n}\n"
        } else {
            tampung += 
            (i + 1) + ".     " +
            input[i][0] + " " + input[i][1] + ": {" +
            "\nfirstName: " + input[i][0] +
            "\nlastName: " + input[i][1] +
            "\nGender: " + input[i][2] +
            "\nAge: " + (thisYear - input[i][3]) + "\n}\n"
        }
    }
    return tampung
}

var input= [["Abduh", "Muhamad", "male", 1992], ["Ahmad", "Taufik", "male", 1985]]
console.log(arrayToObject(input))

var people = [ ["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"] ]
console.log(arrayToObject(people))

var people2 = [ ["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023] ]
console.log(arrayToObject(people2) )

// Jawaban Soal Nomor 2

function shoppingTime(memberId, money){
    if(money < 50000){
        return "Mohon Maaf, Uang tidak cukup"
    } else if(memberId === null && money !=null){
        return "Mohon Maaf, Toko X hanya berlaku untuk member saja"
    } else if(memberId === null){
        return "Mohon Maaf, Toko X hanya berlaku untuk member saja"
    }else if(memberId != null){
        for(i = 0; i < 5; i++){
            var moneyChange = 0
            var shop = []
            if(money >= 1500000){
                money = money - 1500000
                shop.push("Sepatu Stacattu")
                moneyChange = money
            } else if(money > 500000){
                money = money - 500000
                shop.push("Baju Zorro")
                moneyChange = money
            } else if(money >= 250000){
                money = money - 250000
                shop.push("Baju H&N")
                moneyChange = money
            } else if(money >= 175000){
                money = money - 175000
                shop.push("Sweater Uniklooh")
                moneyChange = money
            } else if(money >= 50000){
                money = money - 50000
                shop.push("Casing Handphone")
                moneyChange = money
            }
        }
    }
    return "memberId: " + memberId + "\nMoney: " + money + "\nlistPurchased: [" + shop + "]\nchangeMoney: " + moneyChange + "\n\n"
}

console.log(shoppingTime('1820RzKrnWn08', 2475000))
console.log(shoppingTime('82Ku8Ma742', 170000))
console.log(shoppingTime('', 2475000));
console.log(shoppingTime('234JdhweRxa53', 15000));
console.log(shoppingTime()); 

// Jawaban Soal Nomor 3

function naikAngkot(arrPenumpang){
    var rute = ["A","B","C","D","E", "F"]
    var arrOutput = []
    if (arrPenumpang.length <= 0){
        return []
    }

    for(var i = 0; i< arrPenumpang.length; i++){
        var objOutput= {}
        var asal = arrPenumpang [i][1]
        var tujuan = arrPenumpang [i][2]

        var indexAsal;
        var indexTujuan;

    for (var j = 0; j<rute.length; j++){
        if(rute[j] == asal){
            indexAsal = j
        }else if (rute [j]== tujuan){
            indexTujuan= j
        }
    }
    var bayar = (indexTujuan- indexAsal) * 2000
    
    objOutput.penumpang = arrPenumpang[i][0]
    objOutput.naikDari = asal
    objOutput.tujuan = tujuan
    objOutput.bayar = bayar

    arrOutput.push(objOutput)
    }
    return arrOutput
}

   
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
   
  console.log(naikAngkot([])); //[]