$(document).ready(function () {

    //1) creare un oggetto che rappresenta uno studente: ogni studente è caratterizzato da un nome, un cognome e un'età. Attraverso un ciclo for-in stampare a schermo tutte le sue proprietà e il relativo valore

    var student = {
        'name': 'Elon',
        'surname': 'Musk',
        'age': '49'
    }

    for (var key in student) {
        console.log(student);
        console.log(student[key]);
    }

    //2) creare un array di oggetti "studente". Ciclare su tutti gli studenti e stampare per ciascuno il nome e il cognome

    var studentList = [
        {
            'name': 'Bill',
            'surname': 'Gates',
            'age': '65'
        },
        {
            'name': 'Kevin',
            'surname': 'Mitnick',
            'age': '57'
        },
        {
            'name': 'Jeff',
            'surname': 'Bezos',
            'age': '56'
        },
        {
            'name': 'Elliot',
            'surname': 'Alderson',
            'age': '39'
        }
    ]

    for (var i = 0; i < studentList.length; i++) {
        var myStudent = studentList[i];
        var studentName = myStudent['name'];
        var studentSurname = myStudent['surname'];
        console.log(studentName + ' ' + studentSurname);
    }

    //3) tramite 3 prompt, chiedere all'utente il nome, il cognome e l'età di un nuovo studente. Creare con questi dati un nuovo oggetto e inserirlo nell'array del punto precedente.

    var newStudent = {
        'name': userNameChoice,
        'surname': userSurnameChoice,
        'age': userAgeChoice
    };

    var userNameChoice = prompt("Inserisci un nome");
    newStudent.name = userNameChoice;
    var userSurnameChoice = prompt("Inserisci un cognome");
    newStudent.surname = userSurnameChoice;
    var userAgeChoice = prompt("Inserisci un età");
    newStudent.age = userAgeChoice;

    var addNewStudent = studentList.push(newStudent);
    console.log(studentList);

});
