// ajout du score :
let scoreplace = document.getElementById('finalscore');

let Addscore = document.createElement('h2');
let GetfromStorageScore = sessionStorage.getItem('score');
Addscore.textContent = GetfromStorageScore + "/";

let Questioncounter = document.createElement('h2');
let GetfromStorageQuestions = sessionStorage.getItem('questions');
Questioncounter.textContent = GetfromStorageQuestions;


scoreplace.appendChild(Addscore);
scoreplace.appendChild(Questioncounter);

//ajout des bonnes reponses :
let correctanswer = JSON.parse(sessionStorage.getItem('correctanswer'));
let selectul = document.getElementById('correctanswer');
let counter = 1;
for (let i = 0; i < correctanswer.length; i++) {
    createli = document.createElement('li')
    createli.innerHTML = "Question " + counter + " : ";
    createspan = document.createElement('span')
    createspan.innerHTML = correctanswer[i]
    createli.appendChild(createspan);
    selectul.appendChild(createli);
    counter++;
}


