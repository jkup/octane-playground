import { useState } from 'octane';

type AppProps = {
	name: string;
};

export function App(props: AppProps) @{
	const [clicks, setClicks] = useState(0);

	<main>
		<h1>{'Hello, ' + props.name + '!'}</h1>
		<p>Running on Octane.</p>
		<button onClick={() => setClicks(clicks + 1)}>
			{clicks === 0 ? 'Click me' : 'Clicked ' + clicks + '×'}
		</button>
	</main>
}
