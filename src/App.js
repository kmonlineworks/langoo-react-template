import './App.css';
import {
	BackTop,
	Become,
	Button,
	Circles,
	Design,
	Footer,
	Header,
	Navbar,
	Services,
	Testimonial,
} from './components';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRef } from 'react';

function App() {
	const becomeRef = useRef();
	const servicesRef = useRef();
	const topRef = useRef();

	return (
		<Router>
			<div className="bg-section">
				<Navbar
					button={
						<Button
							text1="Become an"
							text2="Interpreter"
							onClick={() => becomeRef.current.scrollIntoView()}
						/>
					}
				/>
				<Header servicesRef={servicesRef} ref={topRef} />
			</div>
			<Services
				ref={servicesRef}
				button={
					<Button
						text1="Sign up"
						text2=""
						onClick={() => alert('You clicked button')}
					/>
				}
			/>
			<Testimonial
				design={
					<Design
						style={{
							left: '48%',
							right: '0',
							top: '-150px',
							transform: 'rotate(240deg)',
						}}
					/>
				}
				circles={<Circles />}
			/>
			<Become
				ref={becomeRef}
				button={
					<Button
						text1="Apply Now"
						text2=""
						onClick={() => alert('You clicked button!')}
					/>
				}
				design={
					<Design
						style={{
							left: '0',
							right: '0',
							top: '180px',
							transform: 'rotate(70deg)',
						}}
					/>
				}
				circles={
					<Circles
						style={{
							top: '82%',
							left: '9%',
							transformOrigin: 'center top',
							transform: 'rotate(180deg)',
						}}
					/>
				}
			/>
			<Footer
				button={
					<Button
						text1="Book an"
						text2="Interpreter"
						onClick={() => alert('You clicked button')}
					/>
				}
			/>
			<BackTop topRef={topRef} />
		</Router>
	);
}

export default App;
