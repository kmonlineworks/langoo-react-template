import './Become.css';
import mobile from '../../images/mobile.png';
import { Element } from '../../components';
import { elementContent } from '../element/ElementData';
import { forwardRef } from 'react';

const Become = forwardRef(({ button, design, circles }, ref) => {
	return (
		<div className="become-bg">
			{design}
			<div className="wrapper">
				<div className="become" id="become" ref={ref}>
					<h2>Become an Interpreter and start Profiting?</h2>
					<div className="become-content">
						<div className="become-text">
							<p>
								Signup free and get booked for gifts. Explore offers made by
								clients and claim them.
							</p>
							<p>Gets rating from clients and level up to get more booking.</p>
							{button}
						</div>
						<div className="become-design">
							{circles}
							<div className="become-box">
								<img src={mobile} alt="mobile" />
								{elementContent?.slice(0, 4).map((item, index) => (
									<Element key={index} text={item.text} style={item.style} />
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
});

export default Become;
