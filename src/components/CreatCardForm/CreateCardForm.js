import React from "react";

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

export default CreateCardForm;