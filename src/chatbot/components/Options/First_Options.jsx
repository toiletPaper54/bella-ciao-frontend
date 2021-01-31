import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {

      text: "יאשה",
      handler: props.actionProvider.handleYasha,
      id: 1,
      
    },
    {

      text: "איך פותחים תקלה",
      handler: props.actionProvider.handleTakala,
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