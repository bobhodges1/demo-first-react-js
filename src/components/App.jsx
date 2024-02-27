// eslint-disable-next-line no-unused-vars
import React from "react";
import episodes from "../data/episodes.json";
import { Header } from "./Header";
import { Footer } from "./Footer";

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
            <br />
            <img src={props.episodeData.image.medium }/>
        </div>
    );
}

function ReverseWord(props) {
        return (
        <p>
            {props.originalWord.split('').reverse().join('')}
        </p>
    )
}

export default function App() {
    return (
        <div>
            <ReverseWord originalWord= "Kumquat" />
            <Header />
            <Greeting names= {["Dani", "Neill", "Huss"]} />            
            <Sum num1={10} num2={2010} label="stetson hats"/>
            <Sum num1={39} num2={5} label="ponchos" /> 
            <TVEpisode episodeData={episodes[0]} />
            <TVEpisode episodeData={episodes[1]} />            
            <Footer />
        </div>
    );
}
