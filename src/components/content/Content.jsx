import './style.scss';
import Image from './img.png';

export const Content = ({ onClick }) => {
	return (
		<div className='content-block'>
			<div className='left'>
				<div id='h1' onClick={onClick}>
					Animation Settings
				</div>
				<div id='div' onClick={onClick}>
					The user should have the option to select any element on the page and set up its animation using the controls in the
					right panel. A dotted line will show the element's position and state before the animation begins, giving the user a
					clear idea of how the animation will appear. The preview button on the top panel will open the result in a new tab.
				</div>
				<button id='button' onClick={onClick}>
					Button
				</button>
			</div>
			<div className='right'>
				<img id='img' onClick={onClick} src={Image} width={300} height={300} alt='image' />
			</div>
		</div>
	);
};
