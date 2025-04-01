const quizQuestions = [
  {
    question: "Onde foi tirada a primeira foto icônica da nossa amizade?",
    options: ["Na praia", "Em Caldas", "No parque", "Na escola"],
    correctAnswer: "Em Caldas",
  },
  {
    question: "O que aconteceu durante o estudo de biologia no sítio?",
    options: [
      "Caímos na piscina com o livro",
      "Espirrei sangue no livro",
      "Perdemos o livro",
      "Rasgamos o livro acidentalmente",
    ],
    correctAnswer: "Espirrei sangue no livro",
  },
  {
    question: "Qual foi a nossa primeira conquista esportiva juntos?",
    options: [
      "Medalha de ouro no vôlei",
      "Medalha de prata em um campeonato",
      "Troféu de futebol",
      "Competição de natação",
    ],
    correctAnswer: "Medalha de prata em um campeonato",
  },
  {
    question: "Com quem eu te comparei quando estávamos testando cortes de cabelo?",
    options: ["Neymar", "Justin Bieber", "Cristiano Ronaldo", "BTS"],
    correctAnswer: "Justin Bieber",
  },
  {
    question: "Em que ano foi a nossa saída para o São João mencionada na timeline?",
    options: ["2021", "2022", "2023", "2024"],
    correctAnswer: "2023",
  },
]

// Função para inicializar o quiz
function initQuiz() {
  const quizContainer = document.getElementById("quiz-container")
  quizContainer.innerHTML = ""

  quizQuestions.forEach((q, index) => {
    const questionDiv = document.createElement("div")
    questionDiv.className = "question"
    questionDiv.innerHTML = `
      <h3>Pergunta ${index + 1}:</h3>
      <p>${q.question}</p>
      <div class="options">
        ${q.options
          .map(
            (option, i) => `
          <div>
            <input type="radio" id="q${index}_o${i}" name="q${index}" value="${option}">
            <label for="q${index}_o${i}">${option}</label>
          </div>
        `,
          )
          .join("")}
      </div>
    `
    quizContainer.appendChild(questionDiv)
  })
}

// Função para verificar as respostas
function checkAnswers() {
  let allCorrect = true

  quizQuestions.forEach((q, index) => {
    const selectedOption = document.querySelector(`input[name="q${index}"]:checked`)

    if (!selectedOption || selectedOption.value !== q.correctAnswer) {
      allCorrect = false
    }
  })

  if (allCorrect) {
    // Mostrar o certificado se todas as respostas estiverem corretas
    document.getElementById("quiz").style.display = "none"
    document.getElementById("certificate").style.display = "block"
  } else {
    // Reiniciar o quiz se alguma resposta estiver errada
    alert("Ops! Alguma resposta está incorreta. Vamos tentar novamente!")
    initQuiz()
  }
}

// Função para "baixar" o certificado
function downloadCertificate() {
  // Criar um link para download da imagem
  const link = document.createElement("a")
  link.href = "images/friendship-certificate.png" // Caminho para a imagem do certificado
  link.download = "Certificado_de_Amizade_Pedro_e_Samuel.png"

  // Adicionar o link ao documento, clicar nele e depois remover
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

// Inicializar o quiz quando a página carregar
document.addEventListener("DOMContentLoaded", initQuiz)