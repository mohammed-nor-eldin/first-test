const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Innovation distinguishes between a leader and a follower.",
        author: "Steve Jobs"
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        text: "The only thing we have to fear is fear itself.",
        author: "Franklin D. Roosevelt"
    }
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    
    document.getElementById('quote').innerHTML = `"${randomQuote.text}"`;
    document.getElementById('author').innerHTML = `- ${randomQuote.author}`;
}

// Event listener for the button
document.getElementById('generateBtn').addEventListener('click', generateQuote);

// Generate initial quote when page loads
generateQuote();