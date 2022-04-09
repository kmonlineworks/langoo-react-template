import './Button.css';
import PropTypes from 'prop-types';

function Button({ text1, text2, onClick }) {
	return (
		<button onClick={onClick}>
			{text1} <span>{text2}</span>
		</button>
	);
}

Button.defaultProps = {
	text1: 'Text 1',
	text2: 'Text 2',
};

Button.propTypes = {
	text1: PropTypes.string.isRequired,
	text2: PropTypes.string,
	onClick: PropTypes.any.isRequired,
};

export default Button;
