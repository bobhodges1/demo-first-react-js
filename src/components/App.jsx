import episodes from "../data/episodes.json";

function Greeting({ names }) {
    return <h2>Hello, {names.join(', ')}</h2>;
}

function Sum(props) {
    return (
        <p>
            {props.num1} + {props.num2} = {props.num1 + props.num2} {props.label}
        </p>
    );
}

function TVEpisode(props) {
    return (
        <div>
            <h2>{props.episodeData.name}</h2>
            <p>{props.episodeData.summary}</p>
        </div>
    );
}

function Footer() {
    return (
        <footer>
            Uses <a href="https://oxal.org/projects/sakura/">Sakura CSS.</a>
            <br></br>
            Uses <a href="https://github.com/bobhodges1/demo-first-react-js"> Bob's Github for source code.</a>
        </footer>
    );
}

function MyHeader() {
    return (
        <header>
            <h1>Welcome to my first React app</h1>
        </header>
    );
}

export default function App() {
    return (
        <div>
            <MyHeader />
            <Greeting names= {["Dani", "Neill", "Huss"]} />
            
            <Sum num1={10} num2={2010} label="stetson hats"/>
            <Sum num1={39} num2={5} label="ponchos" /> 
            <TVEpisode episodeData={episodes[0]} />
            <TVEpisode episodeData={episodes[1]} />
            <Footer />
        </div>
    );
}
