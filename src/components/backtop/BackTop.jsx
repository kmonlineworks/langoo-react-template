import { useState, useEffect } from 'react';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import './BackTop.css';

function BackTop({ topRef }) {
	const [top, setTop] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 200) {
				setTop(true);
			} else {
				setTop(false);
			}
		});
	}, [top]);

	return (
		<span
			className="top"
			style={{ display: top ? 'block' : 'none' }}
			onClick={() => topRef.current.scrollIntoView()}
		>
			<FaArrowAltCircleUp />
		</span>
	);
}

export default BackTop;
