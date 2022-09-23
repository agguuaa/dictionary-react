import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <ul className="Phonetic">
        <a href={props.phonetic.audio}>Listen</a>

        {props.phonetic.text}
      </ul>
    );
  } else {
    return null;
  }
}
