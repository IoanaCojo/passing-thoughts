import React, { useEffect } from 'react';

export function Thought(props) {
  const { thought, removeThought } = props;

  useEffect(() => {
    const timeRemaining = thought.expiresAt - Date.now();

    const timeout = setTimeout(() => {
      removeThought(thought.id)
    }, timeRemaining ) 
    return () => {
      clearTimeout(timeout)}
  }, [thought]) //call thought as the second arg of effect so it will run every time thought is differect

  const handleRemoveClick = () => {
    removeThought(thought.id);
  };

  return (
    <li className="Thought">
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
      <div className="text">{thought.text}</div>
    </li>
  );
}
