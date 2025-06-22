// প্রশ্ন এবং উত্তর সংরক্ষণের জন্য প্রশ্নের একটি তালিকা তৈরি করা হচ্ছে
const questions = [
    {
        question: "বাংলাদেশের জাতীয় ফুল কোনটি?",
        options: {a: "রজনীগন্ধা", b: "শাপলা", c: "গোলাপ", d: "চামেলী"},
        answer: "b"
    },
    {
        question: "পৃথিবীর বৃহত্তম মহাসাগর কোনটি?",
        options: {a: "আটলান্টিক", b: "ইন্ডিয়ান", c: "আর্কটিক", d: "প্রশান্ত"},
        answer: "d"
    },
    {
        question: "সূর্য কোথা থেকে ওঠে?",
        options: {a: "পশ্চিম", b: "পূর্ব", c: "উত্তর", d: "দক্ষিণ"},
        answer: "b"
    },
    {
        question: "পানি কত ডিগ্রি সেলসিয়াসে ফোটে?",
        options: {a: "90°C", b: "100°C", c: "110°C", d: "120°C"},
        answer: "b"
    }
];

let currentQuestionIndex = 0;
let score = 0;

// প্রশ্ন প্রদর্শন ফাংশন
function displayQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question").textContent = question.question;
    const options = question.options;
    const buttons = document.querySelectorAll("#answers button");

    buttons[0].textContent = options.a;
    buttons[1].textContent = options.b;
    buttons[2].textContent = options.c;
    buttons[3].textContent = options.d;

    document.getElementById("next-question-btn").style.display = "none";
}

// উত্তর জমা দেওয়া
function submitAnswer(answer) {
    const question = questions[currentQuestionIndex];
    if (answer === question.answer) {
        score++;
    }

    document.getElementById("score").textContent = `স্কোর: ${score}`;
    document.getElementById("next-question-btn").style.display = "block";  // পরবর্তী প্রশ্নের বাটন দেখানো
}

// পরবর্তী প্রশ্নের জন্য ফাংশন
function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        alert(`কুইজ শেষ! আপনার স্কোর: ${score}`);
        location.reload(); // কুইজ পুনরায় শুরু করতে পৃষ্ঠা রিফ্রেশ
    }
}

// প্রথম প্রশ্নটি প্রদর্শন শুরু
displayQuestion();
