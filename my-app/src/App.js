import logo from './logo.svg';
import './App.css';
import { createElement } from 'react';

// export const App = () => {
// 	const currentYear = `Current year: ${new Date().getFullYear()}`; //декларативный стиль
// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />
// 				{/* декларативный стиль */}
// 				<p>
// 					Edit <code>src/App.js</code> and save to reload.
// 				</p>
// 				<a
// 					className="App-link"
// 					href="https://reactjs.org"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					Learn React
// 				</a>
// 				<p>{currentYear}</p>
// 				{/* декларативный стиль */}
// 			</header>
// 		</div>
// 	);
// };

export const App = () => {
	const currentYear = `Current year: ${new Date().getFullYear()}`; //декларативный стиль
	return createElement(
		'div',
		{ className: 'App' },
		createElement(
			'header',
			{ className: 'App-header' },
			createElement('img', { src: logo, className: 'App-logo', alt: 'logo' }),
			createElement(
				'p',
				{},
				'Edit',
				createElement('code', {}, 'src/App.js'),
				' and save to reload.',
			),
			createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				'Learn React',
			),
			createElement('p', {}, currentYear),
		),
	);
};
