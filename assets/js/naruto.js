let myQuestions = [
  {
      question: 'qui est minato (Pour Naruto) ?',
      answer: ['son pere', 'sa mere', 'sa soeur', 'son chien'],
      correctAnswer: "son pere"
  },
  {
      question: "qu'est ce que le chakra ?",
      answer: ["un dragon", "a manger", "de l'energie", "une arme"],
      correctAnswer: "de l'energie"
  },
  {
      question: "comment meurt Neji ?",
      answer: ["d'une attaque de Juubi", "De vieillesse", "En combatant Hinata (Fin Shippuden)", "En trébuchant"],
      correctAnswer: "d'une attaque de Juubi"
  },
  {
      question: "Qu'est-ce qu'un Bijuu ?",
      answer: ["L'ennemi juré de Sasuke", "Une pierre précieuse", "Un des 9 démons", "Un plat Japonnais"],
      correctAnswer: "Un des 9 démons"
  },
  {
      question: "Qui est le Tsuchikage ?",
      answer: ["Le chef d'Iwagakure", "Le chef de Konoha", "Le chef d'Amegakure", "Le chef d'Otogakure"],
      correctAnswer: "Le chef d'Iwagakure"
  },
  {
      question: "Comment est mort Hanzo la salamandre ?",
      answer: ["Contre Mifune", "En s'empoisonnant (Avec la Salamandre)", "Contre Nagato (Pain Yahiko)", "De vieillesse"],
      correctAnswer: "Contre Nagato (Pain Yahiko)"
  },
  {
      question: "Durant la grande guerre le frère de Suigetsu est ressuscité, comment s'appelle t-il ?",
      answer: ["Zabuza", "Jinpachi", "Mangetsu", "Kushimaru"],
      correctAnswer: "Mangetsu"
  },
  {
      question: "Quel est le nom de la technique de Madara pour faire un double invisible ?",
      answer: ["Limbo", "Geass", "Amaterasu", "Takemikazuchi"],
      correctAnswer: "Limbo"
  },
  {
      question: "Qui a élaboré le projet 'Oeil de lune' (Tsuki no Me Keikaku) ?",
      answer: ["Momoshiki", "Madara", "Juubi lui même", "Kaguya"],
      correctAnswer: "Madara"
  },
  {
      question: "Quel est le prénom d'un des 9 Bijuus ?",
      answer: ["Saikô", "Gyûki", "Gobi", "Nibi"],
      correctAnswer: "Gyûki"
  }
]

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

