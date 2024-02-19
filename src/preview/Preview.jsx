import { useEffect, useRef, useState } from 'react';
import './style.scss';
import { Content } from '../components/content/Content';

export const Preview = () => {
	const [animations, setAnimations] = useState(() => JSON.parse(window.localStorage.getItem('animations')));
	const h1Ref = useRef();

	useEffect(() => {
		const element = document.getElementById('h1');
		element.classList.add('animate-element');
		const { style, id } = element;
		console.log(animations);
		style.setProperty('--effect-left', `${animations[id].x}px`);
		style.setProperty('--effect-top', `${animations[id].y}px`);
		style.setProperty('--effect-opacity', `${animations[id].opacity}%`);
	}, [animations, h1Ref]);

	return (
		<Content/>
	);
};
