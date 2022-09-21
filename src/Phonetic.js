import React from "react";

export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <ul className="Phonetic">
        <a href={props.phonetic.audio} target="_blank">
          Listen
        </a>
        <br />
        {props.phonetic.text}
      </ul>
    );
  } else {
    return null;
  }
}
