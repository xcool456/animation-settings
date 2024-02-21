import React from 'react';
import { inject, observer } from 'mobx-react';

export const PreviewElement = inject('store')(
	observer(({ store }) => {
		return (
			<div
				style={{
					pointerEvents: 'none',
					border: '1px dashed #3E87F8',
					background: '#70B2FF',
					boxShadow: 'inset white 0px 0px 5px',
					width: store.currentElement.clientWidth,
					height: store.currentElement.clientHeight,
					position: 'absolute',
					left: store.currentElement.offsetLeft + store.currentElementAnimation.x,
					top: store.currentElement.offsetTop + store.currentElementAnimation.y,
					opacity: '50%',
					scale: store.currentElementAnimation.scale / 10 + '',
				}}
			></div>
		);
	})
);
