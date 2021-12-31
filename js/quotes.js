const quotes = [
    {
        quote: "quote1",
        author: "autho1",
    },
    {
        quote: "quote2",
        author: "autho2",
    },
    {
        quote: "quote3",
        author: "autho3",
    },
    {
        quote: "quote4",
        author: "autho4",
    },
    {
        quote: "quote5",
        author: "autho5",
    },
    {
        quote: "quote6",
        author: "autho6",
    },
    {
        quote: "quote7",
        author: "autho7",
    },
    {
        quote: "quote8",
        author: "autho8",
    },
    {
        quote: "quote9",
        author: "autho9",
    },
    {
        quote: "quote10",
        author: "autho10",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
