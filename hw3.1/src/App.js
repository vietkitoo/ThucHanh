import { useState } from "react";
import Drum from "./drumkit";


function App() {
  const [sounds, setSounds] = useState([
    {
			name: "a",
			sound: require("./sounds/a.mp3"),
			key: "A",
    },
    {
			name: "s",
			sound: require("./sounds/s.mp3"),
			key: "S",
		},
    {
			name: "w",
			sound: require("./sounds/w.mp3"),
			key: "W",
		},
		{
			name: "d",
			sound: require("./sounds/d.mp3"),
			key: "D",
		},
		{
			name: "j",
			sound: require("./sounds/j.mp3"),
			key: "J",
		},
		{
			name: "k",
			sound: require("./sounds/k.mp3"),
			key: "K",
		},
		{
			name: "l",
			sound: require("./sounds/l.mp3"),
			key: "L",
		},
	]);

	return (
		<div className="App">
			<h1 id='title'>Drum🥁Kit</h1>
			<div className="drums">
				{sounds.map((sound, i) => (
					<Drum key={i} letter={sound.key} sound={sound.sound} className='abc'/>
				))}
			</div>
		</div>
	);
}

export default App;
