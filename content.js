// Extract article text (replace with your logic)
const articleText = document.querySelectorAll("p");
// console.log(articleText)

// Split text into sentences

let sentences = []

articleText.forEach((article,idx)=>{
    // console.log(article.innerText)
    sentences.push(article.innerText)
})

let sentence = []

sentences.forEach((article)=>{
    x = article.split(".")
    x.forEach((article)=>sentence.push(article))
})

// console.log(sentence)

sentences = sentence

// Randomly choose a sentence
const randomSentence = sentences[Math.floor(Math.random() * sentences.length)];

// Highlight the chosen sentence (replace with your styling)
const highlightedSentence = document.createElement("span");
highlightedSentence.innerText = randomSentence;
highlightedSentence.style.backgroundColor = "yellow";

// Add the highlighted sentence to the page
document.body.appendChild(highlightedSentence);
