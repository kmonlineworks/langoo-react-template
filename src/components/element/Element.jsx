import './Element.css';
import PropTypes from 'prop-types';

function Element({ text, style }) {
	return (
		<div style={style} className="design-element">
			{text}
		</div>
	);
}

Element.defaultProps = {
	text: 'Element Text',
	style: { color: '#fff', backgroundColor: '#333' },
};

Element.propTypes = {
	text: PropTypes.string.isRequired,
	style: PropTypes.object,
};

export default Element;
