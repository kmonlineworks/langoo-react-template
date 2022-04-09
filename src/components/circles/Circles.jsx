import './Circles.css';
import PropTypes from 'prop-types';

function Circles({ style }) {
	return (
		<div className="big-circles" style={style}>
			<div className="dots"></div>
		</div>
	);
}

Circles.propTypes = {
	style: PropTypes.object,
};

export default Circles;
