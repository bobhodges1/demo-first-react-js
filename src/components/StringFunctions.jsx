export function ReverseWord(props) {
  return (
    <p>
      <b>Original Word: </b>
      {props.originalWord} <b>Reversed Word: </b>
      {props.originalWord.split("").reverse().join("")}
    </p>
  );
}
