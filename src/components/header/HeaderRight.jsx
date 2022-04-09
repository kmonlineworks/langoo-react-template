import rightBackground from '../../images/image2.jpg';
import humanImage from '../../images/image1.png';
import { headerRightCountries } from './HeaderData';
import { Circles } from '../../components';

function HeaderRight() {
	return (
		<div className="right">
			<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
				<path
					id="path1"
					d="M50.2,-74.9C64.7,-68.8,75.8,-54.2,82.4,-38.1C88.9,-22,91,-4.3,82.3,7.3C73.6,19,54.2,24.6,43,37.1C31.9,49.7,29,69.2,19,78.6C8.9,87.9,-8.2,87.1,-22.2,80.6C-36.1,74.2,-46.9,62.1,-50.9,48.9C-54.9,35.7,-52.2,21.4,-56.6,6.6C-61,-8.1,-72.7,-23.3,-69.4,-32.1C-66,-40.9,-47.7,-43.3,-33.6,-49.5C-19.6,-55.8,-9.8,-65.9,4,-72.2C17.9,-78.5,35.7,-80.9,50.2,-74.9Z"
				/>
				<defs>
					<clipPath id="rightImg">
						<path
							id="path2"
							d="M50.2,-74.9C64.7,-68.8,75.8,-54.2,82.4,-38.1C88.9,-22,91,-4.3,82.3,7.3C73.6,19,54.2,24.6,43,37.1C31.9,49.7,29,69.2,19,78.6C8.9,87.9,-8.2,87.1,-22.2,80.6C-36.1,74.2,-46.9,62.1,-50.9,48.9C-54.9,35.7,-52.2,21.4,-56.6,6.6C-61,-8.1,-72.7,-23.3,-69.4,-32.1C-66,-40.9,-47.7,-43.3,-33.6,-49.5C-19.6,-55.8,-9.8,-65.9,4,-72.2C17.9,-78.5,35.7,-80.9,50.2,-74.9Z"
						/>
					</clipPath>
				</defs>
				<image
					href={rightBackground}
					alt="right-image"
					clipPath="url(#rightImg)"
				/>
				<path
					id="path3"
					d="M50.2,-74.9C64.7,-68.8,75.8,-54.2,82.4,-38.1C88.9,-22,91,-4.3,82.3,7.3C73.6,19,54.2,24.6,43,37.1C31.9,49.7,29,69.2,19,78.6C8.9,87.9,-8.2,87.1,-22.2,80.6C-36.1,74.2,-46.9,62.1,-50.9,48.9C-54.9,35.7,-52.2,21.4,-56.6,6.6C-61,-8.1,-72.7,-23.3,-69.4,-32.1C-66,-40.9,-47.7,-43.3,-33.6,-49.5C-19.6,-55.8,-9.8,-65.9,4,-72.2C17.9,-78.5,35.7,-80.9,50.2,-74.9Z"
				/>
			</svg>
			<div className="right-content">
				<Circles />
				<div className="human">
					<div style={{ backgroundImage: `url(${humanImage})` }}></div>
					<img src={humanImage} alt="human" />
				</div>
				<div className="flags">
					{headerRightCountries?.slice(0, 6).map((country, index) => (
						<div
							key={index}
							className="flag-box"
							style={{ transform: `rotate(${index * 60}deg)` }}
						>
							<div
								className="flag"
								style={{
									transform: `scale(${
										index % 2 !== 0 ? '0.9' : '1'
									}) translate(-50%, 0) rotate(${index * -60}deg)`,
								}}
							>
								<img src={country.image} alt="flag" />
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default HeaderRight;
