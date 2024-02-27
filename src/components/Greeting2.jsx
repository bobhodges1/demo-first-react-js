export function Greeting2(props) {
  const htmlFrags = [];
  for (let name of props.names) {
    let frag = <p key={name}>{name}</p>;
    htmlFrags.push(frag);
  }

  return <h2>Hola, {htmlFrags}</h2>;
}
