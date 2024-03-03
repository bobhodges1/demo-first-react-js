// eslint-disable-next-line no-unused-vars
import React from "react";
import episodes from "../data/episodes.json";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { GreetingEN, GreetingESP, GreetingITA } from "./Greetings";
import { Sum } from "./Maths";
import { TVEpisode } from "./Entertainment";
import { ReverseWord } from "./StringFunctions";

export default function App() {
  return (
    <div>
      <Header />
      <GreetingEN names={["Dani", "Neill", "Huss"]} />
      <GreetingESP names={["Dani", "Neill", "Huss"]} />
      <GreetingITA />
      <Sum num1={10} num2={2010} label="stetson hats" />
      <Sum num1={39} num2={5} label="ponchos" />
      <TVEpisode episodeData={episodes[0]} />
      <TVEpisode episodeData={episodes[1]} />
      <ReverseWord originalWord="Kumquat" />
      <Footer />
    </div>
  );
}
