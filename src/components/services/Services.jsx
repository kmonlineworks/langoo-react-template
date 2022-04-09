import './Services.css';
import { forwardRef } from 'react';
import { services } from './ServicesData';

const Services = forwardRef(({ button }, ref) => {
	return (
		<div className="wrapper">
			<div className="services" id="services" ref={ref}>
				<h2>What do we do?</h2>
				<div className="service-design">
					<span className="dot"></span>
					<span className="dot"></span>
					<span className="dot"></span>
				</div>
				<div className="services-content">
					{services?.slice(0, 3).map((service, index) => (
						<div key={index} className="service-item">
							<div className="service-icon">
								<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
									{service.svg}
								</svg>
								<img src={service.icon} alt="icon" />
							</div>
							<div className="service-text">
								<p>{service.text}</p>
							</div>
						</div>
					))}
				</div>
				<div className="signup">{button}</div>
			</div>
		</div>
	);
});

export default Services;
