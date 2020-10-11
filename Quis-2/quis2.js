var Score = class {
    constructor(email, subject, points) {
        this.subject = subject;
        this.points = points;
        this.email = email;
    }

    set __points(array){
        this.points = []
        for(var i = 0; i < array.length; i++){
            points.push(array[i])
        }
    }

    average(array){
        nilai = 0
        pembagi = 0
        for(var i = 0; i < array.length; i++){
            nilai = nilai + array[i]
            pembagi = pembagi + i
        }

        hasil = nilai / pembagi
        return hasil
    }

    show(){
        return  "email: " + this.email + 
                ", subject: " + this.subject +
                ", points: " + this.points
    }
}

const data = [
    ["email", "quiz - 1", "quiz - 2", "quiz - 3"],
    ["abduh@mail.com", 78, 89, 90],
    ["khairun@mail.com", 95, 85, 88],
    ["bondra@mail.com", 70, 75, 78],
    ["regi@mail.com", 91, 89, 93]
  ]

function viewScores(data, subject){
    var tampung = []
    for(var i = 1; i < data.length; i++){
        if(subject == "quiz-1"){
            data[i] = new Score(data[i][0], "quiz - 1", data[i][1])
            tampung.push(data[i].show())
        } else if(subject == "quiz-2"){
            data[i] = new Score(data[i][0], "quiz - 2", data[i][2])
            tampung.push(data[i].show())
        } else if(subject == "quiz-3"){
            data[i] = new Score(data[i][0], "quiz - 3", data[i][3])
            tampung.push(data[i].show())
        }
    }
}

// TEST CASE
viewScores(data, "quiz-1")
viewScores(data, "quiz-2")
viewScores(data, "quiz-3")

function recapScores(data){
    var tampung = ""
    var pembagi = 0
    var membagi = 0
    for(var i = 1; i < data.length; i++){
        membagi = membagi + data[i][1] + data[i][2] + data[i][3]
        pemabgi = pembagi + 1
    }

    var hasil = membagi / pembagi

    for(var j = 1; j < data.length; j++){
        if(hasil > 90){
            tampung += 
            [j] + ". Email: " + data[j][0] +
            "\nRata-rata: " + hasil +
            "\nPredikat: " + "Honour"
        } else if(hasil > 80 && hasil <= 89){
            tampung += 
            [j] + ". Email: " + data[j][0] +
            "\nRata-rata: " + hasil +
            "\nPredikat: " + "Graduate"
        } else if(hasil > 70 && hasil <= 79){
            tampung += 
            [j] + ". Email: " + data[j][0] +
            "\nRata-rata: " + hasil +
            "\nPredikat: " + "Participant"
        }
    }
}
  
  recapScores(data);