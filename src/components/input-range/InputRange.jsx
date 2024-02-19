import './style.scss';
import { useMemo } from 'react';

export const InputRange = ({ min, max, step, value, onChange }) => {
	let length = useMemo(() => (Math.abs(min) + Math.abs(max))/2, [min,max]);
	console.log(length);
	return (
		<>
			<input
				className='input-range'
				type='range'
				min={min}
				max={max}
				step={step}
				value={value}
				onChange={onChange}
				style={{"--width": `${60 / length * Math.abs(value)}px`, "--left": min + max > value ? `${60 - 60 / 150 * Math.abs(value)}px` :  `${60}px`}}
				//disabled={!value}
			/>
			<span className='input-range-value'>{value}</span>
		</>
	);
};
