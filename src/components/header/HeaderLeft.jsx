import { Button, Design } from '../../components';

function HeaderLeft({ servicesRef }) {
	return (
		<div className="left">
			<Design />
			<div className="left-content">
				<h2>Talk to people who speak different languages?</h2>
				<p>
					We will find the most suitable interpreter for your need. Find your
					interpreter today through us.
				</p>
				<Button
					text1="Book an"
					text2="Interpreter"
					onClick={() => alert('You clicked button')}
				/>
				<div
					className="scroll-down"
					onClick={() => servicesRef.current.scrollIntoView()}
				>
					<span>Scroll Down</span>
				</div>
			</div>
		</div>
	);
}

export default HeaderLeft;
