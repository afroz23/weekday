import './App.css';
import Card from '@/components/Card';

function App() {
	const myHeaders = new Headers();
	myHeaders.append('Content-Type', 'application/json');

	const body = JSON.stringify({
		limit: 10,
		offset: 0
	});

	const requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body
	};

	fetch(process.env.REACT_APP_BACKEND_URL, requestOptions)
		.then(response => response.text())
		.then(result => console.log(result))
		.catch(error => console.error(error));

	return (
		<div className='App'>
			Hello world!!
			<Card />
		</div>
	);
}

export default App;
