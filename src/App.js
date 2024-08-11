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
      <CreateCard />
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

function CreateCard() {
  const [tentativeCard, setTentativeCard] = React.useState({ source: "", target: "" });

  function handleCreateCard(tentativeCard) {
    console.log(tentativeCard)
  }

  function handleUpdateSource(e) {
    setTentativeCard({
      ...tentativeCard,
      source: e.target.value
    })
  }

  function handleUpdateTarget(e) {
    setTentativeCard({
      ...tentativeCard,
      target: e.target.value
    })
  }

  return (
    <div>
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
      <button
        onClick={handleCreateCard}
      >Create Card</button>
    </div>
  );
}

export default App;