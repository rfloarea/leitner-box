import React from "react";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import CreateCardForm from "./components/CreatCardForm/CreateCardForm";


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
  
  function handleCreateCard(tentativeCard) {
    const nextCards = [...cards, tentativeCard];
    setCards(nextCards);
  };

    return (
    <>
      <Header />
      <CreateCardForm handleCreateCard={handleCreateCard} />
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
};

export default App;