import React from 'react';
import { inject, observer } from 'mobx-react';

export const PreviewElement = inject('store')(
	observer(({ store }) => {
		return (
			<div
				style={{
					border: '1px dashed black',
					background: 'blue',
					width: store.currentElement.clientWidth,
					height: store.currentElement.clientHeight,
					position: 'absolute',
					left: store.currentElement.offsetLeft + store.currentElementAnimation.x,
					top: store.currentElement.offsetTop + store.currentElementAnimation.y,
					opacity: store.currentElementAnimation.opacity + '%',
				}}
			></div>
		);
	})
);
