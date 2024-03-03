export function GreetingEN({ names }) {
  return <h2>Hello, {names.join(", ")}</h2>;
}

export function GreetingESP(props) {
  const htmlFrags = [];
  for (let name of props.names) {
    let frag = (
      <p key={name}>
        {name}
        <button>{name}</button>
      </p>
    );
    htmlFrags.push(frag);
  }

  return <h2>Hola, {htmlFrags}</h2>;
}

export function GreetingITA() {
  const people = [
    { name: "Dani", id: 1 },
    { name: "Huss", id: 2 },
    { name: "Neill", id: 3 },
  ];

  const listPeople = people.map((person) => (
    <li key={person.id}>
      Ciao, {person.name}
      <button>{person.name}</button>
    </li>
  ));
  return <ul>{listPeople}</ul>;
}
