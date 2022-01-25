let myQuestions = [
  {
      question: "Qu'est ce que ABT ?",
      answer: ['Une marque de voiture', 'Un préparateur Automobile', "Le nom d'une franchise de jeu de Voiture", 'Un type de moteur'],
      correctAnswer: 'Un préparateur Automobile'
  },
  {
      question: "Comment fonctionne le turbo d'une voiture ?",
      answer: ["Il aspire l'air", "Il souffle l'air", "Il brule l'air", "Il aspire l'essence"],
      correctAnswer: "Il aspire l'air"
  },
  {
      question: "Combien de générations de GOLF existe t'il (2022) ?",
      answer: ["6", "7", "8", "9"],
      correctAnswer: "8"
  },
  {
      question: "Quel est le nom de la marque de voiture qui place le contact a gauche (trou pour la clé)?",
      answer: ["Audi", "Lamborghini", "Aston Martin", "Porsche"],
      correctAnswer: "Porsche"
  },
  {
      question: "Entre ces voiture laquelle est la plus rapide sur un 0-100km/h ?",
      answer: ["Bugatti Chiron Pur Sport", "Bugatti Veyron", "Tesla model S plaid", "Koenigsegg Regera"],
      correctAnswer: "Tesla model S plaid"
  },
  {
    question: "Qui a auparavant racheté Nissan ?",
    answer: ["Bugatti", "Volkswagen", "Renault", "Ferrari"],
    correctAnswer: "Renault"
  },
  {
      question: "En quelle année est sortie l'audi RS6(C7) ?",
      answer: ["2011", "2012", "2013", "2015"],
      correctAnswer: "2012"
  },
  {
      question: "Quelle marque compte bientôt faire son entrée en formule 1 ?",
      answer: ["Nissan", "Bugatti", "Porsche", "Renault"],
      correctAnswer: "Porsche"
  },
  {
      question: "Complétez le nom du circuit auto suivant : Nürbur",
      answer: ["sring", "cring", "kring", "gring"],
      correctAnswer: "gring"
  },
  {
      question: "Quel est le nom du champion du monde de Formule 1 (2021) ?",
      answer: ["Fernando Alonso", "Michael Schumacher", "Lewis Hamilton", "Max Verstappen"],
      correctAnswer: "Max Verstappen"
  }
]

correctArray = ["Un préparateur Automobile", "Il aspire l'air", "8", "Porsche", "Tesla model S plaid", "Renault", "2012", "Porsche", "gring" , "Max Verstappen"]

let score = 0;
let counter = 1;
let i = 0;
let j = 0;
let response;
let finished = false;
let buttons = document.getElementById('buttons')
let finalresult = document.getElementById('finalresult')
let setquestion = document.querySelector('#question')
let setoptions = document.querySelectorAll('.option')
let eventoptions = document.querySelector('option')
sessionStorage.removeItem('score')
sessionStorage.removeItem('questions')
sessionStorage.removeItem('correctanswer')

function SetQuestions() {
  
  for (j = 0; j < setoptions.length; j++) {
    setoptions[j].textContent = myQuestions[i].answer[j]
    setoptions[j].setAttribute('value', myQuestions[i].answer[j])
  }
  setquestion.textContent = myQuestions[i].question;
  document.getElementById("score").innerHTML = "Votre score : " + score;
  document.getElementById("question-counter").textContent = counter + "/" + myQuestions.length;
}
  
SetQuestions()

  for (let k = 0; k < setoptions.length; k++) {
    setoptions[k].onclick = function(evt) {
    response = evt.target.value;
    if (counter == myQuestions.length) {
      finished = true;
      if (finished == true) {
        console.log(finished);
        sessionStorage.setItem('questions', myQuestions.length);
        sessionStorage.setItem('correctanswer', JSON.stringify(correctArray))
        let addButton = document.createElement('a');
        addButton.setAttribute('class', 'btn btn-primary')
        addButton.setAttribute('href', 'result.html')
        addButton.textContent = "Voir Resultats";
        finalresult.appendChild(addButton)
      }
    }
    }
  }
  

buttons.addEventListener('click', function() {
    if (counter <= myQuestions.length) {
      counter++
      if (response == myQuestions[i].correctAnswer) {
        score++;
        i++;
        sessionStorage.setItem('score', score);
        if (i != myQuestions.length) {
          SetQuestions();
        }
      } else {
        i++
        sessionStorage.setItem('score', score);
        if (i != myQuestions.length) {
          SetQuestions();
        }
      }
      document.getElementById("score").innerHTML = "Votre score : " + score;
    }
    
})

