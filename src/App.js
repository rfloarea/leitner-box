import React from "react";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";


function App() {
  const [cards, setCards] = React.useState([
    {
      source: "hello",
      target: "bună ziua",
    },
    {
      source: "goodbye",
      target: "la revedere",
    },
  ]);
  
    return (
    <>
      <Header />
      <ul>
        {cards.map((card) => (
          <Card 
            key={Math.random()} 
            source={card.source} 
            target={card.target} />
        ))}
      </ul>
    </>
  );
}

export default App;