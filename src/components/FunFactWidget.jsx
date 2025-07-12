import React, { useState } from 'react';
import './FunFactWidget.css';

const FACTS = [
  {
    type: 'quote',
    content: '“Code is like humor. When you have to explain it, it’s bad.”',
    author: 'Cory House'
  },
  {
    type: 'fact',
    content: 'The first computer bug was an actual moth found in a computer in 1947.'
  },
  {
    type: 'question',
    content: 'What does the acronym “HTML” stand for?',
    answer: 'HyperText Markup Language'
  },
  {
    type: 'puzzle',
    content: 'I am a five-letter word and a popular programming language. Remove my first letter and I become a type of drink. What am I?',
    answer: 'Java (remove J → ava)'
  },
  {
    type: 'fact',
    content: 'The first 1GB hard disk drive was announced in 1980, weighed 550 pounds, and cost $40,000.'
  },
  {
    type: 'quote',
    content: '“Programs must be written for people to read, and only incidentally for machines to execute.”',
    author: 'Harold Abelson'
  },
  {
    type: 'question',
    content: 'Which sorting algorithm is known for its “divide and conquer” approach?',
    answer: 'Quick Sort'
  },
  {
    type: 'puzzle',
    content: 'I am not alive, but I can grow. I don’t have lungs, but I need air. What am I?',
    answer: 'A computer virus'
  },
  {
    type: 'fact',
    content: 'The original name for Windows was “Interface Manager”.'
  },
  {
    type: 'quote',
    content: '“Talk is cheap. Show me the code.”',
    author: 'Linus Torvalds'
  },
  {
    type: 'fact',
    content: 'Ada Lovelace is considered the first computer programmer, writing an algorithm in the 1800s for Charles Babbage’s Analytical Engine.'
  },
  {
    type: 'quote',
    content: '“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”',
    author: 'Martin Fowler'
  },
  {
    type: 'question',
    content: 'What is the name of the protocol used to send web pages over the internet?',
    answer: 'HTTP (HyperText Transfer Protocol)'
  },
  {
    type: 'puzzle',
    content: 'I’m used for styling web pages. My acronym contains three letters. Without me, the web would be black and white. What am I?',
    answer: 'CSS'
  },
  {
    type: 'fact',
    content: 'The Apollo 11 guidance computer had less processing power than a modern-day calculator.'
  },
  {
    type: 'quote',
    content: '“First, solve the problem. Then, write the code.”',
    author: 'John Johnson'
  },
  {
    type: 'question',
    content: 'Which programming language’s logo features a cup of hot coffee?',
    answer: 'Java'
  },
  {
    type: 'puzzle',
    content: 'I store data in key-value pairs and am often used in APIs. Remove my first letter and I become a type of object in art. What am I?',
    answer: 'JSON (remove J → “son”)'
  },
  {
    type: 'fact',
    content: 'Python is named after the British comedy group “Monty Python,” not the snake.'
  },
  {
    type: 'quote',
    content: '“Experience is the name everyone gives to their mistakes.”',
    author: 'Oscar Wilde'
  }  
];

function getRandomFact() {
  return FACTS[Math.floor(Math.random() * FACTS.length)];
}

const FunFactWidget = () => {
  const [fact, setFact] = useState(getRandomFact());
  const [showAnswer, setShowAnswer] = useState(false);
  const [visible, setVisible] = useState(true);

  const handleNext = () => {
    setFact(getRandomFact());
    setShowAnswer(false);
  };

  // Show emoji button when widget is closed
  if (!visible) {
    return (
      <button 
        className="fun-fact-toggle-btn" 
        onClick={() => setVisible(true)}
        title="Show fun facts"
      >
        🧠
      </button>
    );
  }

  return (
    <div className="fun-fact-widget">
      <button className="close-fact-btn" onClick={() => setVisible(false)} title="Close">×</button>
      <div className="fun-fact-content">
        {fact.type === 'quote' && (
          <>
            <div className="fun-fact-type">💡 Quote</div>
            <div className="fun-fact-text">{fact.content}</div>
            <div className="fun-fact-author">— {fact.author}</div>
          </>
        )}
        {fact.type === 'fact' && (
          <>
            <div className="fun-fact-type">🤓 Fun Fact</div>
            <div className="fun-fact-text">{fact.content}</div>
          </>
        )}
        {(fact.type === 'question' || fact.type === 'puzzle') && (
          <>
            <div className="fun-fact-type">🧩 {fact.type === 'question' ? 'Question' : 'Puzzle'}</div>
            <div className="fun-fact-text">{fact.content}</div>
            <button className="reveal-btn" onClick={() => setShowAnswer(!showAnswer)}>
              {showAnswer ? 'Hide Answer' : 'Reveal Answer'}
            </button>
            {showAnswer && <div className="fun-fact-answer">{fact.answer}</div>}
          </>
        )}
      </div>
      <button className="next-fact-btn" onClick={handleNext} title="Show another fact">
        Next
      </button>
    </div>
  );
};

export default FunFactWidget; 