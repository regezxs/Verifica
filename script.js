/* ==========================================
   VERIFICA
   JavaScript — V2
========================================== */


/* ==========================================
   MENU MOBILE
========================================== */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

        menuToggle.textContent = isOpen
            ? "✕"
            : "☰";
    });


    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.textContent = "☰";

        });

    });

}


/* ==========================================
   SIMULADOR DE GOLPE
========================================== */

function checkScam(answer) {

    const feedback =
        document.getElementById("simulator-feedback");


    if (!feedback) return;


    if (answer === "golpe") {

        feedback.className =
            "simulator-feedback correct";

        feedback.innerHTML = `
            <strong>🎯 Boa decisão!</strong>

            <p>
                Essa situação apresenta vários sinais
                comuns de golpe:
            </p>

            <ul>
                <li>Pedido inesperado de dinheiro;</li>
                <li>Troca repentina de número;</li>
                <li>Situação de urgência;</li>
                <li>Pedido de Pix.</li>
            </ul>

            <p>
                Antes de transferir dinheiro, confirme
                a identidade da pessoa por outro canal.
            </p>
        `;

    }

    else if (answer === "seguro") {

        feedback.className =
            "simulator-feedback wrong";

        feedback.innerHTML = `
            <strong>⚠️ Cuidado!</strong>

            <p>
                Essa situação possui vários sinais
                comuns de golpe.
            </p>

            <p>
                Nunca faça uma transferência apenas
                porque a mensagem parece vir de
                alguém conhecido.
            </p>
        `;

    }

    else {

        feedback.className =
            "simulator-feedback warning";

        feedback.innerHTML = `
            <strong>🤔 Sua desconfiança é importante!</strong>

            <p>
                Quando houver dúvida, não transfira
                dinheiro.
            </p>

            <p>
                Entre em contato com a pessoa usando
                outro canal e confirme a situação.
            </p>
        `;

    }

}


/* ==========================================
   QUIZ
========================================== */

const questions = [

    {
        category: "Golpes por mensagem",

        question:
            "Uma pessoa conhecida manda mensagem dizendo que trocou de número e pede dinheiro por Pix. O que fazer?",

        answers: [
            "Fazer o Pix imediatamente",
            "Confirmar a identidade por outro canal",
            "Enviar seus dados bancários",
            "Compartilhar a mensagem"
        ],

        correct: 1,

        explanation:
            "Confirme a identidade por outro canal antes de enviar dinheiro."
    },


    {
        category: "Segurança digital",

        question:
            "Um e-mail diz que sua conta será bloqueada hoje e pede que você clique em um link. Qual é o principal sinal de alerta?",

        answers: [
            "A mensagem possui texto",
            "O e-mail tem uma assinatura",
            "A urgência para tomar uma decisão",
            "O e-mail chegou pela manhã"
        ],

        correct: 2,

        explanation:
            "Golpistas costumam criar urgência para impedir que você pense e verifique."
    },


    {
        category: "Desinformação",

        question:
            "Você recebe uma notícia muito surpreendente nas redes sociais. Qual é a melhor atitude?",

        answers: [
            "Compartilhar rapidamente",
            "Acreditar porque muitas pessoas compartilharam",
            "Verificar a informação em fontes confiáveis",
            "Enviar para seus grupos"
        ],

        correct: 2,

        explanation:
            "Popularidade não significa veracidade. Procure fontes confiáveis."
    },


    {
        category: "Inteligência Artificial",

        question:
            "O que é um deepfake?",

        answers: [
            "Um tipo de antivírus",
            "Um conteúdo manipulado ou criado com IA",
            "Uma senha criptografada",
            "Um aplicativo de mensagens"
        ],

        correct: 1,

        explanation:
            "Deepfakes podem manipular ou gerar imagens, vídeos e áudios."
    },


    {
        category: "Links suspeitos",

        question:
            "Você recebe um link dizendo que ganhou um prêmio e precisa preencher seus dados. O que deve fazer?",

        answers: [
            "Clicar rapidamente",
            "Informar seus dados",
            "Verificar a origem antes de qualquer ação",
            "Enviar para um amigo"
        ],

        correct: 2,

        explanation:
            "Verifique a origem e procure o serviço oficial por conta própria."
    },


    {
        category: "Redes sociais",

        question:
            "Qual dessas situações pode indicar um perfil falso?",

        answers: [
            "Pedido inesperado de dinheiro",
            "Fotos públicas",
            "Perfil com amigos",
            "Uso de uma foto de perfil"
        ],

        correct: 0,

        explanation:
            "Pedidos inesperados de dinheiro são um importante sinal de alerta."
    },


    {
        category: "IA e deepfake",

        question:
            "Por que uma mensagem de voz não deve ser considerada prova absoluta de identidade?",

        answers: [
            "Porque áudios não funcionam",
            "Porque qualquer áudio é falso",
            "Porque vozes podem ser clonadas com IA",
            "Porque mensagens de voz são perigosas"
        ],

        correct: 2,

        explanation:
            "Tecnologias de IA podem reproduzir características da voz de uma pessoa."
    },


    {
        category: "Prevenção",

        question:
            "Qual atitude reduz o risco de cair em um golpe digital?",

        answers: [
            "Agir rapidamente",
            "Verificar antes de clicar, pagar ou compartilhar",
            "Confiar em mensagens conhecidas",
            "Compartilhar informações pessoais"
        ],

        correct: 1,

        explanation:
            "Parar e verificar antes de agir é uma das melhores formas de prevenção."
    },


    {
        category: "Informação",

        question:
            "Uma informação foi compartilhada por milhares de pessoas. Isso significa que ela é verdadeira?",

        answers: [
            "Sim, sempre",
            "Sim, se estiver nas redes sociais",
            "Não. Popularidade não comprova veracidade",
            "Sim, se tiver muitas curtidas"
        ],

        correct: 2,

        explanation:
            "Uma informação pode viralizar mesmo sendo falsa."
    },


    {
        category: "Cidadania digital",

        question:
            "Qual é a melhor atitude antes de compartilhar uma informação duvidosa?",

        answers: [
            "Compartilhar para perguntar se é verdade",
            "Apagar imediatamente",
            "Verificar a informação e sua fonte",
            "Enviar para todos os contatos"
        ],

        correct: 2,

        explanation:
            "Verifique a fonte e o contexto antes de contribuir para a disseminação."
    }

];


