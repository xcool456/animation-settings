import { makeAutoObservable } from 'mobx';

const INIT_SETTINGS = {
	x: 0,
	y: 0,
	opacity: 0,
	scale: 0,
	blur: 0,
	speed: 0,
	delay: 0,
};

class MainStore {
	animations = {};
	currentElement = null;

	constructor() {
		makeAutoObservable(this);
		this.animations = JSON.parse(window.localStorage.getItem('animations')) ?? {};
	}

	setCurrentElement = (el) => {
		this.currentElement = el;
	};

	get currentElementAnimation() {
		if (!this.currentElement) {
			return {};
		}
		this.animations[this.currentElement.id] = this.animations[this.currentElement.id] ?? INIT_SETTINGS;
		return this.animations[this.currentElement.id];
	}

	setProperty = (prop) => (e) => {
		const elementId = this.currentElement?.id;
		if (elementId) {
			this.animations[elementId][prop] = parseInt(e.target.value);
			this.updateLocalStorage();
		}
	};

	updateLocalStorage = () => {
		window.localStorage.setItem('animations', JSON.stringify(this.animations));
	};
}

export const mainStore = new MainStore();
