import { memo } from 'react';
import './style.scss';

export const Label = memo(function Label({ label, children }) {
	return (
		<div className='label'>
			<label>{label}</label>
			{children}
		</div>
	);
}, arePropsEqual);

function arePropsEqual(oldProps, newProps) {
	return oldProps.children.props.value === newProps.children.props.value;
}
