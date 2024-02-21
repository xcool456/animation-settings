import { useEffect, useState } from 'react';
import './style.scss';
import { Content } from '../components/content/Content';

export const Preview = () => {
	const [animations, setAnimations] = useState();

	useEffect(() => {
		const localStorage = JSON.parse(window.localStorage.getItem('animations'));
		setAnimations(localStorage);
	}, []);

	useEffect(() => {
		if (animations) {
			for (const elId of Object.keys(animations)) {
				const element = document.getElementById(elId);
				element.classList.add('animate-element');
				const { style, id } = element;
				style.setProperty('--effect-left', `${animations[id].x}px`);
				style.setProperty('--effect-top', `${animations[id].y}px`);
				style.setProperty('--effect-opacity', `${animations[id].opacity}%`);
				style.setProperty('--effect-scale', `${animations[id].scale / 10}`);
				style.setProperty('--effect-blur', `${animations[id].blur}px`);
				style.setProperty('--effect-speed', `.${animations[id].speed}s`);
				style.setProperty('--effect-delay', `${animations[id].delay / 10}s`);
				style.setProperty('--effect-easing', animations[id].easing);
				style.setProperty('--effect-replay', animations[id].replay ? 'infinite' : 1);
			}
		}
	}, [animations]);

	return <Content />;
};
