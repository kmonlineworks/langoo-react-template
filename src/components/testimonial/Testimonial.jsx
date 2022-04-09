import './Testimonial.css';
import { clientImages, clientReviews } from './TestimonialData';
import {
	FaArrowAltCircleLeft,
	FaArrowAltCircleRight,
	FaQuoteLeft,
} from 'react-icons/fa';
import { useState } from 'react';

function Testimonial({ design, circles }) {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [position, setPosition] = useState(0);

	const nextSlide = () => {
		if (currentSlide < clientReviews.length - 1) {
			setCurrentSlide((currentSlide) => currentSlide + 1);
			setPosition((position) => position - 100);
		}
		return currentSlide;
	};

	const prevSlide = () => {
		if (currentSlide > 0) {
			setCurrentSlide((currentSlide) => currentSlide - 1);
			setPosition((position) => position + 100);
		}
		return currentSlide;
	};

	return (
		<div className="testimonial-bg">
			{design}
			<div className="wrapper">
				<div className="testimonial">
					<h2>What our clients are saying?</h2>
					<div className="testimonial-content">
						<div className="testimonial-design">
							{circles}
							<div className="testimonial-boxs">
								{clientImages?.slice(0, 4).map((client, index) => (
									<div key={index} className="testimonial-box">
										<img src={client.brand} alt="brands" />
									</div>
								))}
							</div>
						</div>
						<div className="testimonial-reviews">
							{clientReviews?.slice(0, 4).map((review, index) => (
								<div
									key={index}
									className={`testimonial-slide ${
										currentSlide === index ? 'active' : ''
									}`}
									style={{
										left: `${position}%`,
									}}
								>
									<FaQuoteLeft className="testimonial-quote" />
									<p className="quote-text">{review.text}</p>
									<div className="author">
										<h3>{review.name}</h3>
										<small>
											<em>{review.designation}</em>
										</small>
									</div>
									{index >= 0 && clientReviews.length - 1 !== index ? (
										<FaArrowAltCircleLeft
											className="quote-arrow left"
											onClick={nextSlide}
										/>
									) : (
										''
									)}
									{index > 0 ? (
										<FaArrowAltCircleRight
											className="quote-arrow right"
											onClick={prevSlide}
										/>
									) : (
										''
									)}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Testimonial;
