import { makeAutoObservable } from 'mobx';

const INIT_SETTINGS = {
	x: 0,
	y: 0,
	opacity: 50,
	scale: 10,
	blur: 5,
	speed: 3,
	delay: 0,
	easing: 'ease',
	replay: false,
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
		if (!this.animations[this.currentElement.id]) {
			return INIT_SETTINGS;
		}
		return this.animations[this.currentElement.id];
	}

	setProperty = (prop) => (e) => {
		const elementId = this.currentElement?.id;
		if (elementId) {
			this.animations[this.currentElement.id] = this.animations[this.currentElement.id] ?? INIT_SETTINGS;
			switch (e.target.type) {
				case 'select-one': {
					this.animations[elementId][prop] = e.target.value;
					break;
				}
				case 'checkbox': {
					this.animations[elementId][prop] = e.target.checked;
					break;
				}
				default: {
					this.animations[elementId][prop] = parseInt(e.target.value);
				}
			}
			this.updateLocalStorage();
		}
	};

	updateLocalStorage = () => {
		window.localStorage.setItem('animations', JSON.stringify(this.animations));
	};
}

export const mainStore = new MainStore();
