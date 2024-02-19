import './style.scss';
import { Link } from 'react-router-dom';
import Image from './img.png';

export const Header = () => {
	return (
		<div className='header'>
			<img src={Image} alt='img' width={28} height={28} />
			<Link to='preview' target='_blank' className='header-link'>
				<span>Preview</span>
			</Link>
		</div>
	);
};
