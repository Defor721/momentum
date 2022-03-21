const quotes = [
  {
    quote: "Who controls the present controls the past",
    author: "George Orwell",
  },
  {
    quote: "Work banishes those three great evils- boredom, vice and poverty",
    author: "Goethe",
  },
  {
    quote:
      "One man who has a mind and knows it acn always beat ten men who haven't and don't",
    author: "George Bernard Shaw",
  },
  {
    quote:
      "We have no more right to consume happiness without producing it than to consume wealth without producing it",
    author: "George Bernard Shaw",
  },
  {
    quote: "Time is a great teacher, but unfortunately it kills all its pupils",
    author: "Hector Berlioz",
  },
  {
    quote:
      "Although the world is full of suffering, it is full also of the overcoming of it",
    author: "Helen Keller",
  },
  {
    quote:
      "Once you say you're going to settle for second, that's what happens to you in life, I find.",
    author: "John F. Kennedy",
  },
  {
    quote: "Nothing is more despicable than respect based on fear",
    author: "Albert Camus",
  },
  {
    quote:
      "It is only with the heart that one can see rightly. what is essential is invisible to the eye",
    author: "Antoine de saint-Exupery",
  },
  {
    quote:
      "Love dose not consist in gazing at each other, but in looking together in the same direction",
    author: "Antoine de saint-Exupery",
  },
  {
    quote:
      "You can learn a little from victory. you can learn everything from defeat",
    author: "Christy Mathewson",
  },
  {
    quote:
      "There are two ways of spreading light. to be candle or the mirror that reflects it.",
    author: "Edith Wharton",
  },
  {
    quote:
      "Only the person who has faith in himself is able to be faithful to others",
    author: "Erich Fromm",
  },
  {
    quote:
      " It is not God’s will merely that we should be happy, but that we should make ourselves happy",
    author: "Kant",
  },
];
//length:14

const quote = document.querySelector("#quotes span:first-child")
const author = document.querySelector("#quotes span:last-child")

const todaysQuote= quotes[Math.floor((Math.random()*(quotes.length)))]

//round 반올림
//ceil 올림
//floor 내림

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;