let currentQuestion = 0;
let score = 0;
let answered = false;


/* ==========================================
   ELEMENTOS DO QUIZ
========================================== */

const questionNumber =
    document.getElementById("question-number");

const scoreElement =
    document.getElementById("score");

const progressBar =
    document.getElementById("progress-bar");

const questionCategory =
    document.getElementById("question-category");

const questionElement =
    document.getElementById("question");

const answersContainer =
    document.getElementById("answers");

const feedbackElement =
    document.getElementById("feedback");

const nextButton =
    document.getElementById("next-button");

const quizCard =
    document.getElementById("quiz-card");

const resultCard =
    document.getElementById("result-card");

const resultTitle =
    document.getElementById("result-title");

const resultScore =
    document.getElementById("result-score");

const resultMessage =
    document.getElementById("result-message");

const restartButton =
    document.getElementById("restart-button");


/* ==========================================
   CARREGAR PERGUNTA
========================================== */

function loadQuestion() {

    const current = questions[currentQuestion];

    answered = false;

    questionNumber.textContent =
        `Pergunta ${currentQuestion + 1} de ${questions.length}`;

    scoreElement.textContent =
        `Pontos: ${score}`;

    questionCategory.textContent =
        current.category;

    questionElement.textContent =
        current.question;


    const progress =
        ((currentQuestion + 1) / questions.length) * 100;

    progressBar.style.width =
        `${progress}%`;


    answersContainer.innerHTML = "";

    feedbackElement.textContent = "";

    feedbackElement.className =
        "quiz-feedback";

    nextButton.classList.remove("visible");


    current.answers.forEach((answer, index) => {

        const button =
            document.createElement("button");

        button.className =
            "answer-button";

        button.textContent =
            answer;

        button.addEventListener(
            "click",
            () => selectAnswer(index)
        );

        answersContainer.appendChild(button);

    });

}


/* ==========================================
   SELECIONAR RESPOSTA
========================================== */

function selectAnswer(selectedIndex) {

    if (answered) return;

    answered = true;


    const current =
        questions[currentQuestion];

    const buttons =
        document.querySelectorAll(".answer-button");


    buttons.forEach(button => {

        button.disabled = true;

    });


    if (selectedIndex === current.correct) {

        score++;

        buttons[selectedIndex]
            .classList.add("correct");

        feedbackElement.textContent =
            `✓ Correto! ${current.explanation}`;

        feedbackElement.classList.add(
            "correct-text"
        );

    }

    else {

        buttons[selectedIndex]
            .classList.add("wrong");

        buttons[current.correct]
            .classList.add("correct");

        feedbackElement.textContent =
            `✕ Não foi dessa vez. ${current.explanation}`;

        feedbackElement.classList.add(
            "wrong-text"
        );

    }


    scoreElement.textContent =
        `Pontos: ${score}`;

    nextButton.classList.add("visible");

}


/* ==========================================
   PRÓXIMA PERGUNTA
========================================== */

nextButton.addEventListener(
    "click",
    () => {

        currentQuestion++;

        if (currentQuestion < questions.length) {

            loadQuestion();

        }

        else {

            showResult();

        }

    }
);


/* ==========================================
   MOSTRAR RESULTADO
========================================== */

function showResult() {

    quizCard.hidden = true;

    resultCard.hidden = false;


    resultScore.textContent =
        `${score}/${questions.length}`;


    if (score === 10) {

        resultTitle.textContent =
            "Especialista em Verificação! 🏆";

        resultMessage.textContent =
            "Excelente! Você demonstrou que sabe reconhecer sinais de golpes, desinformação e conteúdos manipulados.";

    }

    else if (score >= 8) {

        resultTitle.textContent =
            "Verificador Digital! 🔎";

        resultMessage.textContent =
            "Muito bom! Você já possui bons hábitos de segurança digital e sabe quando deve desconfiar.";

    }

    else if (score >= 5) {

        resultTitle.textContent =
            "Defensor Digital! 🛡️";

        resultMessage.textContent =
            "Você está no caminho certo. Continue praticando a verificação antes de clicar, pagar ou compartilhar.";

    }

    else {

        resultTitle.textContent =
            "Em Aprendizado! 🌱";

        resultMessage.textContent =
            "Ainda há espaço para aprender. Explore o VERIFICA e tente novamente.";

    }

}


/* ==========================================
   REINICIAR QUIZ
========================================== */

restartButton.addEventListener(
    "click",
    () => {

        currentQuestion = 0;

        score = 0;

        answered = false;

        resultCard.hidden = true;

        quizCard.hidden = false;

        loadQuestion();

        quizCard.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }
);


/* ==========================================
   INICIAR QUIZ
========================================== */

loadQuestion();