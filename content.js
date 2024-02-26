// Extract article text (replace with your logic)
const articleTitle = document.querySelectorAll("h1");
const articleText = document.querySelectorAll("p");

// console.log(articleTitle[0].innerText)
// Split text into sentences

let sentences = []

articleText.forEach((article,idx)=>{
    sentences.push(article.innerText)
})

let sentence = []

sentences.forEach((article)=>{
    x = article.split(".")
    x.forEach((article)=>sentence.push(article))
})


sentences = sentence

// Randomly choose a sentence
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

var randomSentences = []
for(let i = 0;i<getRandomArbitrary(5,20);i++){
    const randomSentence = sentences[Math.floor(Math.random() * sentences.length)];
    // console.log(randomSentence)
    randomSentences.push(randomSentence)
}

console.log(randomSentences)

randomSentences.forEach((randomSentence)=>{
    // Highlight the chosen sentence (replace with your styling)
    const highlightedSentence = document.createElement("span");
    highlightedSentence.innerText = randomSentence+"<br>";
    highlightedSentence.style.backgroundColor = "yellow";
    
    // Add the highlighted sentence to the page
    document.body.appendChild(highlightedSentence);
})



