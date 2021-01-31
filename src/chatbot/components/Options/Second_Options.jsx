import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {

      text: "מה הצוות חושב עליו",
      handler: props.actionProvider.handleThinkers,
      id: 1,
      
    },
    {

      text: "מתי הוא בחופש",
      handler: props.actionProvider.greet,
      id: 2

    },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;