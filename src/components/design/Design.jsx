import './Design.css';
import leftBackground from '../../images/lang.jpg';
import PropTypes from 'prop-types';

function Design({ style }) {
	return (
		<svg
			className="design"
			style={style}
			viewBox="0 0 200 200"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				id="left-path1"
				d="M52.9,-39.7C64.2,-28.1,66,-6.3,58.5,8.2C51.1,22.7,34.5,29.9,19.5,35.1C4.4,40.4,-9.1,43.6,-28.2,41.1C-47.3,38.6,-72.2,30.3,-69,22.1C-65.8,13.8,-34.7,5.5,-18.5,-7.2C-2.3,-20,-1.2,-37.2,9.8,-45C20.8,-52.8,41.6,-51.3,52.9,-39.7Z"
			/>
			<defs>
				<clipPath id="leftImg">
					<path
						id="left-path2"
						d="M52.9,-39.7C64.2,-28.1,66,-6.3,58.5,8.2C51.1,22.7,34.5,29.9,19.5,35.1C4.4,40.4,-9.1,43.6,-28.2,41.1C-47.3,38.6,-72.2,30.3,-69,22.1C-65.8,13.8,-34.7,5.5,-18.5,-7.2C-2.3,-20,-1.2,-37.2,9.8,-45C20.8,-52.8,41.6,-51.3,52.9,-39.7Z"
					/>
				</clipPath>
			</defs>
			<image href={leftBackground} alt="left-image" clipPath="url(#leftImg)" />
			<path
				id="left-path3"
				d="M52.9,-39.7C64.2,-28.1,66,-6.3,58.5,8.2C51.1,22.7,34.5,29.9,19.5,35.1C4.4,40.4,-9.1,43.6,-28.2,41.1C-47.3,38.6,-72.2,30.3,-69,22.1C-65.8,13.8,-34.7,5.5,-18.5,-7.2C-2.3,-20,-1.2,-37.2,9.8,-45C20.8,-52.8,41.6,-51.3,52.9,-39.7Z"
			/>
		</svg>
	);
}

Design.propTypes = {
	style: PropTypes.object,
};

export default Design;
