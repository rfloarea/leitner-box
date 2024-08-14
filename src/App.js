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
}

function CreateCardForm({ handleCreateCard }) {
  const [tentativeCard, setTentativeCard] = React.useState({ source: "", target: "" });

  function handleSubmit(e) {
    e.preventDefault();
    handleCreateCard(tentativeCard);
    setTentativeCard({ source: "", target: "" });
  };

  function handleUpdateSource(e) {
    setTentativeCard({
      ...tentativeCard,
      source: e.target.value
    });
  };

  function handleUpdateTarget(e) {
    setTentativeCard({
      ...tentativeCard,
      target: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="source">Source Language</label>
      <input
        type="text"
        id="source"
        value={tentativeCard.source}
        onChange={handleUpdateSource}
      ></input>
      <label htmlFor="target">Target Language</label>
      <input
        type="text"
        id="target"
        value={tentativeCard.target}
        onChange={handleUpdateTarget}
      ></input>
      <button type="submit">
        Create Card
      </button>
    </form>
  );
};

export default App;