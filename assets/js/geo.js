let myQuestions = [
  {
      question: "Quel est l'état le plus au Sud-Est des USA ?",
      answer: ['Le Colorado', 'Le Texas', 'La Pennsylvanie', 'La Floride'],
      correctAnswer: 'La Floride'
  },
  {
      question: "Qu'est ce qu'une Enclave ?",
      answer: ["Un pays partageant une seule frontière et étant encerclé par un Pays uniquement", "Une politique séparatiste de plusieurs races au sein du même pays", "Un instrument de mesure", "Une interdiction faite par un gouvernement de laisser partir les navires étrangers mouillés dans ses ports."],
      correctAnswer: "Un pays partageant une seule frontière et étant encerclé par un Pays uniquement"
  },
  {
      question: "Quelle est la plus grande Ville de l'hémisphère Sud ?",
      answer: ["Dubaï (Qatar)", "São Paulo (Brésil)", "Kinshasa (RD Congo)", "Sydney (Australie)"],
      correctAnswer: "São Paulo (Brésil)"
  },
  {
      question: "Quel est la population de la Megalopole de Tokyo (Tokyo et sa banlieue) ?",
      answer: ["53 343 402 Habitants", "6 186 546 Habitants", "13 962 725 Habitants", "43 203 574 Habitants"],
      correctAnswer: "43 203 574 Habitants"
  },
  {
      question: "Quel est le nom du plus grand desert Asiatique ?",
      answer: ["Désert du Karakoum (Asie Centrale)", "Desert de Gobi (Chine)", "Désert du Cholistan (inde)", "Désert du Taklamakan (Chine)"],
      correctAnswer: "Desert de Gobi (Chine)"
  },
  {
      question: "Quel est le sommet le plus haut du monde ?",
      answer: ["Kilimandjaro", "Everest", "Aconcagua", "Mont Blanc	"],
      correctAnswer: "Everest"
  },
  {
    question: "Où se trouve la république de Nauru ?",
    answer: ["Afrique", "Océanie", "Europe", "Amérique"],
    correctAnswer: "Océanie"
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