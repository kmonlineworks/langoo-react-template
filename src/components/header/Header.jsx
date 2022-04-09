import './Header.css';
import HeaderRight from './HeaderRight';
import HeaderLeft from './HeaderLeft';
import { forwardRef } from 'react';

const Header = forwardRef(({ servicesRef }, ref) => {
	return (
		<div className="header" id="top" ref={ref}>
			<HeaderLeft servicesRef={servicesRef} />
			<HeaderRight />
		</div>
	);
});

export default Header;
